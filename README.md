# 体験農園 BeePark — ウェブサイト

## ファイル構成
```
beepark-website/
├── index.html   メインページ（ロゴBase64埋め込み済み）
├── style.css    スタイルシート
├── main.js      インタラクション
└── README.md    このファイル
```

## GitHub Pages 公開手順
1. GitHubで新規リポジトリを作成
2. この4ファイルをリポジトリにドラッグ＆ドロップ
3. Settings → Pages → Source: main / root → Save
4. `https://ユーザー名.github.io/リポジトリ名/` で公開完了

## カスタムドメイン設定
1. Settings → Pages → Custom domain にドメインを入力
2. `CNAME` ファイルをリポジトリに追加（ドメイン名のみ記載）
3. DNS設定でCNAMEを `ユーザー名.github.io` に向ける

## SEO対策（実装済み）
- タイトル・メタディスクリプション・メタキーワード最適化
- JSON-LD 構造化データ（LocalBusiness）
- OGPタグ（SNSシェア対応）
- セマンティックHTML（h1〜h3の適切な階層）
- canonicalタグ・robotsタグ

## Google フォーム
お問い合わせフォームは Google Forms を iframe で埋め込み済みです。
フォームの内容変更は Google Forms 側で行ってください。
