<script>
	// @ts-ignore - There are no types for this library
	import baguetteBox from 'baguettebox.js';
	import { onMount } from 'svelte';

	import KuchniaImg from '$lib/images/kuchnia.jpg?width=280;1000&format=webp&imagetools';
	import SalonImg from '$lib/images/salon.jpg?width=280;1000&format=webp&imagetools';
	import LazienkaImg from '$lib/images/lazienka.jpg?width=280;1000&format=webp&imagetools';
	import Lazienka2Img from '$lib/images/lazienka2.jpg?width=280;1000&format=webp&imagetools';
	import SypialniaImg from '$lib/images/sypialnia.jpg?width=280;1000&format=webp&imagetools';
	import Sypialnia2Img from '$lib/images/sypialnia2.jpg?width=280;1000&format=webp&imagetools';
	import SchodyImg from '$lib/images/schody.jpg?width=280;1000&format=webp&imagetools';
	import TarasImg from '$lib/images/taras.jpg?width=280;1000&format=webp&imagetools';
	import RoweryImg from '$lib/images/rowery.jpg?width=280;1000&format=webp&imagetools';
	import PlacImg from '$lib/images/plac.jpg?width=280;1000&format=webp&imagetools';
	import Morze3Img from '$lib/images/morze3.jpg?width=280;1000&format=webp&imagetools';

	const imgList = [
		KuchniaImg,
		SalonImg,
		LazienkaImg,
		Lazienka2Img,
		SypialniaImg,
		Sypialnia2Img,
		SchodyImg,
		TarasImg,
		RoweryImg,
		PlacImg,
		Morze3Img,
	]

	onMount(() => {
		baguetteBox.run('.gallery', {
			filter: /.*@imagetools.*/i,
		})
	})
</script>

<section id="galeria" class="section divider">
	<div class="container">
		<h3>Galeria</h3>
		<div class="gallery">
			{#each imgList as [thumb, image]}
				<a class="gallery__link" href={image} target="_blank" rel="noreferrer">
					<span class="sr-only">Otwórz galerię</span>
					<img class="gallery__thumbnail" src={thumb} alt="" />
				</a>
			{/each}
			<!-- <a class="gallery__link gallery__more" href="#">Więcej zdjęć...</a> -->
		</div>
	</div>
</section>

<style lang="scss">
	@use 'sass:math';
	@import '../styles/utils';

	.gallery {
		display: flex;
		flex-wrap: wrap;
	}

	.gallery__link {
		flex: 1 1 50%;
		transition: opacity 0.15s ease-out;
		height: Rem(175px);
		border: math.div($vflow, 8) solid transparent;
		cursor: zoom-in;
		&:hover,
		&:focus {
			opacity: .8;
		}
		@include from-portrait {
			flex-basis: 25%;
			max-width: 50%;
		} // IE11 hackz
		@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
			max-width: 25%;
		}
	}

	.gallery__thumbnail {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	// @TODO: Unused
	// .gallery__more {
	// 	$more: #eeeeee;
	// 	display: flex;
	// 	justify-content: center;
	// 	align-items: center;
	// 	background-color: $more;
	// 	color: darken($more, 25%);
	// 	text-decoration: none;
	// 	text-transform: uppercase;
	// 	font-size: 0.9rem;
	// 	background-clip: content-box;
	// }
</style>
