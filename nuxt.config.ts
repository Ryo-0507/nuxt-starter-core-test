// https://nuxt.com/docs/api/configuration/nuxt-config
import process from 'node:process';

export default defineNuxtConfig({
  modules: [
    'unplugin-turbo-console/nuxt',
    '@nuxt/eslint',
    'nuxt-security',
  ],
  devtools: { enabled: true },
  compatibilityDate: '2025-07-15',
  eslint: {
    config: {
      standalone: false, // @antfu/eslint-configがあるためeslint.config.mjsを自動生成しない
    },
  },
  turboConsole: {
    launchEditor: {
      specifiedEditor: 'agy', // Antigravityエディタで開く
    },
  },
  security: {
    // レート制限はWAFでするため無効化
    rateLimiter: false,
    // リクエストサイズ制限はWAFでするため無効化
    requestSizeLimiter: false,
    // XSSバリデーターはWAFでするため無効化
    xssValidator: false,
    headers: {
      // HSTS (HTTPS強制)はインフラ側で設定するため無効化
      strictTransportSecurity: false,
    },
    // ロガーはviteで削除するため無効化
    removeLoggers: false,
  },
  vite: {
    esbuild: {
      // 本番ビルド時のみ console.log, info, debug を削除する
      pure: process.env.NODE_ENV === 'prod'
        ? ['console.log', 'console.info', 'console.debug']
        : [],
    },
  },
});
