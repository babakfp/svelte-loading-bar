<script lang="ts">
    import { onDestroy, onMount } from "svelte"
    import { navigating } from "$app/stores"
    import LoadingBarUi from "./LoadingBarUi.svelte"

    export let delay = 250
    export let classLoadingBar = ""
    export let classLoadingBarTrain = ""

    let timeoutId: number | undefined
    let delayedPreloading = false

    onMount(() => {
        navigating.subscribe(navigatingValue => {
            clearTimeout(timeoutId)
            timeoutId = setTimeout(() => {
                delayedPreloading = !!navigatingValue
            }, delay)
        })
    })

    onDestroy(() => {
        clearTimeout(timeoutId)
    })
</script>

{#if delayedPreloading}
    <LoadingBarUi {classLoadingBar} {classLoadingBarTrain} />
{/if}
