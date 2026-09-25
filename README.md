# DualTube Viewer Web v0.3.1

## v0.3.1 追加
- 「↻ 横画面 / ↻ 縦画面」ボタン
- 押すたびに portrait / landscape を切替
- 現在の画面方向に合わせてボタン表示も自動変更
- 横画面時は既存CSSによりプレイヤーを左右表示
- 端末/ブラウザが強制回転を拒否した場合は案内を表示

## v0.3から維持
- YouTube検索導線
- YouTube共有 → DualTube
- 共有URLを「上 / 下」に投入
- 上下独立音量
- 上だけ / 下だけ / 両方
- 視聴モード
- 上下入替
- URL/音量/表示状態の保存
- PWA対応

## 更新方法
GitHub Pagesのリポジトリで以下を上書き:
- index.html
- sw.js

manifest.webmanifest とアイコンはv0.3から変更していません。
全部まとめて上書きしても問題ありません。

## 重要
Screen Orientation APIはAndroid/ブラウザ/PWAの状態によって制限されます。
ボタンで強制回転できない場合でも、端末の自動回転をONにして物理的に回転すれば、
DualTubeはCSSで自動的に上下表示↔左右表示へ切り替わります。
