import type { PageServerLoad } from './$types';
import contentful from 'contentful';
import {
	CONTENTFUL_SPACE_ID,
	CONTENTFUL_ACCESS_TOKEN,
	CONTENTFUL_PRICE_TABLE_ENTRY_ID
} from '$env/static/private';

type ContentfulPriceTable = {
	contentTypeId: 'priceTable';
	fields: {
		rows: contentful.EntryFieldTypes.Object<{
			primary: Record<string, number>;
			secondary: Record<string, number>;
		}>;
	};
};

export const load = (async () => {
	// Get price table from contentful
	const client = contentful.createClient({
		space: CONTENTFUL_SPACE_ID,
		accessToken: CONTENTFUL_ACCESS_TOKEN
	});

	const priceTableData = await client.getEntry<ContentfulPriceTable>(
		CONTENTFUL_PRICE_TABLE_ENTRY_ID
	);

	return priceTableData.fields.rows;
}) satisfies PageServerLoad;

export const prerender = true;
