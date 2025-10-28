// >> Modules
import styles from './hero.module.scss';
import { Button, Typography } from '@mui/material';
import { useState } from 'react';

// import heroBg from 'assets/images/home/heroBg.png';
// import heroBgLines from 'assets/images/home/heroBgLines.png';
import empty from 'assets/images/cryptoIcons/empty.svg';
import btc_blue from 'assets/images/cryptoIcons/btc_blue.svg';
import btc_green from 'assets/images/cryptoIcons/btc_green.svg';
import doge from 'assets/images/cryptoIcons/doge.svg';
import eth from 'assets/images/cryptoIcons/eth.svg';
import ltc from 'assets/images/cryptoIcons/ltc.svg';
import usdt from 'assets/images/cryptoIcons/usdt.svg';
import arrow_right from 'assets/icons/arrow_right.svg';

import bgShadow from 'assets/images/home/hero/bgShadow.png';
import animShadow from 'assets/images/home/hero/animShadow.png';
import triangle from 'assets/images/home/hero/triangle.png';

// >> Components
import Dots from 'components/overlay/dots/dots';

// >> Script
export default function Hero(props) {
	const [hoveredBtn, setHoveredBtn] = useState(false);

	return (
		<div className={styles.section}>
			<div className={styles.inside}>
				<Dots type="home-hero1" />
				<Dots type="home-hero2" />
				<Dots type="home-hero3" />
				<div className={styles.heroBg} data-aos="zoom-in">
					<img src={bgShadow} className={styles.bgShadow} alt="" />
					<img
						src={animShadow}
						className={styles.animShadow}
						alt=""
					/>
					<img
						src={animShadow}
						className={styles.animShadow2}
						alt=""
						data-hovered={hoveredBtn}
					/>
					<img src={triangle} className={styles.triangle} alt="" />
				</div>

				<div className={styles.mainText}>
					<div className={styles.cryptos} data-aos="fade-left">
						<div className={styles.oneCrypto}>
							<img
								src={empty}
								className={styles.cryptoLogo}
								alt=""
							/>
						</div>
						<div className={styles.oneCrypto}>
							<img
								src={btc_blue}
								className={styles.cryptoLogo}
								alt="BTC Blue"
							/>
						</div>
						<div className={styles.oneCrypto}>
							<img
								src={eth}
								className={styles.cryptoLogo}
								alt="ETH"
							/>
						</div>
						<div className={styles.oneCrypto}>
							<img
								src={ltc}
								className={styles.cryptoLogo}
								alt="LTC"
							/>
						</div>
						<div className={styles.oneCrypto}>
							<img
								src={empty}
								className={styles.cryptoLogo}
								alt=""
							/>
						</div>
						<div className={styles.oneCrypto} data-visible="false">
							<img
								src={empty}
								className={styles.cryptoLogo}
								alt=""
							/>
						</div>
						<div className={styles.oneCrypto} data-visible="false">
							<img
								src={empty}
								className={styles.cryptoLogo}
								alt=""
							/>
						</div>
						<div className={styles.oneCrypto}>
							<img
								src={empty}
								className={styles.cryptoLogo}
								alt=""
							/>
						</div>
						<div className={styles.oneCrypto}>
							<img
								src={usdt}
								className={styles.cryptoLogo}
								alt="USDT"
							/>
						</div>
						<div className={styles.oneCrypto}>
							<img
								src={btc_green}
								className={styles.cryptoLogo}
								alt="BTC Green"
							/>
						</div>
						<div className={styles.oneCrypto}>
							<img
								src={empty}
								className={styles.cryptoLogo}
								alt=""
							/>
						</div>
						<div className={styles.oneCrypto}>
							<img
								src={doge}
								className={styles.cryptoLogo}
								alt="DOGE"
							/>
						</div>
					</div>
					<h1 className={styles.topText} data-aos="fade-right">
						Your Privacy,
					</h1>
					<h1 className={styles.bottomText} data-aos="fade-left">
						Our Priority
					</h1>
					<Typography className={styles.desc} data-aos="fade-right">
						Anonymity, Uncensored, Security Your one and only
						destination for true offshore hosting services, powered
						by an ethical team of professionals
					</Typography>
				</div>

				<div className={styles.bottomBtn} data-aos="fade-up">
					<Button
						className={styles.btn}
						onClick={() => {
							// Check Our Services
						}}
						onMouseEnter={() => {
							setHoveredBtn(true);
						}}
						onMouseLeave={() => {
							setHoveredBtn(false);
						}}
						disableRipple
					>
						<Typography>Check Our Services</Typography>
						<img src={arrow_right} alt="" />
					</Button>
				</div>
			</div>
		</div>
	);
}
