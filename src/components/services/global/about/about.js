// >> Modules
import styles from './about.module.scss';

import aboutBg from 'assets/images/services/global/about/aboutBg.png';

// >> Components
import Dots from 'components/overlay/dots/dots';
import OnePoint from './onePoint/onePoint';

// >> Script
export default function About(props) {
	return (
		<div className={styles.section}>
			<Dots type="services-about-3" />
			<img src={aboutBg} className={styles.aboutBg} alt="" />
			<div className={styles.inside}>
				<h2 className={styles.topTitle} data-aos="fade-up">
					{props.title}
				</h2>
				<div className={styles.list} data-type={props.type}>
					<Dots type="services-about-1" />
					<Dots type="services-about-2" />
					{props.list.row1 ? (
						<div
							className={styles.row}
							data-row="row1"
							data-aos="fade-up"
						>
							{props.list.row1.map((element, index) => {
								return (
									<OnePoint
										{...element}
										number={index}
										listType={props.type}
										row="row1"
										key={index}
									/>
								);
							})}
						</div>
					) : null}

					{props.list.row2 ? (
						<div
							className={styles.row}
							data-row="row2"
							data-aos="fade-up"
						>
							{props.list.row2.map((element, index) => {
								return (
									<OnePoint
										{...element}
										number={index}
										listType={props.type}
										row="row2"
										key={index}
									/>
								);
							})}
						</div>
					) : null}
					{props.list.row3 ? (
						<div
							className={styles.row}
							data-row="row3"
							data-aos="fade-up"
						>
							{props.list.row3.map((element, index) => {
								return (
									<OnePoint
										{...element}
										number={index}
										listType={props.type}
										row="row3"
										key={index}
									/>
								);
							})}
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
}
