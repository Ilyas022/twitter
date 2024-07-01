module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "airbnb",
    'eslint:recommended',
    "plugin:prettier/recommended",
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "prettier"
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ["react", 'react-refresh'], 
  settings: {
    react: {
      version: "detect"
    },
    "import/resolver": {
      "typescript": {}
    }
  },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-var-requires": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/ban-types": "off",
    "import/order": [
      "error",
      {
        "groups": ["builtin", "external", "internal", ["parent", "sibling", "index"]],
        "newlines-between": "always",
        "alphabetize": { "order": "asc", "caseInsensitive": true }
      }
    ],
    "import/newline-after-import": "error",
    "import/prefer-default-export": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "import/no-dynamic-require": "off",
    "import/no-named-default": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".ts", ".tsx"] }],
    "react/jsx-props-no-spreading": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "no-param-reassign": "off",
    "global-require": "off",
    "react/require-default-props": "off",
    "react/no-array-index-key": "off",
    "react-hooks/exhaustive-deps": "off",
    "consistent-return": "off"
  },
}
