// >> Modules
import styles from './onePoint.module.scss';
import { Button, Typography } from '@mui/material';
import { useEffect, useRef } from 'react';

import arrow_right from 'assets/icons/arrow_right.svg';
import mostPopular from 'assets/images/services/global/longList/mostPopular.png';

// >> Script
export default function OnePoint(props) {
	const descRef = useRef(null);

	useEffect(() => {
		if (descRef.current && props.calcDescHeight) {
			props.calcDescHeight(descRef.current.clientHeight);
		}
	}, [descRef, props]);

	return (
		<div className={styles.onePoint} data-aos="fade-up">
			{props.mostPopular === true ? (
				<div className={styles.mostPopular}>
					<img src={mostPopular} alt="Most Popular" />
				</div>
			) : null}

			<div className={styles.title}>
				<img src={props.icon} alt="Icon" />
				<Typography>{props.title}</Typography>
			</div>
			<Typography
				className={styles.desc}
				ref={descRef}
				style={{ minHeight: `${props.descHeight}px` }}
				data-type={props.descType}
			>
				{props.desc}
			</Typography>
			<div className={styles.table}>
				{props.table.map((element, index) => {
					return (
						<div className={styles.oneRow}>
							<Typography className={styles.oneText}>
								{element.name}:
							</Typography>
							<Typography className={styles.oneText}>
								<span>{element.value}</span>
							</Typography>
						</div>
					);
				})}
			</div>
			<div className={styles.bottom}>
				<Typography className={styles.price}>
					{props.perMonth}€ <span>/month</span>
				</Typography>
				<div className={styles.button}>
					<Button
						className={styles.btn}
						onClick={() => {
							// View more
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
