import React from 'react';

import styles from './VideoPage.module.scss';
import video1 from '../../../../assets/img/video1.png';
import video2 from '../../../../assets/img/video2.png';
import video3 from '../../../../assets/img/video3.png';
import VideoCard from './VideoCard/VideoCard';

const VideoPage = () => {
	return (
		<div className={styles.VideoPage}>
			<VideoCard
				name='Крабик, ходьба в бок в приседе с двумя резинками Кра…'
				img={video1}
			/>
			<VideoCard
				date='15.01.2019 - 22.01.2019'
				name='Разминка для локтевого сустава'
				img={video2}
			/>
			<VideoCard
				date='15.01.2019 - 22.01.2019'
				name='Разминка для локтевого суставаРазминка для локтевого..'
				img={video3}
			/>
		</div>
	);
};

export default VideoPage;
