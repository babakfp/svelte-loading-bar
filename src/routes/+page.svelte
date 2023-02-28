<script>
	import { LoadingBarUi } from "svelte-loadingbar"
</script>

<h1>LoadingBar Styles</h1>

<ul class="mt-8 grid gap-8">
	<li class="relative">
		<LoadingBarUi />
	</li>
	<li class="relative">
		<LoadingBarUi classLoadingBar="second" />
	</li>
	<li class="relative">
		<LoadingBarUi classLoadingBar="third" />
	</li>
</ul>

<style lang="postcss">
	:global(.second) {
		--loadingbar-background-color: theme(colors.orange.400/40%);
		--loadingbar-train-background-color: theme(colors.orange.400/80%);
	}
	:global(.third) {
		--loadingbar-background-color: theme(colors.transparent);
		--loadingbar-train-background-color: theme(colors.orange.400/80%);
	}
	:global(.loadingbar) {
		@apply !absolute;
	}
</style>
