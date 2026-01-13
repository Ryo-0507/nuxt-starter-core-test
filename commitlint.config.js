import { RuleConfigSeverity } from '@commitlint/types';

export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 日本語対応のため先頭文字のチェックは無視する
    'subject-case': [RuleConfigSeverity.Disabled, 'never'],
    // Body（本文）の前に空行を必須にし、なければエラー(2)にする
    'body-leading-blank': [RuleConfigSeverity.Error, 'always'],
    // Footer（フッター）の前に空行を必須にし、なければエラー(2)にする
    'footer-leading-blank': [RuleConfigSeverity.Error, 'always'],
    // scopeの値を制限する
    'scope-enum': [
      RuleConfigSeverity.Error,
      'always',
      [
        'nuxt', // nuxt関連
        'commitlint', // コミットメッセージルール
        'formatter', // コードフォーマット
        'state', // 状態管理
        'dev', // 開発環境
        'lint', // コードリント
        'test', // テスト
        'security', // セキュリティ
        'utils', // 便利関数、ロジック
        'devcontainer', // devcontainer関連
        'release', // リリース関連
        'version', // バージョン管理コミット
      ],
    ],
  },
  ignores: [
    // WIPのコミットを無視する
    commit => commit.includes('WIP'),
  ],
};
