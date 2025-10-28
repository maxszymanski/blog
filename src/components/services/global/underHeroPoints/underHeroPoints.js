// >> Modules
import styles from './underHeroPoints.module.scss';
import { useState } from 'react';

// >> Components
import OnePoint from './onePoint/onePoint';
import Dots from 'components/overlay/dots/dots';

// >> Script
export default function UnderHeroPoints(props) {
	const [activePoint, setActivePoint] = useState(null);

	return (
		<div className={styles.section}>
			<Dots type="services-underHeroPoints" />
			<div className={styles.inside}>
				{props.list.map((element, index) => {
					return (
						<OnePoint
							{...element}
							activePoint={activePoint}
							setActivePoint={setActivePoint}
							number={index}
							index={index}
						/>
					);
				})}
			</div>
		</div>
	);
}
