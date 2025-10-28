// >> Modules
import styles from './keyAdvantages.module.scss';
import { useState } from 'react';

import bgShadow from 'assets/images/services/global/keyAdvantages/bgShadow.png';

// >> Components
import Dots from 'components/overlay/dots/dots';
import OnePoint from './onePoint/onePoint';

// >> Script
export default function KeyAdvantages(props) {
	const [activePoint, setActivePoint] = useState(null);

	return (
		<div className={styles.section}>
			<Dots type="services-keyAdvantages-1" />

			<div className={styles.inside}>
				<img src={bgShadow} className={styles.bgShadow} alt="" />
				<h2 className={styles.title} data-aos="fade-up">
					{props.title}
				</h2>
				<div className={styles.points}>
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
					<div className={styles.centerLine}></div>
					<Dots type="services-keyAdvantages-2" />
				</div>
			</div>
		</div>
	);
}
