$ErrorActionPreference = "Stop"

$installDir = "D:\BMS189Server"

Write-Host "Installing BMS189 to $installDir"

if (Test-Path $installDir) {
    Remove-Item $installDir -Recurse -Force
}

New-Item -ItemType Directory -Path $installDir | Out-Null

$serverZip = "$env:TEMP\BMS189Server.zip"

# Google Drive download
Invoke-WebRequest -Uri "https://github.com/xvn5002036/BMS189/releases/latest/download/BMS189Server.zip" -OutFile $serverZip

Expand-Archive -Path $serverZip -DestinationPath $installDir -Force

Write-Host "BMS189 Installed!"
