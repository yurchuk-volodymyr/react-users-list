export interface ILogin {
	uuid: string,
	username: string
}

export interface IThumbnail {
	large: string,
	thumbnail: string
}

export interface IName {
	title: string,
	first: string,
	last: string
}

export interface IId {
	name: string,
	value: string
}

export interface IDate {
	date: string,
	age: number
}
export interface ILocation {
	country: string,
	city: string,
	street: IStreet,
	postcode: number
}

export interface IStreet {
	name: string,
	number: number
}

export interface IUser {
	login: ILogin,
	cell: string,
	picture: IThumbnail,
	name: IName,
	email: string,
	gender: string,
	id: IId,
	dob: IDate,
	registered: IDate,
	nat: string,
	phone: string,
	location: ILocation
}
