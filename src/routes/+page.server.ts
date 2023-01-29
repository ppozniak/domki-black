import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	const res = await fetch(`/content.json`);
	const item = await res.json();
	return item;
}) satisfies PageServerLoad;

export const prerender = true;