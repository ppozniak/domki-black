<script lang="ts">
	export let title: string = 'Twoje miejsce blisko morza.';

	import heroImgMobile from '$lib/images/hero--mobile.jpg?webp&quality=90&blur=3&imagetools';
	import heroImgDesktop from '$lib/images/hero--desktop.jpg?webp&quality=90&blur=3&imagetools';

	import KidsZoneIcon from '$lib/icons/kids.svg?component';
	import KitchenIcon from '$lib/icons/kitchen.svg?component';
	import RatingIcon from '$lib/icons/rating.svg?component';
</script>

<section
	class="section hero"
	style="--image-mobile: url({heroImgMobile}); --image-desktop: url({heroImgDesktop});"
>
	<header class="container hero__header">
		<h2 class="hero__title">Domki letniskowie w&nbsp;Sarbinowie</h2>
		<p class="hero__sub-title">{title}</p>
	</header>

	<div class="features">
		<div class="container">
			<ul class="features__list">
				<li class="feature">
					<div class="feature__circle">
						<KidsZoneIcon />
					</div>
					<strong class="feature__label" style="max-width: none;">kids zone</strong>
				</li>
				<li class="feature">
					<div class="feature__circle">
						<KitchenIcon />
					</div>
					<strong class="feature__label">Nowoczesne wyposażenie</strong>
				</li>

				<li class="feature">
					<div class="feature__circle">
						<RatingIcon />
					</div>
					<strong class="feature__label">Zadowolenie klientów</strong>
				</li>
			</ul>
		</div>
	</div>

	<footer class="hero-cta-container container">
		<a class="button button--inverted" href="#kontakt">Zapytaj o dostępność</a>
		<a class="button" href="#cennik">Zobacz cennik</a>
	</footer>
</section>

<style lang="scss">
	@use 'sass:math';
	@import '../styles/utils';

	.section.hero {
		$overlay-min-opacity: 0.35;
		$overlay-max-opacity: 0.8;
		$overlay-color: $black;
		$background-color: lighten($black, 50%);

		scroll-margin-top: 0 !important;
		scroll-margin: 0 !important;
		scroll-padding-top: 0 !important;
		display: flex;
		flex-direction: column;
		min-height: 95vh;
		background: linear-gradient(
				to bottom,
				rgba($overlay-color, $overlay-min-opacity),
				rgba($overlay-color, $overlay-max-opacity)
			),
			var(--image-mobile) no-repeat top center/cover fixed, $background-color;
		color: #fff;
		box-sizing: border-box;

		@include from-landscape {
			min-height: 100vh;
			padding-top: $vflow * 4;
		}

		@include from-landscape {
			background: linear-gradient(
					to bottom,
					rgba($overlay-color, $overlay-min-opacity),
					rgba($overlay-color, $overlay-max-opacity)
				),
				var(--image-desktop) no-repeat top center/cover fixed, $background-color;
		}

		// Fix for iOS background cover + fixed being blurred
		@supports (-webkit-touch-callout: inherit) {
			background-attachment: scroll;
		}
	}

	.hero__title {
		text-align: left;
		font-family: inherit;
		font-size: 2.8rem;
		font-weight: normal;
		line-height: 1.3;
		color: white;
		text-shadow: 1px 1px 3px $black;
		letter-spacing: 1px;
		margin: 0;
		margin-bottom: $vflow;

		@include from-portrait {
			font-size: 3rem;
		}
	}

	.hero__sub-title {
		font-family: 'Cormorant Garamond', serif;
		font-size: 1.8rem;
		font-weight: normal;
		line-height: 1.3;
		color: white;
		text-shadow: 1px 1px 3px $black;
		margin: 0;
		margin-bottom: $vflow;

		@include from-portrait {
			font-size: 2rem;
		}
	}

	.features {
		flex-grow: 0;
		padding: 1rem 0;
	}

	.features__list {
		@extend %list-reset;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: flex-start;

		@include from-landscape {
			justify-content: center;
		}
	}

	.feature {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 0 0.1rem 1rem;
		flex: 1 33.333%;
	}

	.feature__circle {
		$icon-size: Rem(75px);
		display: flex;
		width: $icon-size;
		height: $icon-size;
		border: 2px solid rgba(0, 0, 0, 0.7);
		padding: 0.85rem;
		border-radius: 50%;
		margin-bottom: Rem(8px);
		justify-content: center;
		align-items: center;
		background-color: rgba(#fff, 0.8);

		:global(svg) {
			width: 100%;
			height: 100%;
		}
	}

	.feature__label {
		text-align: center;
		text-transform: uppercase;
		font-size: Rem(15px);
		color: white;
		text-shadow: 1px 1px 2px $black;
		letter-spacing: 0.4px;
		font-weight: normal;
		padding: 0 0.2rem;
		max-width: min-content;
	}

	.hero-cta-container {
		display: flex;
		flex-direction: column;
		margin-top: $vflow;
		align-items: center;
		justify-content: center;

		> * {
			width: 100%;
		}

		* + * {
			margin-top: Rem(18px);
			@include from-landscape {
				margin-top: 0;
				margin-left: Rem(18px);
			}
		}

		@include from-landscape {
			flex-direction: row;
		}
	}
</style>
