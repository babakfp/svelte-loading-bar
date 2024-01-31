<script lang="ts">
    import { browser } from "$app/environment"
    import { navigating } from "$app/stores"
    import LoadingBarUi from "./LoadingBarUi.svelte"

    export let delay = 250
    export let classLoadingBar = ""
    export let classLoadingBarTrain = ""

    let delayedPreloading = false
    $: if (browser) {
        setTimeout(() => (delayedPreloading = !!$navigating), delay)
    }
</script>

{#if delayedPreloading}
    <LoadingBarUi {classLoadingBar} {classLoadingBarTrain} />
{/if}
