# Svelte Loading Bar

A Svelte component for showing a loading bar.

- Visit [NPM](https://www.npmjs.com/package/svelte-loading-bar)

## Install

```cmd
pnpm add -D svelte-outclick
```

## Use it

If you are using **SvelteKit**, use this inside your `+layout.svelte`:

```svelte
<script>
	import { LoadingBar } from 'svelte-loading-bar'
</script>

<LoadingBar />
```

If you are using **Svelte** (you need to do the logic yourself):

```svelte
<script>
	import { LoadingBarUi } from 'svelte-loading-bar'
</script>

<LoadingBarUi />
```

## Customization

```
--loading-bar-background-color
--loading-bar-train-background-color
```
