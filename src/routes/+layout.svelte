<script lang="ts">
	import '../styles/global.scss';
	import { closeNav, navOpened } from '$lib/store';
	import Header from '../partials/header.svelte';
	import Nav from '../partials/nav.svelte';

	import { browser } from '$app/environment';
	navOpened.subscribe((value) => {
		if (browser) document.body.classList.toggle('noscroll', value);
	});
</script>

<Header />
<div class="pusher-wrapper">
	<Nav />
	<div class="pusher" class:active={$navOpened}>
		<button class="overlay" on:click={closeNav} class:active={$navOpened} tabindex="-1" />
		<slot />
	</div>
</div>
