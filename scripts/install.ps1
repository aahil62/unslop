# AI Dev Workflow Kit — Install Script (PowerShell)
# Copies .ai-kit/ into the target project directory.

param(
    [switch]$Force,
    [Parameter(Mandatory=$true, Position=0)]
    [string]$TargetDirectory
)

$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$KitDir = Join-Path (Split-Path -Parent $ScriptDir) ".ai-kit"

if (-not (Test-Path $TargetDirectory -PathType Container)) {
    Write-Error "Target directory does not exist: $TargetDirectory"
    exit 1
}

if (-not (Test-Path $KitDir -PathType Container)) {
    Write-Error ".ai-kit/ not found at $KitDir"
    exit 1
}

$Dest = Join-Path $TargetDirectory ".ai-kit"

if ((Test-Path $Dest) -and -not $Force) {
    Write-Error ".ai-kit/ already exists in $TargetDirectory. Use -Force to overwrite."
    exit 1
}

if ((Test-Path $Dest) -and $Force) {
    Write-Host "Removing existing .ai-kit/ in $TargetDirectory..."
    Remove-Item -Recurse -Force $Dest
}

Write-Host "Copying .ai-kit/ to $TargetDirectory..."
Copy-Item -Recurse $KitDir $Dest

# Create root pointer if it doesn't exist
$AgentsFile = Join-Path $TargetDirectory "AGENTS.md"
if (-not (Test-Path $AgentsFile)) {
    "# See .ai-kit/AGENTS.md for all agent rules and resources." | Out-File -FilePath $AgentsFile -Encoding utf8
    Write-Host "Created AGENTS.md pointer at $AgentsFile"
}

Write-Host ""
Write-Host "Done! AI Dev Workflow Kit installed."
Write-Host ""
Write-Host "Next steps:"
Write-Host "  1. Open .ai-kit/CANONICAL.md and pick a shipped template"
Write-Host "  2. Paste the template into your AI coding agent"
Write-Host "  3. Start building!"
