import React from 'react';

import styles from './Root.module.scss';
import ClientContextProvider from '../../../store/client-context';
import LeftSide from '../LeftSide/LeftSide';
import { Outlet } from 'react-router-dom';

const Root = () => {
	return (
		<div className={styles.app}>
			<div className={styles.headBlock}></div>
			<div className='container'>
				<div className={styles.grid}>
					<ClientContextProvider>
						<LeftSide />
						<Outlet />
					</ClientContextProvider>
				</div>
			</div>
		</div>
	);
};

export default Root;
