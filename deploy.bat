@echo off
echo Deploying portfolio to GitHub Pages...

git add .
git commit -m "Deploy portfolio updates"
git push origin main

echo Deployment complete!
pause
