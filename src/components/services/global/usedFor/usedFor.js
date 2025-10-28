// >> Modules
import styles from './usedFor.module.scss';
import { Typography } from '@mui/material';
import { useState } from 'react';

import bgShadow from 'assets/images/services/global/usedFor/bgShadow.png';

import rightImg_top from 'assets/images/services/global/usedFor/rightImg_top.png';
import rightImg_bottom from 'assets/images/services/global/usedFor/rightImg_bottom.png';

// >> Components
import Dots from 'components/overlay/dots/dots';

// >> Script
export default function UsedFor(props) {
	const [hovered, setHovered] = useState(null);

	return (
		<div className={styles.section}>
			<Dots type="services-usedFor-1" />

			<div className={styles.inside}>
				<img src={bgShadow} className={styles.bgShadow} alt="" />
				<h2 className={styles.title + (props.title ? " text-left" : "")} data-aos="fade-up">
					{props.title ? props.title : 'Used for'}
				</h2>
				<div className={styles.bottom}>
					<div className={styles.left} data-aos="fade-right">
						{props.list.map((element, index) => {
							return (
								<div
									className={styles.onePoint}
									data-hovered={hovered === index + 1}
									data-type={props.type}
									data-number={index + 1}
									key={index}
								>
									{index + 1 === 2 ? (
										<Dots type="services-usedFor-2" />
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
					<div className={styles.right}>
						<div className={styles.rightImg} data-aos="fade-left">
							<img
								src={rightImg_top}
								className={styles.topImg}
								alt=""
							/>
							<img
								src={rightImg_bottom}
								className={styles.bottomImg}
								alt=""
							/>
							<div className={styles.mask}>
								<div
									className={styles.dot}
									data-number="1"
									data-type="mask"
								></div>
								<div
									className={styles.dot}
									data-number="2"
									data-type="mask"
								></div>
							</div>
							<div className={styles.noMask}>
								<div
									className={styles.dot}
									data-number="1"
								></div>
								<div
									className={styles.dot}
									data-number="2"
								></div>
							</div>

							<div
								className={styles.point1Hover}
								onMouseEnter={() => {
									setHovered(1);
								}}
								onMouseLeave={() => {
									setHovered(null);
								}}
							></div>
							<div
								className={styles.point2Hover}
								onMouseEnter={() => {
									setHovered(2);
								}}
								onMouseLeave={() => {
									setHovered(null);
								}}
							></div>
							<div
								className={styles.point3Hover}
								onMouseEnter={() => {
									setHovered(3);
								}}
								onMouseLeave={() => {
									setHovered(null);
								}}
							></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
