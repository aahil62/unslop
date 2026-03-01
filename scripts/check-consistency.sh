#!/usr/bin/env bash
set -euo pipefail

echo "DEPRECATED: use scripts/check-canonical.sh"
bash "$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)/check-canonical.sh"
