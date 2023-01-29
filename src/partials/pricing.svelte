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
				<tr>
					<td class="season-cell">20 kwietnia - 11 czerwca</td>
					<td class="price-cell">200 zł</td>
				</tr>
				<tr>
					<td class="season-cell">11 czerwca - 25 czerwca</td>
					<td class="price-cell">250 zł</td>
				</tr>
				<tr>
					<td class="season-cell">25 czerwca - 09 lipca</td>
					<td class="price-cell">320 zł</td>
				</tr>
				<tr>
					<td class="season-cell">09 lipca - 14 sierpnia</td>
					<td class="price-cell">400 zł</td>
				</tr>
				<tr>
					<td class="season-cell">14 sierpnia - 21 sierpnia</td>
					<td class="price-cell">320 zł</td>
				</tr>
				<tr>
					<td class="season-cell">21 sierpnia - 28 sierpnia</td>
					<td class="price-cell">250 zł</td>
				</tr>
				<tr>
					<td class="season-cell">28 sierpnia - 30 września</td>
					<td class="price-cell">180 zł</td>
				</tr>
				<tr>
					<td class="season-cell">Dodatkowa osoba</td>
					<td class="price-cell">30 zł</td>
				</tr>
			</tbody>
		</table>
		<p class="animal-info">
			Akceptujemy zwierzęta - cena zależna od wielkości zwierzęcia 10-30zł / doba.
		</p>
	</div>
</section>

<style lang="scss">
	@import '../styles/utils';

	.section.pricing {
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

	.animal-info {
		max-width: Rem(600px);
		margin: 1rem auto;
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
