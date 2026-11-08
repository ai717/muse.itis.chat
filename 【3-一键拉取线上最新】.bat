@echo off
cd /d "%~dp0"
echo Syncing latest commits from GitHub...
git pull --rebase origin main
echo Done.
pause
