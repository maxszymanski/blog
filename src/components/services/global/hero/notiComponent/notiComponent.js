// >> Modules
import styles from './notiComponent.module.scss';
import { Typography } from '@mui/material';

// >> Script
export default function NotiComponent(props) {
	return (
		<div className={styles.noti} data-contenttype={props.contentType}>
			<img src={props.notiIcon} alt="" />
			<Typography>{props.notiText}</Typography>
		</div>
	);
}
