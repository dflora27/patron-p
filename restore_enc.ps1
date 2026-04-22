$files = @(
  "c:\Users\yanik\Music\patron2\components\hero\ParallaxHero.tsx",
  "c:\Users\yanik\Music\patron2\components\conversion\FastBooking.tsx",
  "c:\Users\yanik\Music\patron2\components\layout\Footer.tsx",
  "c:\Users\yanik\Music\patron2\components\sections\AboutUs.tsx",
  "c:\Users\yanik\Music\patron2\components\sections\BeforeAfter.tsx",
  "c:\Users\yanik\Music\patron2\components\sections\BrandsMarquee.tsx",
  "c:\Users\yanik\Music\patron2\components\sections\JournalSection.tsx",
  "c:\Users\yanik\Music\patron2\components\sections\PhotoGallery.tsx",
  "c:\Users\yanik\Music\patron2\components\sections\PricingSection.tsx",
  "c:\Users\yanik\Music\patron2\components\sections\ReviewsSection.tsx",
  "c:\Users\yanik\Music\patron2\components\sections\ServicesGrid.tsx",
  "c:\Users\yanik\Music\patron2\components\sections\TeamGallery.tsx",
  "c:\Users\yanik\Music\patron2\components\ui\Preloader.tsx"
)

$enc1254 = [System.Text.Encoding]::GetEncoding(1254)
$encUTF8 = [System.Text.Encoding]::UTF8
$pattern = [string][char]195 # Code point for A-tilde

foreach ($f in $files) {
    if (Test-Path $f) {
        $bytes = [System.IO.File]::ReadAllBytes($f)
        $corruptStr = $encUTF8.GetString($bytes)
        
        if ($corruptStr.Contains($pattern)) {
            $originalBytes = $enc1254.GetBytes($corruptStr)
            $fixedStr = $encUTF8.GetString($originalBytes)
            
            [System.IO.File]::WriteAllText($f, $fixedStr)
            Write-Host "Restored Encoding: $f"
        } else {
            Write-Host "Encoding OK: $f"
        }
    }
}
