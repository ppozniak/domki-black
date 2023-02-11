<script lang="ts">
	import PhoneIcon from '$lib/icons/phone.svg?component';
	import MailIcon from '$lib/icons/mail.svg?component';
	import { enhance } from '$app/forms';

	let errorMessage: string = '';
	let successMessage: string = '';
	let loading: boolean = false;
</script>

<section id="kontakt" class="section contact">
	<div class="container">
		<h3>Kontakt</h3>
		<form
			class="contact__form"
			action="/api/email"
			method="POST"
			use:enhance={({ form, data, action, cancel }, ) => {
				errorMessage = '';
				successMessage = '';
				loading = true;

				// @TODO: Handle data invalidation

				return async ({ result, update }) => {
					if (result.type === 'success') {
						if (result?.data?.success) {
							successMessage = result?.data?.success;
							update();
						} else {
							errorMessage = result?.data?.error;
						}
					} else if (result.type === 'error') {
						errorMessage = "Przepraszamy, ale wystąpił problem techniczny. Prosimy o sprawdzenie połączenia z Internetem i spróbowanie ponownie później."
					}

					loading = false;
				};
			}}
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
						<input
							required
							type="text"
							name="name"
							class="field__input"
							id="name"
							autocomplete="name"
							disabled={loading}
						/>
					</div>

					<div class="field">
						<label class="field__label" for="email"
							>Email:
							<sup>*</sup>
						</label>
						<input
							required
							type="email"
							name="email"
							class="field__input"
							id="email"
							autocomplete="email"
							disabled={loading}
						/>
					</div>

					<div class="field">
						<label class="field__label" for="phone"
							>Nr telefonu:
							<sup>*</sup>
						</label>
						<input
							required
							type="tel"
							id="phone"
							name="phone"
							class="field__input"
							autocomplete="tel"
							disabled={loading}
						/>
					</div>
				</div>
			</div>

			<div class="field">
				<label for="message" class="field__label"
					>Wiadomość:
					<sup>*</sup>
				</label>
				<textarea
					required
					name="message"
					id="message"
					cols="30"
					rows="10"
					class="textarea"
					autocomplete="off"
					disabled={loading}
				/>
			</div>

			{#if errorMessage}
				<p class="text--error">
					{errorMessage}
				</p>
			{/if}

			{#if successMessage}
				<p class="text--success">{successMessage}</p>
			{/if}

			<button disabled={loading} class="button button--inverted button--full">Wyślij</button>
		</form>
	</div>
</section>

<style lang="scss">
	@use 'sass:math';
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
		font-size: 1.1rem;
		padding: Rem(6px);
		border: 1px solid $black;
		font-family: inherit;
		resize: vertical;
		border-left: 0.3rem solid $black;
		transition: 0.15s ease-out;
		transition-property: border-left-width, background-color, opacity;
		will-change: border-left-width;
		border-radius: 4px;
		background-color: #fff;

		&:not(:disabled):focus {
			border-left-width: 0.75rem;
		}

		&:disabled {
			opacity: .7;
			cursor: not-allowed;
			background-color: $light-gray;
		}
	}

	.textarea {
		display: block;
		width: 100%;
	}
</style>
