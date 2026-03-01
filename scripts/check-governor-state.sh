#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

warn() {
  echo "GOVERNOR CHECK WARNING: $1" >&2
}

if [[ -x "scripts/check-canonical.sh" ]]; then
  bash scripts/check-canonical.sh
else
  warn "scripts/check-canonical.sh not found or not executable."
fi

LOCKED_FILE=".ai-kit/prompts/DECISIONS-LOCKED.md"
if [[ ! -f "$LOCKED_FILE" ]]; then
  warn "$LOCKED_FILE not found."
  exit 0
fi

# Heuristic: count blank locked decision lines that end immediately after colon.
blank_count="$(rg -n "^- \*\*[^:]+:\*\*\s*$" "$LOCKED_FILE" | wc -l | tr -d ' ')"
if [[ "${blank_count}" -gt 0 ]]; then
  warn "${blank_count} locked-decision fields are blank in $LOCKED_FILE."
  warn "If task is choice-heavy, run RUN_DECISION_GATES -> GENERATE_DECISION_REPORT -> LOCK_DECISIONS."
else
  echo "Governor state check: locked decisions appear populated."
fi
