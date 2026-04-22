$ErrorActionPreference = "Stop"

$files = Get-ChildItem -Path c:\Users\yanik\Music\patron2\ -Recurse -Include *.tsx,*.ts,*.css
$utf8 = [System.Text.Encoding]::UTF8
$utf8NoBom = New-Object System.Text.UTF8Encoding $false

foreach ($f in $files) {
    if ($f.FullName -match "node_modules|\\\.next") { continue }
    
    $c = [System.IO.File]::ReadAllText($f.FullName, $utf8)
    $changed = $false
    
    # Old mint green rgba -> new dark green rgba (89,133,101)
    if ($c -match "169,209,185") {
        $c = $c -replace "169,209,185", "89,133,101"
        $changed = $true
    }
    
    # Old cinnamon rgba -> new dark terra cotta rgba (167,77,58)
    if ($c -match "210,105,30") {
        $c = $c -replace "210,105,30", "167,77,58"
        $changed = $true
    }
    
    if ($changed) {
        [System.IO.File]::WriteAllText($f.FullName, $c, $utf8NoBom)
        Write-Host "Replaced RGBA in $($f.Name)"
    }
}
