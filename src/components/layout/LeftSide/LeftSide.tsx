import React, { useEffect, useState, useContext } from 'react';
import styles from './LeftSide.module.scss';
import Svg from '../../UI/Svg/Svg';
import ClientCard from '../../UI/ClientCard/ClientCard';
import { clients } from '../../../json/clients';
import { ClientContext } from '../../../store/client-context';
import { useNavigate } from 'react-router-dom';

const LeftSide = () => {
	const [navigation, setNavigation] = useState<string>('/1')
	const clientCtx = useContext(ClientContext);
	const [alowedToCheck, setAlowedToCheck] = useState(false);
	const [selectedClientsCount, setSelectedClientsCount] = useState(0);
	const [allClientsIsChecked, setAllClientsIsChecked] = useState(false);

	const navigate = useNavigate();

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

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 1200 && window.innerWidth >= 565) {
				setNavigation('/1')
			} else if (window.innerWidth < 565) {
				setNavigation('/')
			}
		};

		handleResize();

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	useEffect(() => {
		navigate(navigation)
	}, [navigation])

	return (
		<div className={styles.LeftSide}>
			<div className={styles.searchBox}>
				<div className={styles.iconBox}>
					<Svg name='search' size={20} />
				</div>
				<div className={styles.filter}>
					<div className={styles.iconBox} onClick={clientCtx.sortClients}>
						<Svg name='filter' size={20} />
					</div>
					<div className={styles.iconBox}>
						<Svg name='plus' size={20} />
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
