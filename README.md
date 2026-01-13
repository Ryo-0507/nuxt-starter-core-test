# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# pnpm
pnpm install
```

### devcontainer起動後

1. `.vscode/extensions.json`にある拡張機能をインストールする
2. コンテナのターミナルで`git config --global --list` を実行し、git設定が反映されているか確認する
3. 反映されていない場合は、以下を実施する
4. ホストのターミナルで`git config --global --list` を実行し、git設定を確認する
5. コンテナのターミナルで`git config --global user.name "<ホストで設定されているuser.name>"`を実行する
6. コンテナのターミナルで`git config --global user.email "<ホストで設定されているuser.email>"`を実行する

### devcontainer設定修正時

```shell
# コンテナID確認
docker ps -a
# コンテナ削除
docker rm -f <コンテナID>
# 関連するイメージ確認
docker images
# 関連するイメージ削除
docker rmi <イメージID>
```

### トラブルシューティング

#### devcontainer起動時、Container startedから進まない場合

以下手順を実施する

1. command + shift + pを押下する
2. 「Reload Window」を選択する

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## sourcetree のセットアップ

husky を sourcetree から使用できるようにするため、以下を実行する

```shell
% brew install pnpm
% mkdir -p ~/.config/husky
% touch ~/.config/husky/init.sh
% cat << 'EOF' > ~/.config/husky/init.sh
heredoc> # Homebrewのパスを通す（M1/M2/M3 Mac用）
export PATH="/opt/homebrew/bin:$PATH"

# fnm (Node.jsバージョン管理) の初期化
# SourceTreeはsh/bashで動くため、明示的にbash用の設定を出力させる
if command -v fnm > /dev/null; then
  eval "$(fnm env --shell bash)"
fi
EOF
```

## eslint

### ブラウザで設定を確認する

```shell
# devcontainerではデスクトップ環境（GUI）やそれに関連するツールが入っていないため
# --no-open オプションを付ける
npx @eslint/config-inspector --no-open
```

### コンソールにJSON出力する

```shell
pnpm eslint --print-config app/app.vue
```
