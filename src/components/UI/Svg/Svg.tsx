import React, { cloneElement } from 'react';
import { icons } from './icons';
import { INameIcons } from '../../../types/Icons';

const Svg: React.FC<{ name: INameIcons; size?: number; fill?: string }> = (props) => {
	return cloneElement(icons[props.name as INameIcons], {
		size: props.size,
		fill: props.fill,
	});
};

export default Svg;
