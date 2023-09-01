import { INote } from '../types/ClientsTypes';

export enum ClientActionTypes {
	ADD_NEW_NOTE = 'ADD_NEW_NOTE',
	SORT_CLIENTS = 'SORT_CLIENTS',
	DELETE_NOTE = 'DELETE_NOTE',
	CHANGE_NOTE = 'CHANGE_NOTE',
}

interface AddNoteAction {
	type: ClientActionTypes.ADD_NEW_NOTE;
	payload: { note: INote; id: number | undefined };
}

interface DeleteNoteAction {
	type: ClientActionTypes.DELETE_NOTE;
	payload: { noteId: number; clientId: number };
}

interface ChangeNoteAction {
	type: ClientActionTypes.CHANGE_NOTE;
	payload: { note: INote; clientId: number };
}

interface SortClientsAction {
	type: ClientActionTypes.SORT_CLIENTS;
}

export type AllClientActions =
	| SortClientsAction
	| AddNoteAction
	| DeleteNoteAction
	| ChangeNoteAction;
