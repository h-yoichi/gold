# gold

借金バレるリスク診断アプリ（静的Webアプリ）です。

## ローカル起動

依存パッケージは不要です。任意の静的サーバーで起動できます。

```bash
python3 -m http.server 8000
```

ブラウザで `http://localhost:8000` を開いてください。

## 実装内容

- ファーストビュー（診断開始導線）
- 5問・1問ずつ進む診断UI（進捗バー、戻るボタン付き）
- 合計点 + 重要設問補正（Q1/Q5）によるリスク判定
- 回答に応じたリスク経路表示
- リスクレベル別の結果文・CTA表示
- 相談フォーム連携用のhidden項目出力
- 計測イベント（`diagnosis_start`, `question_answered`, `diagnosis_completed`, `cta_clicked`, `form_started`, `form_submitted`）

## 補足

- URLクエリで一部A/B表示の切り替えを試せます（例: `?ctaVariant=B&headlineVariant=C`）。
- フォーム送信はデモ実装で、実運用時は外部フォーム/LP連携に置き換えてください。
