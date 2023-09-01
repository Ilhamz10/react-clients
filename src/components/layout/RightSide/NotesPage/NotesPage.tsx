import React, { useContext } from 'react';
import Note from './Note/Note';

import styles from './NotesPage.module.scss';
import { IClient } from '../../../../types/ClientsTypes';
import { useParams } from 'react-router-dom';
import { ClientContext } from '../../../../store/client-context';

const NotesPage: React.FC = (props) => {
	const clientCtx = useContext(ClientContext);
	const params = useParams();

	const currentClient: IClient | undefined = clientCtx.clients.find(
		(client) => client.id === Number(params?.id)
	);

	return (
		<div className={styles.notes}>
			{currentClient?.notes.map((note) => (
				<Note key={note.id} text={note.text} date={note.date} img={note.img} id={note.id} clienId={currentClient.id} />
			))}
		</div>
	);
};

export default NotesPage;
