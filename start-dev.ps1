# Script para desplegar el proyecto Abilene Salas localmente
Write-Host "Iniciando Abilene Salas - Sistema de Reservas" -ForegroundColor Cyan
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""

# Verificar que estamos en el directorio correcto
$projectRoot = "C:\Users\Amaury\.gemini\antigravity\scratch\abilene-salas"
Set-Location $projectRoot

Write-Host ""
Write-Host "Verificando dependencias..." -ForegroundColor Yellow

# Verificar node_modules del frontend
if (-not (Test-Path "$projectRoot\node_modules")) {
    Write-Host "   Instalando dependencias del frontend..." -ForegroundColor Gray
    npm install
}

# Verificar node_modules del backend
if (-not (Test-Path "$projectRoot\backend\node_modules")) {
    Write-Host "   Instalando dependencias del backend..." -ForegroundColor Gray
    Set-Location "$projectRoot\backend"
    npm install
    Set-Location $projectRoot
}

Write-Host ""
Write-Host "Verificando base de datos..." -ForegroundColor Yellow
Set-Location "$projectRoot\backend"

# Generar Prisma Client
Write-Host "   Generando Prisma Client..." -ForegroundColor Gray
npm run db:generate

# Sincronizar esquema con la base de datos
Write-Host "   Sincronizando esquema..." -ForegroundColor Gray
npm run db:push

Set-Location $projectRoot

Write-Host ""
Write-Host "Todo listo! Iniciando servicios..." -ForegroundColor Green
Write-Host ""

# Crear ventanas separadas para cada servicio
Write-Host "Frontend: http://localhost:3000" -ForegroundColor Cyan
Write-Host "Backend: http://localhost:4000" -ForegroundColor Cyan
Write-Host ""
Write-Host "Presiona Ctrl+C en cada ventana para detener los servicios" -ForegroundColor Yellow
Write-Host ""

# Iniciar Backend en nueva ventana
$backendPath = "$projectRoot\backend"
Start-Process pwsh -ArgumentList "-NoExit", "-Command", "Set-Location '$backendPath'; Write-Host 'Backend API - Puerto 4000' -ForegroundColor Green; npm run dev"

# Esperar 3 segundos antes de iniciar el frontend
Start-Sleep -Seconds 3

# Iniciar Frontend en nueva ventana
Start-Process pwsh -ArgumentList "-NoExit", "-Command", "Set-Location '$projectRoot'; Write-Host 'Frontend Next.js - Puerto 3000' -ForegroundColor Blue; npm run dev"

Write-Host "Servicios iniciados exitosamente!" -ForegroundColor Green
Write-Host ""
Write-Host "Para detener los servicios:" -ForegroundColor Yellow
Write-Host "   - Presiona Ctrl+C en cada ventana de PowerShell" -ForegroundColor Gray
Write-Host "   - O cierra las ventanas directamente" -ForegroundColor Gray
