<script>
	import { browser } from '$app/environment'
	import baguetteBox from 'baguettebox.js';

	export const images = [
		'kuchnia',
		'sal',
		'laz',
		'laz2',
		'syp1',
		'syp2',
		'schody',
		'taras',
		'rowery',
		'plac',
		'morze3'
	];

	if (browser) {
		baguetteBox.run('.gallery')
	}
</script>

<!-- @TODO: Gallery is not working -->

<section id="galeria" class="section divider">
	<div class="container">
		<h3>Galeria</h3>
		<div class="gallery">
			{#each images as image}
				<a class="gallery__link" href="images/{image}.jpg" target="_blank" rel="noreferrer">
					<span class="sr-only">Otwórz galerię</span>
					<img class="gallery__thumbnail" src="images/thumbnails/{image}_tn.jpg" alt="" />
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
		transition: border-width 0.3s ease-out;
		height: Rem(175px);
		border: math.div($vflow, 8) solid transparent;
		&:hover,
		&:focus {
			border-width: 0;
			font-size: 1rem;
		}
		@include from-portrait {
			flex-basis: 25%;
			max-width: 50%;
		} // IE11 hackz
		@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
			max-width: 25%;
		}
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

	.gallery__thumbnail {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
</style>
