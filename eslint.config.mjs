// @ts-check
import antfu from '@antfu/eslint-config';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  antfu(
    {
      stylistic: {
        indent: 2, // インデントのスペース数
        quotes: 'single', // シングルクォートを使用
        semi: true, // 行末のセミコロン必須
      },
      // CSSなどのフォーマット機能を有効化
      formatters: true,
      // 型情報を必要とするルールを有効化
      typescript: {
        tsconfigPath: 'tsconfig.json',
      },
    },
  ),
);
