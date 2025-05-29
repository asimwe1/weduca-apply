#!/bin/bash

SERVER="landry@139.84.240.44"
PROJECT_PATH="/var/www/weducaapplyltd.com"

echo "Switching to branch master"
git checkout master

echo "Building React + Vite app..."
npm install
npm run build

echo "Copying files to server..."
scp -r dist/* $SERVER:$PROJECT_PATH/

echo "Deployment complete!"
echo "======================================= >>>>>>>>>>>>>>>>>>>>>> \n"

echo "Restarting Nginx on the server..."
ssh "$SERVER" "sudo systemctl restart nginx"

# Check if the restart was successful
if [ $? -eq 0 ]; then
    echo "Nginx restarted successfully on $SERVER"
else
    echo "Failed to restart Nginx on $SERVER"
fi
