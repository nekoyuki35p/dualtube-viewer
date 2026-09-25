# DualTube Viewer Web v0.3

## 今回の追加
- YouTube検索導線
  - DualTube上部から検索
  - YouTube検索結果を開く
  - 見つけた動画を「共有 → DualTube」で戻す
- Android / PWA共有受信
  - YouTubeの共有先にDualTubeを登録
  - 共有されたURLを解析
  - 「上に入れる / 下に入れる」を選択
  - 選択後、そのプレイヤーへ動画をセット
- v0.2の機能は維持
  - 上下個別音量
  - 上だけ / 下だけ / 両方
  - 視聴モード
  - 上下入替
  - 設定保存
  - PWA

## GitHub Pages更新
既存リポジトリのルートに以下を上書きアップロード:
- index.html
- manifest.webmanifest
- sw.js
- icon-192.png
- icon-512.png

## 重要: 共有先にDualTubeが出ない場合
share_target はPWAのインストール情報としてOSへ登録されます。
すでにv0.2をインストール済みの場合、更新後すぐに共有先へ反映されないことがあります。

その場合:
1. GitHub Pagesがv0.3へ更新されたことを確認
2. ホーム画面の旧DualTubeをアンインストール / 削除
3. ChromeでGitHub Pages版を開く
4. もう一度「アプリをインストール」または「ホーム画面に追加」
5. YouTubeアプリ → 動画 → 共有 からDualTubeを確認

Web Share Targetは対応ブラウザ・OSに依存します。Android + Chromium系PWAを主対象にしています。
