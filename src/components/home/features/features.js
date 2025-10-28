// >> Modules
import styles from './features.module.scss';
import { Typography } from '@mui/material';

import featureIcon1 from 'assets/images/home/features/featureIcon1.svg';
import featureIcon2 from 'assets/images/home/features/featureIcon2.svg';
import featureIcon3 from 'assets/images/home/features/featureIcon3.svg';
import featureIcon4 from 'assets/images/home/features/featureIcon4.svg';
import featureIcon5 from 'assets/images/home/features/featureIcon5.svg';
import featureIcon6 from 'assets/images/home/features/featureIcon6.svg';
import featureRive1 from 'assets/rive/home/numer_1.riv';
import featureRive2 from 'assets/rive/home/numer_2.riv';
import featureRive3 from 'assets/rive/home/numer_3.riv';
import featureRive4 from 'assets/rive/home/numer_4.riv';
import featureRive5 from 'assets/rive/home/numer_5.riv';
import featureRive6 from 'assets/rive/home/numer_6.riv';

// >> Components
import Dots from 'components/overlay/dots/dots';
import OneFeature from './oneFeature/oneFeature';

// >> Script
export default function Features(props) {
	return (
		<div className={styles.section}>
			<div className={styles.inside}>
				<Dots type="home-features1" />
				<Dots type="home-features2" />

				<h2 className={styles.title} data-aos="fade-up">
					Our Features
				</h2>
				<div className={styles.desc} data-aos="fade-up">
					<Typography>
						Anonymity, Uncensored, Security Your one and only
						destination for true offshore hosting services,
					</Typography>
				</div>

				<div className={styles.points}>
					<OneFeature
						type="short"
						number="1"
						icon={featureIcon1}
						rive={featureRive1}
						title="Confidentiality"
						desc="Lorem ipsum dolor sit amet, consectetur adipiscing
							elit."
					/>
					<OneFeature
						type="long"
						number="2"
						icon={featureIcon2}
						rive={featureRive2}
						title="Security"
						desc="Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Quisque et justo eget eros lobortis
							ullamcorper et non leo. Cras et augue at dui
							accumsan mollis vitae in purus."
					/>
					<OneFeature
						type="medium"
						number="3"
						icon={featureIcon3}
						rive={featureRive3}
						title="Fast and reliable"
						desc="Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Quisque et justo eget eros"
					/>
					<OneFeature
						type="medium"
						number="4"
						icon={featureIcon4}
						rive={featureRive4}
						title="Offshore Juridiction"
						desc="Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Quisque et justo eget eros"
					/>
					<OneFeature
						type="long"
						number="5"
						icon={featureIcon5}
						rive={featureRive5}
						title="Premium Support"
						desc="Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Quisque et justo eget eros lobortis
							ullamcorper et non leo. Cras et augue at dui
							accumsan mollis vitae in purus."
					/>
					<OneFeature
						type="short"
						number="6"
						icon={featureIcon6}
						rive={featureRive6}
						title="High availability"
						desc="Lorem ipsum dolor sit amet, consectetur adipiscing
							elit."
					/>
				</div>
			</div>
		</div>
	);
}
