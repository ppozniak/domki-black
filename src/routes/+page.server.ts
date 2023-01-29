import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	const res = await fetch(`/pricing.json`);
	const item = await res.json();
	return item;
}) satisfies PageServerLoad;

export const prerender = true;