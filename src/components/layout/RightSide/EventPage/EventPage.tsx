import React from 'react';

import styles from './EventPage.module.scss';
import EventCard from './EventCard/EventCard';

const EventPage = () => {
	return (
		<div className={styles.EventPage}>
			<EventCard />
			<EventCard />
			<EventCard />
			<EventCard />
		</div>
	);
};

export default EventPage;
