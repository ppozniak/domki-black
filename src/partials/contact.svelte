<script lang="ts">
	import PhoneIcon from '$lib/icons/phone.svg?component';
	import MailIcon from '$lib/icons/mail.svg?component';

	// <!-- @TODO: Use formspree API instead of action -->
</script>

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
						<PhoneIcon />
						<a class="link" href="tel:+48508101504">+48 508 101 504</a>
					</li>
					<li>
						<span class="sr-only">Adres email</span>
						<MailIcon />
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

			<button class="button button--inverted button--full">Wyślij</button>
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

		:global(svg) {
			display: inline-block;
			max-width: 1.3rem;
			max-height: 1.3rem;
			vertical-align: middle;
			margin-right: 0.3rem;
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
		border-radius: 8px;
		
		&:focus {
			border-left-width: 0.75rem;
		}
	}

	.textarea {
		display: block;
		width: 100%;
	}
</style>
