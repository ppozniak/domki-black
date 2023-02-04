<script lang="ts">
	import domkiImg from '$lib/images/domki.jpg?webp&imagetools';

	import GrillIcon from '$lib/icons/grill.svg?component';
	import TvIcon from '$lib/icons/tv.svg?component';
	import RefrigeratorIcon from '$lib/icons/refrigerator.svg?component';
	import InductionOvenIcon from '$lib/icons/induction-oven.svg?component';
	import KettleIcon from '$lib/icons/kettle.svg?component';
	import PotIcon from '$lib/icons/pot.svg?component';
	import UtensilsIcon from '$lib/icons/utensils.svg?component';
	import WifiIcon from '$lib/icons/wifi.svg?component';
	import GardenFurnitureIcon from '$lib/icons/garden-furniture.svg?component';
	import SunbedIcon from '$lib/icons/sunbed.svg?component';
	import ParkingIcon from '$lib/icons/parking.svg?component';
</script>

<!-- @TODO: Is there any type of schema for cottage features? -->
<section id="domki" class="houses section divider">
	<div class="container">
		<h3>Domki</h3>
		<div class="houses__pair">
			<img class="img--fluid houses__intro-image" src={domkiImg} alt="" />
			<div class="amenities">
				<h4 class="amenities__title">Wyposażenie</h4>
				<ul class="amenities__list">
					<li>
						<TvIcon />
						TV
					</li>
					<li>
						<RefrigeratorIcon />
						Lodówka
					</li>
					<li>
						<InductionOvenIcon />
						Płyta indukcyjna
					</li>
					<li>
						<KettleIcon />
						Czajnik elektryczny
					</li>
					<li>
						<PotIcon />
						Zestaw garnków
					</li>
					<li>
						<UtensilsIcon />
						Komplet sztućców i talerzy
					</li>
					<li>
						<WifiIcon />
						WiFi
					</li>
					<li>
						<GardenFurnitureIcon />
						Meble ogrodowe
					</li>
					<li>
						<GrillIcon />
						Grill
					</li>
					<li>
						<SunbedIcon />
						Parawan, koc
					</li>
					<li>
						<ParkingIcon />
						Miejsce parkingowe w cenie
					</li>
					<li>
						<!-- @TODO: Add icon -->
						<InductionOvenIcon />
						Mikrofalówka
					</li>
				</ul>
			</div>
		</div>

		<div class="kids-zone">
			<h4 class="kids-zone__title">Kids zone</h4>
			<svg class="kids-zone__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 387.039 387.039">
				<circle cx="112.809" cy="233.169" r="15.368" />
				<circle cx="274.229" cy="233.169" r="15.368" />
				<path
					d="M387.039 226.647c0-22.261-16.136-40.811-37.324-44.602v-6.717c0-86.127-70.069-156.196-156.195-156.196-86.127 0-156.196 70.069-156.196 156.196v6.717C16.136 185.837 0 204.387 0 226.647c0 22.453 16.414 41.134 37.871 44.7 3.02 34.414 18.765 59.834 46.942 75.653 25.058 14.068 60.615 20.906 108.707 20.906 48.091 0 83.649-6.839 108.707-20.906 28.176-15.819 43.921-41.238 46.941-75.653 21.457-3.565 37.871-22.247 37.871-44.7zm-371.039 0c0-13.395 9.032-24.713 21.323-28.205v56.41C25.032 251.361 16 240.043 16 226.647zm317.715 32.11c0 35.135-12.862 59.436-39.321 74.291-22.603 12.69-55.599 18.858-100.874 18.858s-78.272-6.168-100.874-18.858c-26.46-14.855-39.322-39.156-39.322-74.291v-83.429c0-63.309 42.185-116.941 99.918-134.29 43.983.556 67.407 32.306 67.407 55.296 0 17.608-14.325 31.934-31.934 31.934-13.204 0-23.947-10.743-23.947-23.947 0-9.681 7.876-17.558 17.558-17.558 4.418 0 8-3.582 8-8s-3.582-8-8-8c-18.504 0-33.558 15.054-33.558 33.558 0 22.027 17.92 39.947 39.947 39.947 26.431 0 47.934-21.503 47.934-47.934 0-16.605-8.343-34.47-22.317-47.79-5.59-5.328-11.95-9.807-18.89-13.387 76.42 1.034 138.273 63.51 138.273 140.171v83.429zm16-3.904v-56.41c12.292 3.492 21.324 14.81 21.324 28.205s-9.033 24.713-21.324 28.205z"
				/>
				<path
					d="M224.459 255.203c-17.059 17.061-44.82 17.061-61.879 0-3.125-3.124-8.189-3.124-11.314 0-3.124 3.124-3.124 8.19 0 11.314 11.649 11.649 26.952 17.474 42.254 17.474s30.604-5.825 42.254-17.474c3.124-3.124 3.124-8.19 0-11.314-3.126-3.124-8.19-3.124-11.315 0z"
				/>
			</svg>
			<div class="kids-zone__description">
				<p>
					<strong
						>W trosce o wygodę małych wczasowiczów, domki możemy dodatkowo wyposażyć w:
					</strong>łóżeczko turystyczne, komplet pościeli, wanienkę, podest pod umywalkę, nakładkę
					na sedes, nocnik, krzesełko do karmienia.
				</p>
				<p>
					<strong>
						Rezerwując termin prosimy o poinformowanie nas o przybyciu najmłodszego gościa byśmy
						mogli przygotować odpowiednie wyposażenie.
					</strong>
				</p>
			</div>
		</div>
	</div>
