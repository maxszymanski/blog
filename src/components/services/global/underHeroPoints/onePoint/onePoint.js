// >> Modules
import styles from './onePoint.module.scss';
import { Typography } from '@mui/material';

import arrow_right from 'assets/icons/arrow_right.svg';

// >> Script
export default function OnePoint(props) {
	return (
		<div
			className={styles.onePoint}
			data-active={props.activePoint === props.number}
			data-bg={props.number + 1}
			onClick={() => {
				props.activePoint === props.number
					? props.setActivePoint(null)
					: props.setActivePoint(props.number);
			}}
			data-aos="fade-up"
		>
			<div className={styles.insidePoint}>
				<div className={styles.bg}></div>
				<div className={styles.mesh}></div>
				<div className={styles.topInfo}>
					<div className={styles.icon}>
						<img src={props.icon} alt="icon" />
					</div>
					<Typography className={styles.title}>
						{props.title}
					</Typography>
					<img
						src={arrow_right}
						className={styles.rightArrow}
						alt="Open"
					/>
				</div>
				<div className={styles.line}></div>
				<Typography className={styles.desc}>{props.desc}</Typography>
			</div>
		</div>
	);
}
