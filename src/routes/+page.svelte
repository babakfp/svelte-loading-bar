<script>
	import { LoadingBarUi } from "svelte-loading-bar"
</script>

<h1 class="text-xl font-bold text-white">Loading Bar Styles</h1>

<ul class="mt-8 grid gap-8 text-xs">
	<li class="grid gap-2">
		<span>
			Default (customize the colors if you are using a white background):
		</span>
		<div class="relative">
			<LoadingBarUi />
		</div>
	</li>
	<li class="grid gap-2">
		<span>Customized both bar and train color:</span>
		<div class="relative">
			<LoadingBarUi classLoadingBar="second" />
		</div>
	</li>
	<li class="grid gap-2">
		<span>Transparent bar:</span>
		<div class="relative">
			<LoadingBarUi classLoadingBar="third" />
		</div>
	</li>
</ul>

<style lang="postcss">
	:global(.second) {
		--loading-bar-background-color: theme(colors.orange.400/40%);
		--loading-bar-train-background-color: theme(colors.orange.400/80%);
	}
	:global(.third) {
		--loading-bar-background-color: theme(colors.transparent);
		--loading-bar-train-background-color: theme(colors.orange.400/80%);
	}
	:global(.loading-bar) {
		@apply !absolute;
	}
</style>
