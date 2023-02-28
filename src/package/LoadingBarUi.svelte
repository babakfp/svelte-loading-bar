<script lang="ts">
	export let classLoadingBar: string | null | undefined = null
	export let classLoadingBarTrain: string | null | undefined = null
</script>

<div class="loadingbar {classLoadingBar || ''}">
	<div class="loadingbar-train {classLoadingBarTrain || ''}" />
</div>

<style lang="postcss">
	.loadingbar {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		height: 3px;
		width: 100%;
		background-clip: padding-box;
		overflow: hidden;
		z-index: 999;
		background-color: var(
			--loadingbar-background-color,
			rgb(255 255 255 / 40%)
		);
	}
	.loadingbar-train {
		background-color: var(
			--loadingbar-train-background-color,
			rgb(255 255 255)
		);
	}
	.loadingbar-train::before,
	.loadingbar-train::after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		will-change: left, right;
		background-color: var(
			--loadingbar-background-color,
			rgb(255 255 255 / 80%)
		);
	}
	.loadingbar-train::before {
		animation: loadingbar-train-animation 2100ms
			cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
	}
	.loadingbar-train::after {
		animation: loadingbar-train-short-animation 2100ms
			cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
		animation-delay: 1.15s;
	}
	/* prettier-ignore */
	@keyframes loadingbar-train-animation {
		0%   { left: -35%; right: 100%; }
		60%  { left: 100%; right: -90%; }
		100% { left: 100%; right: -90%; }
	}
	/* prettier-ignore */
	@keyframes loadingbar-train-short-animation {
		0%   { left: -200%; right: 100%; }
		60%  { left: 107%;  right: -8%;  }
		100% { left: 107%;  right: -8%;  }
	}
</style>
