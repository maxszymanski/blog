// >> Modules
import styles from './onePoint.module.scss';
import { Typography } from '@mui/material';
import { useState } from 'react';

import arrow_right from 'assets/icons/arrow_right.svg';

// >> Script
export default function OnePoint(props) {
	const [pointOpened, setPointOpened] = useState(false);

	return (
		<>
			<div
				className={styles.point}
				data-opened={pointOpened}
				onClick={() => {
					setPointOpened(!pointOpened);
				}}
			>
				<img src={props.icon} className={styles.icon} alt="Icon" />
				<Typography className={styles.pointTitle}>
					{props.title}
					<img
						src={arrow_right}
						className={styles.arrow_right}
						alt={pointOpened === true ? 'Close' : 'Open'}
					/>
				</Typography>
				<Typography className={styles.pointDesc}>
					{props.desc}
				</Typography>
			</div>

			{props.number !== 4 &&
			props.number !== 8 &&
			props.number !== 12 &&
			props.number !== 16 &&
			props.length !== props.number ? (
				<div className={styles.rightLine}></div>
			) : null}
		</>
	);
}
