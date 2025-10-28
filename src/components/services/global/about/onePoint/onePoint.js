// >> Modules
import styles from './onePoint.module.scss';
import { Typography } from '@mui/material';

// >> Script
export default function OnePoint(props) {
	return (
		<div
			className={styles.onePoint}
			data-type={props.listType}
			data-row={props.row}
		>
			{props.number !== 0 ? <div className={styles.line}></div> : null}
			<div className={styles.icon}>
				<img src={props.icon} alt="" />
			</div>
			<Typography className={styles.text}>{props.text}</Typography>
		</div>
	);
}
