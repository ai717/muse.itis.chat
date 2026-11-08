@echo off
chcp 65001 >nul
title Muse 案例库 - 一键入库草稿并构建
cd /d "%~dp0"

echo ====================================================
echo        Muse 案例库 - 本地新增案例入库工具
echo ====================================================
echo.
echo 正在检查 staging/ 目录中的草稿...
echo.

node scripts/add-case.js

echo.
pause
