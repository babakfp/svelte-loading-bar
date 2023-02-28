<script lang="ts">
	import { navigating } from "$app/stores"
	import LoadingBarUi from "./LoadingBarUi.svelte"

	export let classLoadingBar: string | null | undefined = null
	export let classLoadingBarTrain: string | null | undefined = null
	export let delay = 250

	let delayedPreloading = false
	$: setTimeout(() => (delayedPreloading = !!$navigating), delay)
</script>

{#if delayedPreloading}
	<LoadingBarUi {classLoadingBar} {classLoadingBarTrain} />
{/if}
