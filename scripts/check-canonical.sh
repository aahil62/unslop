#!/usr/bin/env bash
set -euo pipefail

# NOTE:
# These legacy strings appear in this file only as negative assertions.
# Do not copy them into docs.

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

fail() {
  echo "CANONICAL CHECK FAILED: $1" >&2
  exit 1
}

find_fixed() {
  local pattern="$1"
  local file="$2"
  if command -v rg >/dev/null 2>&1; then
    rg -q --fixed-strings -- "$pattern" "$file"
  else
    grep -Fq -- "$pattern" "$file"
  fi
}

check_contains() {
  local file="$1"
  local pattern="$2"
  find_fixed "$pattern" "$file" || fail "$file missing: $pattern"
}

check_not_contains() {
  local file="$1"
  local pattern="$2"
  if find_fixed "$pattern" "$file"; then
    fail "$file contains forbidden text: $pattern"
  fi
}

VERSION="$(sed -n 's/^- \*\*KIT_VERSION:\*\* `\(v[^`]*\)`/\1/p' .ai-kit/CANONICAL.md)"
[[ -n "$VERSION" ]] || fail "Unable to parse KIT_VERSION from .ai-kit/CANONICAL.md"

check_contains "README.md" "**KIT_VERSION:** ${VERSION}"
check_contains ".ai-kit/README.md" "**KIT_VERSION:** ${VERSION}"
check_contains ".ai-kit/VERSIONING.md" "KIT_VERSION: ${VERSION}"

EPCC_CHAIN="Explore → Plan → Code → Verify → Audit"
check_contains ".ai-kit/CANONICAL.md" "- **EPCC:** \`${EPCC_CHAIN}\`"
check_contains "README.md" "${EPCC_CHAIN}"
check_contains ".ai-kit/prompts/WORKFLOW.md" "${EPCC_CHAIN}"
check_not_contains ".ai-kit/prompts/WORKFLOW.md" "Explore → Plan → Code → Check → Polish → Ship"

check_not_contains ".ai-kit/prompts/ACTIVATE.md" "A–G"
check_not_contains ".ai-kit/prompts/ACTIVATE.md" "A-G"
check_not_contains "README.md" "A–G"
check_not_contains ".ai-kit/README.md" "A–G"
check_not_contains ".ai-kit/prompts/USER-GUIDE.md" "A–G"
check_not_contains ".ai-kit/prompts/DECISION-GATES.md" "5–8 items"
check_not_contains ".ai-kit/resources/cards/ui-inspiration-to-lane.md" "5–8"
check_not_contains "scripts/install.sh" "A-H"
check_not_contains "scripts/install.sh" "A-L"
check_not_contains "scripts/install.ps1" "A-H"
check_not_contains "scripts/install.ps1" "A-L"

check_contains ".ai-kit/CANONICAL.md" "### Default (minimal-kit usable)"
check_contains ".ai-kit/CANONICAL.md" "I) Landing (Illustrated BG Lane)"
check_contains ".ai-kit/CANONICAL.md" "H) Ship-Ready QA"

echo "Canonical checks passed."
