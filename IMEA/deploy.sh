#!/bin/bash

# ─────────────────────────────────────────────
#  IMEA Strapi Deploy Script
#  Run from: ~/Desktop/imeu_backend1/IMEA/
# ─────────────────────────────────────────────

SERVER="root@178.128.172.98"
REMOTE_PATH="/home/websites/imeu/backend/imeu-webapi.omni.co.ug/imeu_backend1/IMEA"
PM2_APP="imea-backend"  # <-- Change this to your actual pm2 app name

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "  IMEA Strapi Deploy"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━══"
# Step 1: Build locally
echo ""
echo "▶ Step 1: Building admin panel locally..."
NODE_ENV=production npm run build

if [ $? -ne 0 ]; then
  echo "✘ Build failed. Fix errors before deploying."
  exit 1
fi
echo "✔ Build successful."

# Step 2: Stop Strapi on server
echo ""
echo "▶ Step 2: Stopping Strapi on server..."
ssh $SERVER "pm2 stop $PM2_APP"
echo "✔ Server stopped."


# Step 3: Delete old src/ and build/ on server
echo ""
echo "▶ Step 3: Removing old src/ and build/ on server..."
ssh $SERVER "cd $REMOTE_PATH && rm -rf src/ build/"
echo "✔ Old files removed."

# Step 5: Upload new src/ and build/
echo ""
echo "▶ Step 5: Uploading new src/ and build/ to server..."
scp -r ./src/ ./build/ $SERVER:$REMOTE_PATH/
echo "✔ Files uploaded."

# Step 6: Restart Strapi
echo ""
echo "▶ Step 6: Restarting Strapi on server..."
ssh $SERVER "pm2 restart $PM2_APP"
echo "✔ Strapi restarted."

# Step 7: Show live logs briefly
echo ""
echo "▶ Step 7: Live logs (Ctrl+C to exit)..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
ssh $SERVER "pm2 logs $PM2_APP --lines 20"