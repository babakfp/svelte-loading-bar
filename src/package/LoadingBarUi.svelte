<script lang="ts">
    let {
        classLoadingBar,
        classLoadingBarTrain,
    }: {
        classLoadingBar?: string
        classLoadingBarTrain?: string
    } = $props()
</script>

<div class="loading-bar {classLoadingBar}">
    <div class="loading-bar-train {classLoadingBarTrain}"></div>
</div>

<style lang="postcss">
    .loading-bar {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        height: 2px;
        width: 100%;
        background-clip: padding-box;
        overflow: hidden;
        z-index: 999;
        /* prettier-ignore */
        background-color: var(--loading-bar-background-color, rgb(255 255 255 / 40%));
    }
    .loading-bar-train {
        height: 100%;
    }
    .loading-bar-train::before,
    .loading-bar-train::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        will-change: left, right;
        /* prettier-ignore */
        background-color: var(--loading-bar-train-background-color, rgb(255 255 255 / 80%));
    }
    .loading-bar-train::before {
        /* prettier-ignore */
        animation: loading-bar-train-animation 2100ms cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    }
    .loading-bar-train::after {
        /* prettier-ignore */
        animation: loading-bar-train-short-animation 2100ms cubic-bezier(0.165, 0.84, 0.44, 1) infinite;
        animation-delay: 1.15s;
    }
    /* prettier-ignore */
    @keyframes loading-bar-train-animation {
		0%   { left: -35%; right: 100%; }
		60%  { left: 100%; right: -90%; }
		100% { left: 100%; right: -90%; }
	}
    /* prettier-ignore */
    @keyframes loading-bar-train-short-animation {
		0%   { left: -200%; right: 100%; }
		60%  { left: 107%;  right: -8%;  }
		100% { left: 107%;  right: -8%;  }
	}
</style>
