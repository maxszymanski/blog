// >> Modules
import styles from './onePoint.module.scss';
import { Typography } from '@mui/material';

import arrow_right from 'assets/icons/arrow_right.svg';
import rightCurve from 'assets/images/services/global/keyAdvantages/rightCurve.svg';

// >> Script
export default function OnePoint(props) {
	return (
		<div className={styles.outside} data-aos="fade-up">
			<div
				className={styles.onePoint}
				data-active={props.activePoint === props.number}
				onClick={() => {
					props.activePoint === props.number
						? props.setActivePoint(null)
						: props.setActivePoint(props.number);
				}}
			>
				<div className={styles.top}>
					<img src={props.icon} className={styles.icon} alt="icon" />
					<Typography className={styles.title}>
						{props.title}
					</Typography>
					<img
						src={arrow_right}
						className={styles.rightArrow}
						alt="Open"
					/>
				</div>
				<Typography className={styles.desc}>{props.desc}</Typography>

				<img
					src={rightCurve}
					className={styles.rightCurve}
					alt="Right Curve"
				/>
			</div>
		</div>
	);
}
