import React, { useState } from 'react';
import Svg from '../Svg/Svg';
import styles from './MoreButton.module.scss';

const MoreButton: React.FC<{onDelete: () => void, onChange: () => void}> = (props) => {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<div className={styles.MoreButton} onClick={() => setOpen((prevState) => !prevState)}>
			<Svg name='dotes' />
			<div className={`${styles.options} ${open && styles.active}`}>
				<button onClick={props.onChange}>Изменить</button>
				<button onClick={props.onDelete}>Удалить</button>
			</div>
		</div>
	);
};

export default MoreButton;
