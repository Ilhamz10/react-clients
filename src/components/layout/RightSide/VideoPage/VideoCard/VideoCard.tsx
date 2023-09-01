import React from 'react';

import styles from './VideoCard.module.scss';

const VideoCard: React.FC<{name: string; date?: string; img: string}> = (props) => {
	return (
		<div className={styles.VideoCard}>
			<img src={props.img} alt='' />
			<div className={styles.videoCardContext}>
				<div className={styles.name}>
					{props.name}
				</div>
				<div className={styles.date}>
					<p>Астахова Е.В.</p>
					<p>{props.date}</p>
				</div>
			</div>
		</div>
	);
};

export default VideoCard;
