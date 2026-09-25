# DualTube Viewer Web v0.3.2

## 修正内容
YouTubeの「共有 → DualTube」を選んでもURLが本体へ反映されない問題を修正。

以前:
share_target → index.html のクエリを直接読む

v0.3.2:
share_target → share-target.html
→ 共有データをlocalStorageへ一時保存
→ DualTube本体へリダイレクト
→ 「上に入れる / 下に入れる」を表示

この方式の方が、Androidで既に起動しているPWAへ共有した場合にも扱いやすくなります。

## GitHub Pagesへアップロードするファイル
- index.html
- share-target.html  ← 新規
- manifest.webmanifest
- sw.js
- icon-192.png
- icon-512.png

## 重要
share_target の action が変わったため、
GitHub Pages更新後はDualTubeを一度アンインストール/削除し、
Chromeからもう一度PWAとしてインストールしてください。

## テスト手順
1. YouTubeアプリで動画を開く
2. 共有
3. DualTubeを選択
4. DualTubeが開く
5. 「上に入れる / 下に入れる」が表示される
6. どちらかをタップ
7. 選んだプレイヤーにURLが入る
