$base = "C:\Users\Timothy Abejoye\Desktop\Pneuma Global"

Write-Host "=== Copying react-app/src to root src/ ==="

# Remove empty root src/ first
if (Test-Path "$base\src") {
    Remove-Item -Path "$base\src" -Recurse -Force
}

# Copy react-app/src to root
Copy-Item -Path "$base\react-app\src" -Destination "$base\src" -Recurse -Force
Write-Host "Copied src/ successfully"

# Also make sure root src doesn't have App.css/App.jsx missing
$missingSrc = @(
    "$base\react-app\src\App.jsx",
    "$base\react-app\src\App.css",
    "$base\react-app\src\main.jsx",
    "$base\react-app\src\index.css",
    "$base\react-app\src\style.css"
)
foreach ($f in $missingSrc) {
    if (Test-Path $f) {
        Copy-Item -Path $f -Destination "$base\src\" -Force
        Write-Host "Copied $f"
    }
}

Write-Host "=== Done! ==="
