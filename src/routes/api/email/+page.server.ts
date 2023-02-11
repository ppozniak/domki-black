import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';

const ERROR_MESSAGE =
	'Wystąpił błąd. Proszę spróbować poźniej, lub skontaktować się z nami telefonicznie.';

const SUCCESS_MESSAGE = 'Twoja wiadomość e-mail została wysłana pomyślnie!';

export const actions = {
	default: async ({ request, fetch }) => {
		const formData = await request.formData();
		const email = formData.get('email');

		// @TODO: Data validation
		if (!email) {
			return fail(400, { email, missing: true });
		}

		try {
			const response = await fetch('https://formspree.io/f/xbjegavj', {
				method: 'POST',
				body: formData,
				headers: {
					Accept: 'application/json'
				}
			});
			const responseData = await response.json();

			if (response.ok) {
				return { success: SUCCESS_MESSAGE };
			} else {
				console.error(responseData);
				return { error: ERROR_MESSAGE };
			}
		} catch (error) {
			return {
				error: ERROR_MESSAGE
			};
		}
	}
} satisfies Actions;
