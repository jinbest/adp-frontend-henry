module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint", "react-hooks"],
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier",
    ],
    rules: {
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/explicit-member-accessibility": "off",
        "@typescript-eslint/no-unnecessary-type-assertion": "off",
        "@typescript-eslint/restrict-template-expressions": "off",
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/no-this-alias": [
            "error",
            {
                allowDestructuring: true,
                allowedNames: ["self", "_that", "that"],
            },
        ],
        "@typescript-eslint/no-misused-promises": [
            "error",
            {
                checksVoidReturn: false,
            },
        ],
    },
    parserOptions: {
        project: "./tsconfig.json",
    },
    settings: {
        react: {
            version: "detect",
        },
    },
}
