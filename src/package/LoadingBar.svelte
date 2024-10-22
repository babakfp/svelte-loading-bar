<script lang="ts">
    import { onDestroy, onMount } from "svelte"
    import { navigating } from "$app/stores"
    import LoadingBarUi from "./LoadingBarUi.svelte"

    let {
        delay = 250,
        classLoadingBar,
        classLoadingBarTrain,
    }: {
        delay?: number
        classLoadingBar?: string
        classLoadingBarTrain?: string
    } = $props()

    let timeoutId: number | undefined
    let delayedPreloading = $state(false)

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
