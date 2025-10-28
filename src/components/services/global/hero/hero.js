// >> Modules
import styles from './hero.module.scss';

import heroShadow from 'assets/images/services/global/hero/heroShadow.png';
import heroLeftBg from 'assets/images/services/global/hero/leftBg.png';
import heroRightBg from 'assets/images/services/global/hero/rightBg.png';
import heroTitleBg from 'assets/images/services/global/hero/titleBg.png';
import heroTitleBg2 from 'assets/images/services/global/hero/titleBg2.png';

// >> Components
import Dots from 'components/overlay/dots/dots';
import TitleComponent from './titleComponent/titleComponent';
import LocationsSwitzerland from './locationsSwitzerland/locationsSwitzerland';
import DescComponent from './descComponent/descComponent';
import NotiComponent from './notiComponent/notiComponent';
import LocationsSwitzerlandDesc from './locationsSwitzerlandDesc/locationsSwitzerlandDesc';
import LocationsSwitzerlandLongDesc from './locationsSwitzerlandLongDesc/locationsSwitzerlandLongDesc';

// >> Script
export default function Hero(props) {
	return (
		<div className={styles.section}>
			{props.bottomDots ? <Dots type="services-hero-1" /> : null}
			<div className={styles.inside}>
				<img src={heroShadow} className={styles.heroShadow} alt="" />

				<div className={styles.left} data-aos="fade-right">
					<img
						src={heroLeftBg}
						className={styles.heroLeftBg}
						alt=""
					/>
					<img src={props.icon} className={styles.heroIcon} alt="" />
				</div>
				<div
					className={styles.right}
					data-aos="fade-left"
					data-content={props.content || ''}
				>
					<img
						src={heroRightBg}
						className={styles.heroRightBg}
						alt=""
					/>
					<img
						src={
							props.content !==
								'locations-switzerland-longdesc' &&
							props.content !== 'longdesc'
								? heroTitleBg
								: heroTitleBg2
						}
						className={styles.heroTitleBg}
						alt=""
					/>

					{props.notiText && props.notiText !== '' ? (
						<NotiComponent
							notiIcon={props.notiIcon}
							notiText={props.notiText}
							contentType={props.content}
						/>
					) : null}

					{!props.content ||
					props.content === 'description' ||
					props.content === 'longdesc' ? (
						<TitleComponent title={props.title} />
					) : null}
					{props.content === 'locations-switzerland' ? (
						<LocationsSwitzerland title={props.title} />
					) : null}
					{props.content === 'locations-switzerland-desc' ? (
						<LocationsSwitzerlandDesc title={props.title} />
					) : null}
					{props.content === 'locations-switzerland-longdesc' ? (
						<LocationsSwitzerlandLongDesc
							title={props.title}
							longDesc={props.longDesc}
						/>
					) : null}
					{props.content === 'description' ||
					props.content === 'longdesc' ? (
						<DescComponent desc={props.desc} />
					) : null}
				</div>
			</div>
		</div>
	);
}
