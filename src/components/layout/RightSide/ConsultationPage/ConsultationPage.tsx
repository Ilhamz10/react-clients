import React from 'react';
import ConsultationCard from './Consultationcard/ConsultationCard';

import styles from './ConsultationPage.module.scss';

const ConsultationPage = () => {
	return (
		<div className={styles.ConsultationPage}>
			<ConsultationCard
				date='15.01.2019, 12:30-13:00'
				name='Online консультация'
				icon='blueVideo'
        borderColor='#4198C5'
			/>
			<ConsultationCard
				date='15.01.2019, 12:30-13:00'
				name='Online консультация'
				icon='grayVideo'
			/>
			<ConsultationCard
				date='15.01.2019, 12:30-13:00'
				name='Личный приём'
				icon='meeting'
			/>
		</div>
	);
};

export default ConsultationPage;
