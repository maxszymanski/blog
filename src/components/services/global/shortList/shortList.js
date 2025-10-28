// >> Modules
import styles from './shortList.module.scss';
import { useState } from 'react';

import shortListBg from 'assets/images/services/global/shortList/shortListBg.png';

// >> Components
import OnePoint from './onePoint/onePoint';

// >> Script
export default function ShortList(props) {
	const [descHeight, setDescHeight] = useState(0); // Making all desc same height to be 1:1 pixel perfect

	const calcDescHeight = (height) => {
		if (height > descHeight) {
			setDescHeight(height);
		}
	};
	return (
		<div className={styles.section}>
			<img src={shortListBg} className={styles.shortListBg} alt="" />
			<div className={styles.inside}>
				{props.list.map((element, index) => {
					return (
						<OnePoint
							{...element}
							calcDescHeight={calcDescHeight}
							descHeight={descHeight}
							number={index}
							descType={props.descType || ''}
							key={index}
						/>
					);
				})}
			</div>
		</div>
	);
}
