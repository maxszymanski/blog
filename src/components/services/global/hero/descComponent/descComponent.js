// >> Modules
import styles from './descComponent.module.scss';
import { Typography } from '@mui/material';

// >> Script
export default function DescComponent(props) {
	return (
		<>
			<Typography className={styles.desc}>{props.desc}</Typography>
		</>
	);
}
