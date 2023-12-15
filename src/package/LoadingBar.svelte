<script lang="ts">
    import { navigating } from "$app/stores"
    import LoadingBarUi from "./LoadingBarUi.svelte"

    export let delay = 250
    export let classLoadingBar = ""
    export let classLoadingBarTrain = ""

    let delayedPreloading = false
    $: setTimeout(() => (delayedPreloading = !!$navigating), delay)
</script>

{#if delayedPreloading}
    <LoadingBarUi {classLoadingBar} {classLoadingBarTrain} />
{/if}
