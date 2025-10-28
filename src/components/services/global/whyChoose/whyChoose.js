// >> Modules
import styles from './whyChoose.module.scss';
import { Typography } from '@mui/material';

import bgShadow from 'assets/images/services/global/whyChoose/bgShadow.png';

// >> Components
import Dots from 'components/overlay/dots/dots';

// >> Script
export default function WhyChoose(props) {
	return (
		<div className={styles.section}>
			<Dots type="services-whyChoose-1" />

			<div className={styles.inside}>
				<img src={bgShadow} className={styles.bgShadow} alt="" />
				<h2 className={styles.title} data-aos="fade-up">
					{props.title}
				</h2>
				<div className={styles.bottom}>
					<div className={styles.left} data-aos="fade-right">
						{props.list.map((element, index) => {
							return (
								<div
									className={styles.onePoint}
									data-type={props.type}
									data-number={index + 1}
									key={index}
								>
									{index + 1 === 2 ? (
										<Dots type="services-whyChoose-2" />
									) : null}
									<div className={styles.icon}>
										<img
											src={element.icon}
											className={styles.rightArrow}
											alt="Icon"
										/>
									</div>
									<div className={styles.texts}>
										<Typography
											className={styles.pointTitle}
										>
											{element.title}
										</Typography>
										{element.desc ? (
											<Typography className={styles.desc}>
												{element.desc}
											</Typography>
										) : null}
									</div>
								</div>
							);
						})}
					</div>
					<div className={styles.rightImg} data-aos="fade-left">
						<img src={props.img} className={styles.img} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
}
