// >> Modules
import styles from './useCases.module.scss';

import bgShadow from 'assets/images/services/global/useCases/bgShadow.png';

// >> Components
import Dots from 'components/overlay/dots/dots';
import OnePoint from './onePoint/onePoint';

// >> Script
export default function UseCases(props) {
	return (
		<div className={styles.section}>
			<Dots type="services-useCases-1" />

			<div className={styles.inside}>
				<img src={bgShadow} className={styles.bgShadow} alt="" />
				<h2 className={styles.title} data-aos="fade-up">
					Diverse Use Cases:
				</h2>
				<div className={styles.bottom} data-aos="fade-up">
					{props.list.map((element, index) => {
						return (
							<OnePoint
								{...element}
								number={index + 1}
								length={props.list.length}
								index={index}
							/>
						);
					})}
					<div
						className={styles.line1}
						data-type={
							props.list.length > 8
								? 'two-lines'
								: props.list.length > 4
								? 'one-line'
								: 'none'
						}
					></div>
					<div
						className={styles.line2}
						data-type={props.list.length > 8 ? 'two-lines' : 'none'}
					></div>
				</div>
			</div>
		</div>
	);
}
