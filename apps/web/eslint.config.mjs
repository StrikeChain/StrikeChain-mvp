import { dirname } from "path";
import { fileURLToPath } from "url";
import { eslint } from "@eslint/eslintrc";
import nextPlugin from "eslint-config-next";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const { FlatCompat } = eslint;
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  ...nextPlugin,
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "@next/next/no-img-element": "off",
    },
  },
];

export default eslintConfig;
