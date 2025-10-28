// >> Modules
import { localeMayDigits } from 'utils/locales';
import styles from './onePoint.module.scss';
import { Button, Typography } from '@mui/material';

import arrow_right from 'assets/icons/arrow_right.svg';

// >> Script
export default function OnePoint(props) {
	return (
		<div
			className={styles.onePoint}
			onClick={() => {
				props.setSelectedPoint(props.index);
			}}
			data-center={props.selectedPoint === props.index ? true : false}
			data-left={props.selectedPoint === props.index + 1 ? true : false}
			data-maxleft={
				props.selectedPoint === props.index + 2 ? true : false
			}
			data-right={props.selectedPoint === props.index - 1 ? true : false}
			data-maxright={
				props.selectedPoint === props.index - 2 ? true : false
			}
		>
			<div className={styles.insidePoint}>

				<div className={styles.title}>
					<img src={props.icon} alt="" />
					<Typography>{props.name}</Typography>
				</div>
				{props.badges.length > 0 ? (
					<div className={styles.badges}>
						{props.badges.map((element, index) => {
							return (
								<div className={styles.category} key={index}>
									<img src={element.icon} alt="" />
									<Typography>{element.name}</Typography>
								</div>
							);
						})}
					</div>
				) : null}
				{props.priceFrom !== '' && props.priceFrom !== 0 ? (
					<Typography className={styles.priceInfo}>
						From <span>{localeMayDigits(props.priceFrom, 2)}€</span>{' '}
						/month
					</Typography>
				) : null}
				{props.desc !== '' ? (
					<Typography className={styles.desc}>
						{props.desc}
					</Typography>
				) : null}
				<div className={styles.texts}>
					{props.leftText !== '' ? (
						<Typography className={styles.text}>
							{props.leftText}
						</Typography>
					) : null}
					{props.rightText !== '' ? (
						<Typography className={styles.text}>
							{props.rightText}
						</Typography>
					) : null}
				</div>
				<div className={styles.bottomBtn}>
					<Button
						className={styles.btn}
						onClick={() => {
							// view more
						}}
						disableRipple
					>
						<Typography>View more</Typography>
						<img src={arrow_right} alt="" />
					</Button>
				</div>
			</div>
		</div>
	);
}
