import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
	const res = await fetch(`/pricing.json`);
	const pricing = await res.json();
	return pricing;
}) satisfies PageServerLoad;

export const prerender = true;