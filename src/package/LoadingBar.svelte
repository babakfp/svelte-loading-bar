<script lang="ts">
	import { navigating } from "$app/stores"
	import LoadingBarUi from "./LoadingBarUi.svelte"

	export let classLoadingBar = ""
	export let classLoadingBarTrain = ""
	export let delay = 250

	let delayedPreloading = false
	$: setTimeout(() => (delayedPreloading = !!$navigating), delay)
</script>

{#if delayedPreloading}
	<LoadingBarUi {classLoadingBar} {classLoadingBarTrain} />
{/if}
