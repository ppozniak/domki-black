<script lang="ts">
  // import type { PageData } from './$types';

  import Header from '../partials/header.svelte';
	import Nav from '../partials/nav.svelte';
	import Hero from '../partials/hero.svelte';
	import About from '../partials/about.svelte';
	import Features from '../partials/features.svelte';
	import Pricing from '../partials/pricing.svelte';
	import Gallery from '../partials/gallery.svelte';
	import Reservations from '../partials/reservations.svelte';
	import ContactUs from '../partials/contact.svelte';
	import Map from '../partials/map.svelte';
	import Footer from '../partials/footer.svelte';
	import { closeNav, navOpened } from '$lib/store'; 

	import { browser } from '$app/environment'
	navOpened.subscribe(value => {
		if (browser) document.body.classList.toggle('noscroll', value);
	})

  // export let data: PageData;
</script>

<Header />
<div class="pusher-wrapper">
	<Nav />
	<div class="pusher" class:active={$navOpened}>
		<main>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div class="overlay" on:click={closeNav} class:active={$navOpened} tabindex="-1"></div>
			<Hero />
			<About />
			<Features />
			<Pricing />
			<Gallery />
			<Reservations />
			<ContactUs />
			<Map />
			<Footer />
		</main>
	</div>
</div>