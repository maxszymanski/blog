// >> Modules
import { Typography } from '@mui/material';
import styles from './locationsSwitzerlandDesc.module.scss';

import switzerlandFlag from 'assets/images/services/end-servers/switzerlandFlag.svg';

// >> Script
export default function LocationsSwitzerlandDesc(props) {
	return (
		<>
			<h1 className={styles.leftText}>{props.title}</h1>
			<div className={styles.line}></div>
			<div className={styles.locations}>
				<div className={styles.topText}>
					<Typography className={styles.topLeftText}>
						Locations:
					</Typography>
					<div className={styles.topRightText}>
						<Typography>Switzerland</Typography>
						<img src={switzerlandFlag} alt="Switzerland Flag" />
					</div>
				</div>

				<Typography className={styles.bottomText}>
					Offshore, No KYC, Anonymous, no logs
				</Typography>
			</div>
		</>
	);
}
