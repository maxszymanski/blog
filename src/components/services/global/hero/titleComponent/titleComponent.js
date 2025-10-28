// >> Modules
import styles from './titleComponent.module.scss';

// >> Script
export default function TitleComponent(props) {
	return (
		<>
			<h1 className={styles.leftText}>{props.title}</h1>
		</>
	);
}
