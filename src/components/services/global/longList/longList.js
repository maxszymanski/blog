// >> Modules
import styles from './longList.module.scss';
import { useState } from 'react';

import bgShadow from 'assets/images/services/global/keyAdvantages/bgShadow.png';

// >> Components
import OnePoint from './onePoint/onePoint';

// >> Script
export default function LongList(props) {
	const [descHeight, setDescHeight] = useState(0); // Making all desc same height to be 1:1 pixel perfect

	const calcDescHeight = (height) => {
		if (height > descHeight) {
			setDescHeight(height);
		}
	};

	return (
		<div className={styles.section}>
			<div className={styles.inside} data-from={props.from || ''}>
				<img src={bgShadow} className={styles.bgShadow} alt="" />
				{props.list.map((element, index) => {
					return (
						<OnePoint
							{...element}
							calcDescHeight={calcDescHeight}
							descHeight={descHeight}
							descType={props.descType || ''}
							key={index}
						/>
					);
				})}
			</div>
		</div>
	);
}
