<script lang="ts">
	import { formatCurrency } from "$lib/format";
	import type { Prices } from "../app";

	export let primaryPrices: Prices[] = [];
	export let secondaryPrices: Prices[] = [];
</script>

<section id="cennik" class="section pricing">
	<div class="container">
		<h3>Cennik</h3>
		<p>Wszystkie podane ceny są cenami za wynajem całego domku dla 6 osób i pozwolą Państwu cieszyć się prywatnością i wygodą.</p>
		<table class="pricing-table">
			<caption class="sr-only">Cennik</caption>
			<thead>
				<tr>
					<th class="season-header">Okres</th>
					<th class="price-header">Cena za dobę</th>
				</tr>
			</thead>
			<tbody>
				{#each primaryPrices as [name, value]}
					<tr>
						<td class="season-cell">{name}</td>
						<td class="price-cell">{formatCurrency(value)}</td>
					</tr>
				{/each}
					<tr class="secondary-divider">
					</tr>
				{#each secondaryPrices as [name, value]}
					<tr>
						<td class="season-cell">{name}</td>
						<td class="price-cell">{formatCurrency(value)}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
	<!-- @TODO: Add CTA to contact as a journey -->
</section>

<style lang="scss">
	@import '../styles/utils';

	.section.pricing {
		background-color: $light-gray;
		font-size: Rem(16px);
		h3 {
			text-align: center;
			margin-bottom: Rem(10px);
		}
	}

	.pricing-table {
		width: 100%;
		border-collapse: collapse;
		max-width: Rem(600px);
		margin: Rem(32px) auto 0;

		tr:nth-child(even) {
			td {
				background-color: darken($light-gray, 4%);
			}
		}
		
		td {
			padding-top: 1rem;
			padding: Rem(10px);
			border-bottom: 1px solid rgba($black, 0.08);
		}
		
		th {
			padding: 0 Rem(10px);
			font-weight: normal;
			text-transform: uppercase;
			font-size: 0.8rem;
			color: rgba($black, 0.6);
			font-weight: bold;
		}

		.secondary-divider {
				height: Rem(35px);
		}
	}

	.price-header {
		text-align: right;
	}

	.season-header {
		text-align: left;
	}

	.season-cell {
		width: 50%;
	}

	.price-cell {
		text-align: right;
		width: 25%;
	}
</style>
