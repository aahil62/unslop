#!/usr/bin/env bash
set -euo pipefail

# AI Dev Workflow Kit — Install Script
# Copies .ai-kit/ into the target project directory.

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
KIT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)/.ai-kit"

usage() {
  echo "Usage: $0 [--force] <target-directory>"
  echo ""
  echo "  Copies .ai-kit/ into the target project directory."
  echo ""
  echo "Options:"
  echo "  --force    Overwrite existing .ai-kit/ in target directory"
  echo ""
  echo "Examples:"
  echo "  $0 /path/to/my-project"
  echo "  $0 --force /path/to/my-project"
  exit 1
}

FORCE=false
TARGET=""

while [[ $# -gt 0 ]]; do
  case "$1" in
    --force)
      FORCE=true
      shift
      ;;
    -h|--help)
      usage
      ;;
    *)
      TARGET="$1"
      shift
      ;;
  esac
done

if [[ -z "$TARGET" ]]; then
  echo "Error: No target directory specified."
  usage
fi

if [[ ! -d "$TARGET" ]]; then
  echo "Error: Target directory does not exist: $TARGET"
  exit 1
fi

if [[ ! -d "$KIT_DIR" ]]; then
  echo "Error: .ai-kit/ not found at $KIT_DIR"
  exit 1
fi

DEST="$TARGET/.ai-kit"

if [[ -d "$DEST" ]] && [[ "$FORCE" != true ]]; then
  echo "Error: .ai-kit/ already exists in $TARGET"
  echo "Use --force to overwrite."
  exit 1
fi

if [[ -d "$DEST" ]] && [[ "$FORCE" == true ]]; then
  echo "Removing existing .ai-kit/ in $TARGET..."
  rm -rf "$DEST"
fi

echo "Copying .ai-kit/ to $TARGET..."
cp -R "$KIT_DIR" "$DEST"

# Create root pointer if it doesn't exist
if [[ ! -f "$TARGET/AGENTS.md" ]]; then
  echo '# See .ai-kit/AGENTS.md for all agent rules and resources.' > "$TARGET/AGENTS.md"
  echo "Created AGENTS.md pointer at $TARGET/AGENTS.md"
fi

echo ""
echo "Done! AI Dev Workflow Kit installed."
echo ""
echo "Next steps:"
echo "  1. Open .ai-kit/CANONICAL.md and pick a shipped template"
echo "  2. Paste the template into your AI coding agent"
echo "  3. Start building!"
