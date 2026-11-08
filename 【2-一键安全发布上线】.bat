@echo off
chcp 65001 >nul
title Muse 案例库 - 一键安全发布上线
cd /d "%~dp0"

echo ====================================================
echo        Muse 案例库 - 一键安全构建与发布上线
echo ====================================================
echo.

node scripts/publish.js

echo.
pause
