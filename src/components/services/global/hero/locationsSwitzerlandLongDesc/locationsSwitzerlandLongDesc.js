// >> Modules
import { Typography } from '@mui/material';
import styles from './locationsSwitzerlandLongDesc.module.scss';

import switzerlandFlag from 'assets/images/services/end-servers/switzerlandFlag.svg';

// >> Script
export default function LocationsSwitzerlandLongDesc(props) {
	return (
		<>
			<div className={styles.top}>
				<h1 className={styles.leftText}>{props.title}</h1>
				<div className={styles.locations}>
					<Typography className={styles.topText}>
						Available Offshore Location:
					</Typography>
					<div className={styles.location}>
						<Typography>Switzerland</Typography>
						<img src={switzerlandFlag} alt="Switzerland Flag" />
					</div>
				</div>
			</div>
			<Typography className={styles.bottomDesc}>
				{props.longDesc}
			</Typography>
		</>
	);
}
