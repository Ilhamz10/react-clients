import React, { useReducer } from 'react';
import { IClient, INote } from '../types/ClientsTypes';
import { clients } from '../json/clients';
import { AllClientActions, ClientActionTypes } from './reducerTypes';

type ClientContextType = {
	clients: IClient[];
	sortClients: () => void;
	addNewNote: (note: INote, id: number | undefined) => void;
	deleteNote: (noteId: number, clientId: number) => void;
	changeNote: (clientId: number, note: INote) => void;
};

export const ClientContext = React.createContext<ClientContextType>({
	clients: [],
	sortClients: () => {},
	addNewNote: (note, id) => {},
	deleteNote: (noteId, clientId) => {},
	changeNote: (clienId, note) => {},
});

const clientReducer = (state: IClient[], action: AllClientActions) => {
	switch (action.type) {
		case ClientActionTypes.SORT_CLIENTS:
			return [...state].sort((a, b) => a.name.localeCompare(b.name));
		case ClientActionTypes.ADD_NEW_NOTE:
			const updatedClients = state.map((client) => {
				if (client.id == action.payload.id) {
					return { ...client, notes: [...client.notes, action.payload.note] };
				}
				return client;
			});
			return updatedClients;
		case ClientActionTypes.DELETE_NOTE:
			const filteredClients = state.map((client) => {
				if (client.id == action.payload.clientId) {
					return {
						...client,
						notes: [...client.notes].filter(
							(note) => note.id !== action.payload.noteId
						),
					};
				}
				return client;
			});
			return filteredClients;
		case ClientActionTypes.CHANGE_NOTE:
			const changedClients = state.map((client) => {
				if (client.id == action.payload.clientId) {
					return {
						...client,
						notes: [...client.notes].map((note) => {
							if (note.id === action.payload.note.id) {
								return action.payload.note;
							}
							return note;
						}),
					};
				}
				return client;
			});
			return changedClients;
		default:
			return state;
	}
};

const ClientContextProvider: React.FC<React.PropsWithChildren> = (props) => {
	const [clientsState, dispatchClientAction] = useReducer(
		clientReducer,
		clients
	);

	const sortClientsHandler = () => {
		dispatchClientAction({ type: ClientActionTypes.SORT_CLIENTS });
	};

	function addNewNoteHandler(note: INote, id: number | undefined) {
		dispatchClientAction({
			type: ClientActionTypes.ADD_NEW_NOTE,
			payload: { note, id },
		});
	}

	function deleteNoteHandler(noteId: number, clientId: number) {
		dispatchClientAction({
			type: ClientActionTypes.DELETE_NOTE,
			payload: { noteId, clientId },
		});
	}

	function changeNoteHandler(clientId: number, note: INote) {
		dispatchClientAction({
			type: ClientActionTypes.CHANGE_NOTE,
			payload: { clientId, note },
		});
	}

	const clientContext: ClientContextType = {
		clients: clientsState,
		sortClients: sortClientsHandler,
		addNewNote: addNewNoteHandler,
		deleteNote: deleteNoteHandler,
		changeNote: changeNoteHandler,
	};

	return (
		<ClientContext.Provider value={clientContext}>
			{props.children}
		</ClientContext.Provider>
	);
};

export default ClientContextProvider;
