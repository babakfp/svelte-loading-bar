module.exports = {
	semi: false,
	tabWidth: 4,
	useTabs: true,
	singleQuote: false,
	printWidth: 80,
	arrowParens: "avoid",
	bracketSpacing: true,
	trailingComma: "es5",
	bracketSameLine: false,
	quoteProps: "consistent",
	htmlWhitespaceSensitivity: "strict",
	pluginSearchDirs: ["."],
	plugins: [
		require("prettier-plugin-svelte"),
		require("prettier-plugin-tailwindcss"),
	],
	overrides: [
		{ files: "*.svelte", options: { parser: "svelte" } },
		{ files: "*.md", options: { tabWidth: 2 } },
	],
}
