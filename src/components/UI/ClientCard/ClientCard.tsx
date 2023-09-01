import React, { useRef, useEffect, useContext } from 'react';

import styles from './ClientCard.module.scss';
import { NavLink } from 'react-router-dom';
import { ClientContext } from '../../../store/client-context';

const ClientCard: React.FC<{
	name: string;
	alowedToCheck: boolean;
	id: number;
	selectedClients: number;
	setSelectedClients: React.Dispatch<React.SetStateAction<number>>;
	allClientsIsSelected: boolean;
	img: string;
}> = (props) => {
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (props.allClientsIsSelected && inputRef.current) {
			inputRef.current.checked = true;
		} else if (inputRef.current) {
			inputRef.current.checked = false;
		}
	}, [props.allClientsIsSelected]);

	function checkClient() {
		if (!inputRef.current?.checked) {
			props.setSelectedClients((prevState) => prevState - 1);
		} else {
			props.setSelectedClients((prevState) => prevState + 1);
		}
	}

	return (
		<NavLink
			to={`/${props.id}`}
			className={({ isActive }) =>
				isActive ? `${styles.clientCard} ${styles.active}` : styles.clientCard
			}>
			{props.alowedToCheck && (
				<input
					ref={inputRef}
					type='checkbox'
					onChange={checkClient}
					onClick={(event) => event.stopPropagation()}
				/>
			)}
			<img src={props.img} className={styles.img} />
			<div className={styles.clientName}>{props.name}</div>
		</NavLink>
	);
};

export default ClientCard;
