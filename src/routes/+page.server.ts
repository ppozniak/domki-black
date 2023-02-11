import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	const res = await fetch(`/pricing.json`);
	const prices = await res.json();
	return prices;
}) satisfies PageServerLoad;


export const prerender = true;