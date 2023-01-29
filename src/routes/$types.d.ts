export type PageData = {
	title?: string;
	content?: string;
};

export type PageLoad = () => PageData;
