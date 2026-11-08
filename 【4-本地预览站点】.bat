@echo off
chcp 65001 >nul
title Muse 案例库 - 本地快速预览
cd /d "%~dp0"

echo ====================================================
echo        Muse 案例库 - 本地预览启动器
echo ====================================================
echo.
echo 正在打开默认浏览器访问: http://localhost:8787 ...
echo.

start http://localhost:8787

python -m http.server 8787

pause
