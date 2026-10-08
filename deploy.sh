#!/usr/bin/env bash
set -euo pipefail

echo "=== Deploy NzaDev Hub ke GitHub Pages ==="

if [ ! -d ".git" ]; then
  git init
  echo "✓ Git repository initialized."
fi

git add .
git commit -m "feat: NzaDev Hub - Unified Arcade & Web App Suite v1.0" || echo "No changes to commit."

echo ""
echo "Pilihan target remote repo:"
echo "1) nzadev.github.io (Menjadi website utama root domain)"
echo "2) nzadev-hub (Menjadi sub-path https://nzadev.github.io/nzadev-hub/)"
echo "3) Custom URL"
echo ""
read -p "Masukkan pilihan (1/2/3) atau URL remote langsung: " -r CHOICE

TARGET_URL=""
if [ "$CHOICE" = "1" ]; then
  TARGET_URL="https://github.com/nzadev/nzadev.github.io.git"
elif [ "$CHOICE" = "2" ]; then
  TARGET_URL="https://github.com/nzadev/nzadev-hub.git"
elif [ "$CHOICE" = "3" ]; then
  read -p "Masukkan URL remote GitHub: " -r TARGET_URL
else
  TARGET_URL="$CHOICE"
fi

if [ -n "$TARGET_URL" ]; then
  git remote remove origin 2>/dev/null || true
  git remote add origin "$TARGET_URL"
  git branch -M main
  echo "Mendorong branch main ke $TARGET_URL ..."
  git push -u origin main
  echo ""
  echo "✓ Berhasil di-push ke GitHub!"
  echo "Aktifkan GitHub Pages di Settings -> Pages -> Branch 'main' / root -> Save."
fi
