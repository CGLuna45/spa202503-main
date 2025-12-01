# Script para desplegar a GitHub Pages
# Uso: .\deploy.ps1

Write-Host "🚀 Iniciando despliegue a GitHub Pages..." -ForegroundColor Cyan

# Paso 1: Compilar el proyecto
Write-Host "`n📦 Compilando proyecto..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Error al compilar" -ForegroundColor Red
    exit 1
}

# Paso 2: Desplegar con gh-pages
Write-Host "`n📤 Subiendo a GitHub Pages..." -ForegroundColor Yellow
npm run deploy
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Error al desplegar" -ForegroundColor Red
    exit 1
}

Write-Host "`n✅ ¡Despliegue completado exitosamente!" -ForegroundColor Green
Write-Host "⏰ Tu sitio estará disponible en 1-2 minutos" -ForegroundColor Green
