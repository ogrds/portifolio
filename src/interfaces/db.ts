export interface Item {
	title: string;
	link: string;
}

export interface Portfolio {
	title: string;
	link: string;
}

export interface Header {
	items: Item[];
	portfolio: Portfolio;
}

export interface Sections {
	skills: string;
	projects: string;
}

export interface Main {
	title: string;
	content: string[];
	sections: Sections;
}

export interface Content {
	name: string;
	photo: string;
	rating: number;
	show: boolean;
}

export interface Knowledge {
	title: string;
	content: Content[];
}

export interface Learning {
	title: string;
	subtitle: string;
	content: Content[];
}

export interface Languages {
	title: string;
	content: (Content & { status?: string })[];
}

export interface Project {
	title: string;
	definition: string;
	specification: string;
	link: string;
	show: boolean;
}

export interface Footer {
	developed: string;
}

export interface DataBaseLocaleObject {
	header: Header;
	main: Main;
	knowledge: Knowledge;
	learning: Learning;
	languages: Languages;
	projects: Project[];
	footer: Footer;
}
