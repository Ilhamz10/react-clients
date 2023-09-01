import React, { useContext, useRef, useState } from 'react';

import styles from './Note.module.scss';
import MoreButton from '../../../../UI/moreBtn/MoreButton';
import { ClientContext } from '../../../../../store/client-context';
import Modal from '../../../../UI/Modal/Modal';

const Note: React.FC<{
	date: string;
	text: string;
	img?: string;
	id: number;
	clienId: number;
}> = (props) => {
	const clientCtx = useContext(ClientContext);
	const [modalShow, setModalShow] = useState<boolean>(false);

	const [textAreaState, setTextAreaState] = useState<string>('');
	const [dateState, setDateState] = useState<string>('');

	function openModal() {
		setModalShow(true);
		setDateState(props.date);
		setTextAreaState(props.text);
	}

	function changeNoteHandler() {
		clientCtx.changeNote(props.clienId, {
			id: props.id,
			date: dateState,
			text: textAreaState,
		});
		setModalShow(false)
	}

	function deleteNoteHandler() {
		clientCtx.deleteNote(props.id, props.clienId);
	}

	return (
		<div className={styles.note}>
			<div>
				<p className={styles.noteText}>
					<span className={styles.noteDate}>{props.date}</span>
					{props.text}
				</p>
				{props.img && (
					<div className={styles.imgBox}>
						<img className={styles.noteImg} src={props.img} alt='' />
					</div>
				)}
			</div>
			<MoreButton onChange={openModal} onDelete={deleteNoteHandler} />
			{modalShow && (
				<Modal onHide={() => setModalShow(false)}>
					<div className={styles.addNewNote}>
						<p>Change Note</p>
						<label htmlFor='note-text'>Note</label>
						<textarea
							id='note-text'
							value={textAreaState}
							onChange={(event) => setTextAreaState(event.target.value)}
						/>
						<label htmlFor='note-date'>Date:</label>
						<input
							id='note-date'
							type='date'
							value={dateState}
							onChange={(event) => setDateState(event.target.value)}
						/>
						<button onClick={changeNoteHandler}>Save</button>
					</div>
				</Modal>
			)}
		</div>
	);
};

export default Note;
