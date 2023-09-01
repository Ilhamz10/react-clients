export interface INote {
	id: number;
	date: string;
	text: string;
	img?: string;
}

export interface IClient {
	id: number;
	name: string;
	age: number;
	sex: string;
	img: string;
	notes: INote[];
}
