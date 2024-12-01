#!/bin/bash

# コミットメッセージを引数として受け取る
if [ -z "$1" ]
then
  echo "コミットメッセージを入力してください"
  exit 1
fi

# Gitコマンドの実行
git add .
git commit -m "$1"
git push origin main

# PM2デプロイメント
pm2 deploy ecosystem.config.js production
