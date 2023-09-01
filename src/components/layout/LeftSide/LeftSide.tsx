import React, { useEffect, useState, useContext } from 'react';
import styles from './LeftSide.module.scss';
import Svg from '../../UI/Svg/Svg';
import ClientCard from '../../UI/ClientCard/ClientCard';
import { clients } from '../../../json/clients';
import { ClientContext } from '../../../store/client-context';

const LeftSide = () => {
	const clientCtx = useContext(ClientContext);
	const [alowedToCheck, setAlowedToCheck] = useState(false);
	const [selectedClientsCount, setSelectedClientsCount] = useState(0);
	const [allClientsIsChecked, setAllClientsIsChecked] = useState(false);

	useEffect(() => {
		if (allClientsIsChecked) {
			setSelectedClientsCount(clientCtx.clients.length);
		} else {
			setSelectedClientsCount(0);
		}
	}, [allClientsIsChecked]);

	function checkModeToggle() {
		setSelectedClientsCount(0);
		setAllClientsIsChecked(false);
		setAlowedToCheck((prevState) => !prevState);
	}

	function checkAllClients() {
		setAllClientsIsChecked((prevState) => !prevState);
	}

	return (
		<div className={styles.LeftSide}>
			<div className={styles.searchBox}>
				<div className={styles.iconBox}>
					<Svg name='search' />
				</div>
				<div className={styles.filter}>
					<div className={styles.iconBox} onClick={clientCtx.sortClients}>
						<Svg name='filter' />
					</div>
					<div className={styles.iconBox}>
						<Svg name='plus' />
					</div>
				</div>
			</div>
			<div className={styles.selectBox}>
				<div className={styles.checkAll}>
					{alowedToCheck && (
						<>
							<input type='checkbox' onChange={checkAllClients} />
							<p>Все</p>
						</>
					)}
					<span
						style={
							alowedToCheck
								? { background: '#4198C5' }
								: { background: '#616f82' }
						}
						className={styles.clientCount}>
						{!alowedToCheck ? clients.length : selectedClientsCount}
					</span>
				</div>
				{!alowedToCheck ? (
					<button onClick={checkModeToggle}>Выбрать</button>
				) : (
					<div className={styles.buttonsBox}>
						<button>Действия</button>
						<button onClick={checkModeToggle}>Отменить</button>
					</div>
				)}
			</div>
			<div className={styles.clients}>
				{clientCtx.clients.map((client) => (
					<ClientCard
						key={client.id}
						id={client.id}
						name={client.name}
						alowedToCheck={alowedToCheck}
						selectedClients={selectedClientsCount}
						setSelectedClients={setSelectedClientsCount}
						allClientsIsSelected={allClientsIsChecked}
						img={client.img}
					/>
				))}
			</div>
		</div>
	);
};

export default LeftSide;
