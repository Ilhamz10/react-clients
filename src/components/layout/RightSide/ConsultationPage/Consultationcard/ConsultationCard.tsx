import React from 'react';

import styles from './ConsultationCard.module.scss';
import Svg from '../../../../UI/Svg/Svg';
import { INameIcons } from '../../../../../types/Icons';

const ConsultationCard: React.FC<{
	name: string;
	date: string;
	icon: INameIcons;
	borderColor?: string;
}> = (props) => {
	return (
		<div style={props.borderColor ? {borderColor: props.borderColor} : {}} className={styles.ConsultationCard}>
			<div className={styles[props.icon]}>
				<Svg name={props.icon} />
			</div>
			<div className='consultationContext'>
				<p className={styles.name}>{props.name}</p>
				<p className={styles.date}>{props.date}</p>
			</div>
		</div>
	);
};

export default ConsultationCard;
