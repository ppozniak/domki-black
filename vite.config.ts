import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { imagetools } from 'vite-imagetools';
import svg from '@poppanator/sveltekit-svg';

const config: UserConfig = {
	plugins: [
		sveltekit(),
		imagetools(),
		svg({
			includePaths: ['./src/lib/icons/'],
			svgoOptions: {
				multipass: true,
				plugins: [
					{
						name: 'preset-default',
						// by default svgo removes the viewBox which prevents svg icons from scaling
						// not a good idea! https://github.com/svg/svgo/pull/1461
						params: {
							overrides: {
								removeViewBox: false
							}
						}
					},
					{ name: 'removeAttrs', params: { attrs: '(fill|stroke)' } },
					'removeDimensions'
				]
			}
		}),
		svg({
			includePaths: ['./src/lib/images'],
			svgoOptions: {
				multipass: true,
				plugins: [
					{
						name: 'preset-default',
						// by default svgo removes the viewBox which prevents svg icons from scaling
						// not a good idea! https://github.com/svg/svgo/pull/1461
						params: { overrides: { removeViewBox: false, removeTitle: false } }
					}
				]
			}
		})
	]
	// @TODO: Why is this erroring?
	// test: {
	// 	include: ['src/**/*.{test,spec}.{js,ts}']
	// }
};

export default config;
