const path = require("path");

module.exports = {
  extends: ["next/core-web-vitals"],
  ignorePatterns: ["**/*.d.ts"],
  plugins: ["react", "import", "@typescript-eslint"],
  rules: {
    "no-console": "warn",
    "no-useless-escape": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
      },
    ],
    "import/order": [
      "error",
      {
        pathGroups: [
          {
            pattern: "react",
            group: "builtin",
            position: "before",
          },
        ],
        pathGroups: [
          {
            pattern: "next",
            group: "builtin",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react", "next"],
        groups: [
          "builtin",
          "external",
          "internal",
          "object",
          "parent",
          "sibling",
          "type",
          "index",
        ],
      },
    ],
    "import/no-unresolved": [
      "error",
      {
        commonjs: true,
        amd: true,
      },
    ],
    "import/named": "error",
    "import/namespace": "warn",
    "import/default": "warn",
    "import/export": "warn",
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        moduleDirectory: ["node_modules", "src/"],
        paths: [path.resolve(__dirname)],
      },
    },
  },
};
