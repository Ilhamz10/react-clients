import React, { useContext, useEffect, useRef, useState } from 'react';

import styles from './RightSide.module.scss';
import {
	NavLink,
	Outlet,
	useLocation,
	useNavigate,
	useParams,
} from 'react-router-dom';
import { ClientContext } from '../../../store/client-context';
import { IClient } from '../../../types/ClientsTypes';
import Svg from '../../UI/Svg/Svg';
import Modal from '../../UI/Modal/Modal';

const RightSide = () => {
	const [modalShow, setModalShow] = useState(false);

	const textInputRef = useRef<HTMLTextAreaElement>(null)
	const dateInputRef = useRef<HTMLInputElement>(null)

	const navigate = useNavigate();
	const location = useLocation();
	const clientCtx = useContext(ClientContext);
	const params = useParams();

	const currentClient: IClient | undefined = clientCtx.clients.find(
		(client) => client.id === Number(params?.id)
	);

	function addNewNotehandler() {
		if(dateInputRef.current?.value && textInputRef.current?.value)
			clientCtx.addNewNote({date: dateInputRef.current?.value, id: Date.now(), text: textInputRef.current?.value}, currentClient?.id)
		setModalShow(false)
	}

	return (
		<div className={styles.RightSide}>
			<div className={styles.rightSideHeader}>
				<div className={styles.rightSideHeaderContext}>
					<img
						className={styles.rightSideHeaderImg}
						src={currentClient?.img}
						alt='client'
					/>
					<div className={styles.clientInfoBox}>
						<p className={styles.clientName}>{currentClient?.name}</p>
						<p className={styles.clientInfo}>
							{currentClient?.age} лет, {currentClient?.sex}
						</p>
					</div>
				</div>
			</div>
			<div className={styles.rightSideHeads}>
				<div className={styles.rightSideNavs}>
					<ul>
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive ? styles.active : undefined
								}
								to={`/${currentClient?.id}`}>
								Заметки
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive ? styles.active : undefined
								}
								to={`/${currentClient?.id}/consulting`}>
								Консультации
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive ? styles.active : undefined
								}
								to={`/${currentClient?.id}/videos`}>
								Видео
							</NavLink>
						</li>
						<li>
							<NavLink
								className={({ isActive }) =>
									isActive ? styles.active : undefined
								}
								to={`/${currentClient?.id}/events`}>
								Мероприятия
							</NavLink>
						</li>
					</ul>
					<button className={styles.eventBtn} onClick={() => setModalShow(true)}>
						<p>
							{location.pathname.includes('notes')
								? 'Новая заметка'
								: location.pathname.includes('consulting')
								? 'Записать'
								: 'Рекомендовать'}
						</p>
						<div className={styles.iconBox}>
							<Svg name='plus' />
						</div>
					</button>
					{modalShow && (
						<Modal onHide={() => setModalShow(false)}>
							<div className={styles.addNewNote}>
								<p>Add new Note</p>
								<label htmlFor="note-text">Note</label>
								<textarea id='note-text' ref={textInputRef} />
								<label htmlFor="note-date">Date:</label>
								<input id='note-date' ref={dateInputRef} type="date" />
								<button onClick={addNewNotehandler}>Save</button>
							</div>
						</Modal>
					)}
				</div>
				<Outlet />
			</div>
		</div>
	);
};

export default RightSide;