</section>

<style lang="scss">
	@use 'sass:math';
	@import '../styles/utils';

	.houses {
		background-color: $light-gray;
	}

	.houses__pair {
		@include from-portrait {
			display: flex;
			justify-content: space-between;
		}
	}

	.amenities {
		flex: 1;
		@include to-portrait {
			margin-top: $vflow;
		}
	}

	.amenities__title {
		@include to-portrait {
			text-align: center;
		}
	}

	.amenities__list {
		display: flex;
		flex: 1;
		flex-wrap: wrap;
		margin: 0;
		padding: 0;
		justify-content: space-between;

		li {
			display: flex;
			align-items: center;
			flex: 0 0 49%;
			font-size: Rem(16px);
			margin-bottom: 0.75rem;
			@include from-portrait {
				flex-basis: 100%;
				font-size: Rem(18px);
			}

			:global(svg) {
				flex-shrink: 0;
				flex-basis: 1.8rem;
				width: 1.8rem;
				max-height: 1.8rem;
				margin-right: 0.7rem;
			}
		}
	}

	.houses__intro-image {
		display: block;
		padding: math.div($vflow, 4);
		margin: 0 auto;
		border: 1px solid rgba($black, 0.3);
		object-fit: cover;
		order: 1;
		@include from-portrait {
			margin-left: 1rem;
		}
		@include from-landscape {
			margin-left: Rem(18px);
		}
	}

	.kids-zone {
		margin-top: $vflow;
		@include from-portrait {
			display: flex;
			flex-wrap: wrap;
		}
	}

	.kids-zone__title {
		margin: math.div($vflow, 2) 0 math.div($vflow, 2);
		font-weight: normal;
		text-align: center;
		font-size: Rem(25px);
		text-transform: uppercase;
		font-weight: bold;
		@include from-portrait {
			flex: 1 0 100%;
			text-align: left;
		}
	}

	.kids-zone__description {
		background-color: $navgray;
		padding: $vflow;
		border-radius: 1rem;
		flex: 1;
		p {
			margin-top: 0;
		}
	}

	.kids-zone__icon {
		display: block;
		max-width: Rem(130px);
		align-self: center;
		margin: 0 auto $vflow;
		@include from-portrait {
			flex: 1 0 Rem(130px);
			margin: 0 $vflow 0 0;
			align-self: flex-start;
		}
	}
</style>
