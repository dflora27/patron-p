$ErrorActionPreference = "Stop"

$files = Get-ChildItem -Path c:\Users\yanik\Music\patron2\ -Recurse -Include *.tsx,*.ts,*.css
$utf8 = [System.Text.Encoding]::UTF8
$utf8NoBom = New-Object System.Text.UTF8Encoding $false

foreach ($f in $files) {
    if ($f.FullName -match "node_modules|\\\.next") { continue }
    
    $c = [System.IO.File]::ReadAllText($f.FullName, $utf8)
    $changed = $false
    
    if ($c -match "brand-gold") {
        $c = $c -replace "brand-gold", "brand-mint"
        $changed = $true
    }
    if ($c -match "197,160,89") {
        $c = $c -replace "197,160,89", "169,209,185"
        $changed = $true
    }
    
    if ($changed) {
        [System.IO.File]::WriteAllText($f.FullName, $c, $utf8NoBom)
        Write-Host "Replaced in $($f.Name)"
    }
}
