Write-Host "Updating BMS189..."

$installDir = "D:\BMS189Server"
$updateZip = "$env:TEMP\update.zip"

Invoke-WebRequest -Uri "https://github.com/xvn5002036/BMS189/releases/latest/download/update.zip" -OutFile $updateZip

Expand-Archive -Path $updateZip -DestinationPath $installDir -Force

Write-Host "Update complete!"
