<script>
	// @ts-ignore - There are no types for this library
	import baguetteBox from 'baguettebox.js';
	import { onMount } from 'svelte';

	import Img0 from '$lib/images/0fx.jpg?width=280;1000&format=webp&imagetools';
	import Img1 from '$lib/images/1fx.jpg?width=280;1000&format=webp&imagetools';
	import Img2 from '$lib/images/2fx.jpg?width=280;1000&format=webp&imagetools';
	import Img3 from '$lib/images/3fx.jpg?width=280;1000&format=webp&imagetools';
	import Img4 from '$lib/images/4fx.jpg?width=280;1000&format=webp&imagetools';
	import Img5 from '$lib/images/5fx.jpg?width=280;1000&format=webp&imagetools';
	import Img6 from '$lib/images/6fx.jpg?width=280;1000&format=webp&imagetools';
	import Img7 from '$lib/images/7fx.jpg?width=280;1000&format=webp&imagetools';

	import TarasImg from '$lib/images/taras.jpg?width=280;1000&format=webp&imagetools';
	import RoweryImg from '$lib/images/rowery.jpg?width=280;1000&format=webp&imagetools';
	import PlacImg from '$lib/images/plac.jpg?width=280;1000&format=webp&imagetools';
	import Morze3Img from '$lib/images/morze3.jpg?width=280;1000&format=webp&imagetools';

	const imgList = [
		Img0,
		Img1,
		Img2,
		Img3,
		Img4,
		Img5,
		Img6,
		Img7,
		TarasImg,
		RoweryImg,
		PlacImg,
		Morze3Img
	];

	onMount(() => {
		baguetteBox.run('.gallery', {
			filter: new RegExp('')
		});
	});
</script>

<section id="galeria" class="section divider gallery">
	<div class="container">
		<h3>Galeria</h3>
		<div class="gallery__wrapper">
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
		background-color: $light-gray;
	}

	.gallery__wrapper {
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
			opacity: 0.8;
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
