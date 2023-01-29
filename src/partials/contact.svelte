<section id="kontakt" class="section contact">
	<div class="container">
		<h3>Kontakt</h3>
		<form
			class="contact__form"
			action="https://formspree.io/black.sarbinowo@gmail.com"
			method="POST"
		>
			<input type="hidden" name="_language" value="pl" />
			<input type="hidden" name="_format" value="plain" />
			<input type="hidden" name="_subject" value="Nowa wiadomość z domki-black.pl" />

			<div class="contact__group">
				<ul class="contact__list divider">
					<li>Wrzosowa 6, 76-034 Sarbinowo</li>
					<li>
						<span class="sr-only">Numer telefonu komórkowego: </span>
						<svg class="svg-icon" viewBox="0 0 463.009 463.009">
							<path
								d="M462.692 381.085c-1.472-11.126-7.895-20.719-17.62-26.318L330.846 289c-13.99-8.055-31.738-5.71-43.157 5.708l-22.499 22.499c-5.987 5.988-15.459 6.518-22.028 1.231-17.737-14.272-35.201-29.979-51.906-46.685-16.705-16.705-32.412-34.168-46.685-51.906-5.287-6.57-4.758-16.041 1.231-22.029l22.498-22.499c11.418-11.417 13.766-29.163 5.709-43.156L108.242 17.937C102.642 8.211 93.05 1.789 81.924.317c-11.127-1.475-22.06 2.236-29.996 10.172L18.027 44.391c-23.661 23.662-24.041 66.944-1.07 121.875 22.088 52.818 63.308 110.962 116.065 163.721 52.759 52.758 110.903 93.978 163.722 116.066 27.039 11.307 51.253 16.957 71.697 16.956 21.088 0 38.163-6.013 50.178-18.027l33.901-33.902c7.935-7.936 11.643-18.869 10.172-29.995zm-139.33-79.086l114.226 65.767c5.649 3.252 9.379 8.824 10.233 15.286.718 5.423-.691 10.763-3.885 15.066L292.131 311.48l6.165-6.165c6.631-6.631 16.941-7.994 25.066-3.316zM79.956 15.188c6.463.855 12.034 4.585 15.286 10.234l65.767 114.226c4.68 8.127 3.316 18.435-3.315 25.065l-5.663 5.663L64.917 19.073c3.561-2.637 7.82-4.069 12.26-4.069.921 0 1.85.061 2.779.184zm328.055 419.187c-18.798 18.798-57.244 18.01-105.48-2.162-51.06-21.352-107.491-61.424-158.901-112.833-51.41-51.41-91.482-107.842-112.834-158.901-20.173-48.237-20.96-86.683-2.162-105.482l25.167-25.168 87.245 151.532-5.851 5.851c-11.415 11.416-12.409 29.488-2.311 42.04 14.609 18.156 30.68 36.024 47.764 53.108 17.086 17.085 34.954 33.156 53.109 47.765 12.55 10.098 30.622 9.105 42.04-2.312l5.338-5.338 152.016 86.759-25.14 25.141z"
							/>
						</svg>
						<a class="link" href="tel:+48508101504">+48 508 101 504</a>
					</li>
					<li>
						<span class="sr-only">Adres email</span>
						<svg class="svg-icon" viewBox="0 0 370.88 370.88">
							<path
								d="M355.6 66.16H15.28C6.841 66.16 0 73.001 0 81.44v208c0 8.439 6.841 15.28 15.28 15.28H355.6c8.439 0 15.28-6.841 15.28-15.28v-208c0-8.439-6.841-15.28-15.28-15.28zm-340.32 12H355.6c1.436.007 2.7.947 3.12 2.32L185.44 188.72 12.16 80.48c.42-1.373 1.684-2.313 3.12-2.32zm-3.28 16L136.64 172 12 270.88V94.16zm346.88 195.2c0 1.812-1.469 3.28-3.28 3.28H15.28c-1.811 0-3.28-1.469-3.28-3.28v-3.2l135.44-107.04 34.8 21.76c1.955 1.233 4.445 1.233 6.4 0l34.8-21.76 135.44 107.04v3.2zm0-18.48l-124.96-98.56 124.96-77.44v176z"
							/>
						</svg>
						<a class="link" href="mailto:black.sarbinowo@gmail.com">black.sarbinowo@gmail.com</a>
					</li>
					<li>
						<sub>Bank Millennium</sub>
						<br />51 1160 2202 0000 0004 5452 3553
					</li>
				</ul>

				<div>
					<div class="field">
						<label class="field__label" for="name"
							>Imię i nazwisko:
							<sup>*</sup>
						</label>
						<input required type="text" name="name" class="field__input" id="name" autocomplete="name" />
					</div>

					<div class="field">
						<label class="field__label" for="email"
							>Email:
							<sup>*</sup>
						</label>
						<input required type="email" name="email" class="field__input" id="email" autocomplete="email" />
					</div>

					<div class="field">
						<label class="field__label" for="phone"
							>Nr telefonu:
							<sup>*</sup>
						</label>
						<input required type="tel" id="phone" name="phone" class="field__input" autocomplete="tel" />
					</div>
				</div>
			</div>

			<div class="field">
				<label for="message" class="field__label"
					>Wiadomość:
					<sup>*</sup>
				</label>
				<textarea required name="message" id="message" cols="30" rows="10" class="textarea" autocomplete="off" />
			</div>

			<button class="button button--invert button--full">Wyślij</button>
		</form>
	</div>
</section>

<style lang="scss">
	@use "sass:math";
	@import '../styles/utils';

	.contact {
		background: $navgray;
	}

	.contact__group {
		@include from-portrait {
			display: flex;
			align-items: center;
		}
		> div {
			flex: 1;
		}
	}

	.contact__list {
		padding: 0;
		margin: 0;
		list-style-type: none;
		margin-bottom: $vflow;
		li {
			margin-bottom: math.div($vflow, 2);
		}
		@include from-portrait {
			order: 1;
			margin-left: $vflow;
		}
	}

	.field {
		position: relative;
		display: flex;
		flex-direction: column;
		width: 100%;
		margin-bottom: $vflow;
		&:before {
			content: '';
			position: absolute;
			left: 0;
			top: 0;
			bottom: 0;
		}
	}

	.field__label {
		font-weight: bold;
		margin-bottom: Rem(5px);
		text-transform: uppercase;
		font-size: 0.8rem;
	}

	.field__input,
	.textarea {
		display: block;
		width: 100%;
		appearance: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		font-size: 1.1rem;
		padding: Rem(6px);
		border: 1px solid $black;
		font-family: inherit;
		resize: vertical;
		border-left: 0.3rem solid $black;
		transition: border-left-width 0.15s ease-out;
		&:focus {
			border-left-width: 0.75rem;
		}
	}

	.textarea {
		display: block;
		width: 100%;
	}

	.svg-icon {
		display: inline-block;
		max-width: 1.3rem;
		max-height: 1.3rem;
		vertical-align: middle;
		margin-right: 0.3rem;
	}
</style>
