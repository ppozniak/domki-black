<script lang="ts">
	import type { PageData } from './$types';

	import Hero from '../partials/hero.svelte';
	import About from '../partials/about.svelte';
	import Features from '../partials/features.svelte';
	import Pricing from '../partials/pricing.svelte';
	import Gallery from '../partials/gallery.svelte';
	import Reservations from '../partials/reservations.svelte';
	import ContactUs from '../partials/contact.svelte';
	import Map from '../partials/map.svelte';
	import Footer from '../partials/footer.svelte';

	export let data: PageData;
	import type { Prices } from "../app";

	const primaryPrices: Prices[] = Object.entries(data.primary)
	const secondaryPrices: Prices[] = Object.entries(data.secondary)
</script>

<main>
	<Hero />
	<About />
	<Features />
	<Pricing primaryPrices={primaryPrices} secondaryPrices={secondaryPrices} />
	<Gallery />
	<Reservations />
	<ContactUs />
	<Map />
	<Footer />
</main>