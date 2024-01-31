## CHANGELOG

## 1.1.0

-   Avoid shared state on the server.
    ```
    Error: Cannot subscribe to 'navigating' store on the server outside of a Svelte component, as it is bound to the current request via component context. This prevents state from leaking between users.For more information, see https://kit.svelte.dev/docs/state-management#avoid-shared-state-on-the-server
    ```

## 1.0.1

-   Added `@sveltejs/kit` to `peerDependenciesMeta` as optional.

## 1.0.0

-   Now is compatible with the latest release of SvelteKit `2.0.0`.

## 0.0.6

-   Now it's compatible with Svelte 4.

## 0.0.5

-   Fixed typo in docs.

## 0.0.4

-   Changed the type of `classLoadingBar` prop from `string | null | undefined` to `string`.
-   Changed the type of `classLoadingBarTrain` prop from `string | null | undefined` to `string`.

## 0.0.3

-   Changed bar height from `3px` to `2px`.

## 0.0.2

-   Removed the `homepage` key from `package.json`.
