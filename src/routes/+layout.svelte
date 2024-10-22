<script lang="ts">
    import type { Snippet } from "svelte"
    import "../app.postcss"

    let {
        children,
    }: {
        children: Snippet
    } = $props()
</script>

<main class="min-h-screen p-8">
    {@render children()}
</main>

<div class="self-end border-t border-gray-800 py-4 text-center">
    <p class="text-sm">
        Favicon by
        <a class="underline" href="https://icons8.com" target="_blank">Icon8</a
        >.
    </p>
</div>
