import React from 'react';

import styles from './EventCard.module.scss'
import Svg from '../../../../UI/Svg/Svg';
import eventImg from '../../../../../assets/img/event.png'

const EventCard = () => {
	return (
		<div className={styles.EventCard}>
			<img src={eventImg} alt='' />
			<div className={styles.eventCardContext}>
				<div className={styles.name}>Тяга резинки в шаге со сгибанием локтя под 90 градусов </div>
				<div className={styles.infoBox}>
					<div className={styles.info}>
                        <Svg name='smallVideo'/>
                        <span>Вебинар</span>
                    </div>
					<div className={styles.info}>
                        <Svg name='calendar'/>
                        <span>9 марта 2021</span>
                    </div>
					<div className={styles.info}>
                        <Svg name='clock'/>
                        <span>17:00</span>
                    </div>
				</div>
			</div>
		</div>
	);
};

export default EventCard;
