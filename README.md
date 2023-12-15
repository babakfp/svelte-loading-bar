# Svelte Loading Bar

A Svelte component for showing a loading bar.

[![NPM](https://img.shields.io/npm/v/svelte-loading-bar?style=for-the-badge&label=NPM&color=%23cb0000)](https://www.npmjs.com/package/svelte-loading-bar)

- [Demo](https://svelte-loading-bar.vercel.app)

## Install

```cmd
pnpm add -D svelte-loading-bar
```

## Use it

If you are using **SvelteKit**, use this inside your `+layout.svelte`:

```svelte
<script>
    import { LoadingBar } from "svelte-loading-bar"
</script>

<LoadingBar />
```

If you are using **Svelte** (you need to do the logic yourself):

```svelte
<script>
    import { LoadingBarUi } from "svelte-loading-bar"
</script>

<LoadingBarUi />
```

## Customization

```css
--loading-bar-background-color: rgb(0 100 160 / 80%);
--loading-bar-train-background-color: rgb(0 100 220 / 90%);
```

You can use the css variables like this:

```svelte
<LoadingBarUi
    --loading-bar-background-color="rgb(0 100 160 / 80%)"
    --loading-bar-train-background-color="rgb(0 100 220 / 90%)"
/>
```

Or like this:

```svelte
<LoadingBarUi classLoadingBar="my-loading-bar" />

<style>
    :global(.my-loading-bar) {
        --loading-bar-background-color: rgb(0 100 160 / 80%);
        --loading-bar-train-background-color: rgb(0 100 220 / 90%);
    }
</style>
```

---

[Source code](/src/routes/%2Bpage.svelte) of the demo examples.
