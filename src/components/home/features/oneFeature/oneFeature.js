// >> Modules
import styles from './oneFeature.module.scss';
import { Typography } from '@mui/material';
import RiveAnim from 'components/overlay/riveAnim/riveAnim';
import { useState } from 'react';

// >> Script
export default function OneFeature(props) {
	const [riveLoaded, setRiveLoaded] = useState(false);


	return (
		<div
			className={styles.onePoint}
			data-type={props.type}
			data-number={props.number}
			data-aos="fade-up"
			data-loaded={riveLoaded}
		>
			<div className={styles.rive}>
				<RiveAnim
					src={props.rive}
					loadFunction={() => {
						setTimeout(() => {
							setRiveLoaded(true);
						}, 500);
					}}
				/>
			</div>
			<div className={styles.onePointContent}>
				<img src={props.icon} className={styles.icon} alt=""/>
				<Typography className={styles.pointTitle}>{props.title}</Typography>
				<Typography className={styles.pointDesc}>{props.desc}</Typography>
			</div>

		</div>
	);
}
