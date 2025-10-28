// >> Modules
import styles from './offer.module.scss';
import { Button, Typography } from '@mui/material';

import arrow_right from 'assets/icons/arrow_right.svg';

// >> Script
export default function Offer(props) {
	return (
		<div className={styles.section}>
			<div className={styles.inside} data-aos="fade-up">
				<div className={styles.top}>
					<div className={styles.title}>
						<img src={props.icon} alt="Icon" />
						<Typography>{props.title}</Typography>
					</div>
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
				<Typography className={styles.price}>
					{props.perMonth}€<br />
					<span>/month</span>
				</Typography>
				<Typography className={styles.desc}>{props.desc}</Typography>

				<div className={styles.list} data-type={props.listType}>
					{props.list.map((element, index) => {
						return (
							<>
								<div className={styles.oneElement} key={index}>
									<Typography className={styles.name}>
										{element.name}:
									</Typography>
									<Typography className={styles.value}>
										{element.value}
									</Typography>
								</div>
								{index + 1 !== props.list.length ? (
									<div className={styles.line}></div>
								) : null}
							</>
						);
					})}
				</div>
			</div>
		</div>
	);
}
