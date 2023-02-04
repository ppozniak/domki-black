// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}

	declare module '*&imagetools' {
		/**
		 * actual types
		 * - code https://github.com/JonasKruckenberg/imagetools/blob/main/packages/core/src/output-formats.ts
		 * - docs https://github.com/JonasKruckenberg/imagetools/blob/main/docs/guide/getting-started.md#metadata
		 */
		const out;
		export default out;
	}

	declare module '*.svg?component' {
		import type { ComponentType, SvelteComponentTyped } from 'svelte';
		import type { SVGAttributes } from 'svelte/elements';

		const content: ComponentType<SvelteComponentTyped<SVGAttributes<SVGSVGElement>>>;

		export default content;
	}

	declare module '*.svg?src' {
		const content: string;
		export default content;
	}

	declare module '*.svg?url' {
		const content: string;
		export default content;
	}

	declare module '*.svg?dataurl' {
		const content: string;
		export default content;
	}
}

export {};
