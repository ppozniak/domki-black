<script lang="ts">
	import { formatCurrency } from "$lib/format";

	type Price = [string, number]

	export let prices: Price[] = [];
</script>

<section id="cennik" class="section pricing">
	<div class="container">
		<h3>Cennik</h3>
		<table class="pricing-table">
			<caption class="sr-only">Cennik</caption>
			<thead>
				<tr>
					<th class="season-header">Okres</th>
					<th class="price-header">Cena za dobę</th>
				</tr>
			</thead>
			<tbody>
				{#each prices as [name, value]}
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
		}
	}

	.pricing-table {
		width: 100%;
		border-collapse: collapse;
		max-width: Rem(600px);
		margin: 0 auto;
		tr:not(:first-of-type) {
			td {
				padding-top: 1rem;
			}
		}
		td {
			padding-bottom: Rem(10px);
			border-bottom: 1px solid rgba($black, 0.14);
		}
		th {
			font-weight: normal;
			text-transform: uppercase;
			font-size: 0.8rem;
			color: rgba($black, 0.4);
			font-weight: bold;
		}
	}

	.price-header {
		text-align: right;
		padding-bottom: Rem(10px);
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
