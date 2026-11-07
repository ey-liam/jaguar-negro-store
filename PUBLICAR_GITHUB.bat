@echo off
chcp 65001 >nul
echo ========================================================
echo   JAGUAR NEGRO MX — PUBLICADOR OFICIAL GITHUB PAGES
echo ========================================================
cd /d "%~dp0"

git status >nul 2>&1
if errorlevel 1 (
    git init -b main
    git config user.name "Liam Durán"
    git config user.email "rdc.tlxh@gmail.com"
)

git add -A
git commit -m "chore: actualizar sitio oficial Jaguar Negro MX" 2>nul

git remote get-url origin >nul 2>&1
if errorlevel 1 (
    echo Creando repositorio publico ey-liam/jaguar-negro en GitHub...
    gh repo create ey-liam/jaguar-negro --public --source=. --remote=origin --push
    echo Activando GitHub Pages en rama main...
    gh api -X POST repos/ey-liam/jaguar-negro/pages -f "build_type=legacy" -f "source[branch]=main" -f "source[path]=/"
) else (
    echo Subiendo cambios a origin/main...
    git push -u origin main
)

echo.
echo Listo! Tu tienda estara disponible en:
echo https://ey-liam.github.io/jaguar-negro/
pause
