// >> Modules
import { Typography } from '@mui/material';
import styles from './locationsSwitzerland.module.scss';

import switzerlandFlag from 'assets/images/services/end-servers/switzerlandFlag.svg';

// >> Script
export default function LocationsSwitzerland(props) {
	return (
		<>
			<h1 className={styles.leftText}>{props.title}</h1>
			<div className={styles.line}></div>
			<div className={styles.locations}>
				<Typography className={styles.topText}>
					Available locations:
				</Typography>
				<div className={styles.location}>
					<Typography>Switzerland</Typography>
					<img src={switzerlandFlag} alt="Switzerland Flag" />
				</div>
			</div>
		</>
	);
}
