<script lang="ts">
	import Hero from '../partials/hero.svelte';
	import About from '../partials/about.svelte';
	import Features from '../partials/features.svelte';
	import Pricing from '../partials/pricing.svelte';
	import Gallery from '../partials/gallery.svelte';
	import Reservations from '../partials/reservations.svelte';
	import ContactUs from '../partials/contact.svelte';
	import Map from '../partials/map.svelte';
	import Footer from '../partials/footer.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	const prices = Object.entries(data);
</script>

<main>
	<Hero />
	<About />
	<Features />
	<Pricing prices={prices} />
	<Gallery />
	<Reservations />
	<ContactUs />
	<Map />
	<Footer />
</main>