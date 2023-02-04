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

	import KidsZoneIcon from '$lib/icons/kids.svg?component';
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
			<KidsZoneIcon class="kids-zone__icon" />
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

	:global(.kids-zone__icon) {
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
