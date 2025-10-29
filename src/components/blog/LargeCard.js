import { Link } from 'react-router-dom'
import styles from './PostCard.module.scss'
import Fire from '../../assets/images/blog/fire.svg'
import { Typography } from '@mui/material'
import Clock from '../../assets/images/blog/clock.svg'
import Logo from '../../assets/images/blog/logo.svg'
import arrow_right from '../../assets/icons/arrow_right.svg'

function LargeCard({ card }) {
	return (
		<Link to={`/blog/${card.slug}`} className={styles.largeCard} data-aos="fade-right">
			<p className="btn btn-card ">
				{card.category === 'Popular' && <img alt="fire icon" width={24} height={24} src={Fire} />}
				<Typography>{card.category}</Typography>
			</p>
			<p className={` text-decorated  ${styles.cardLargeText}`}>{card.name}</p>
			<div className={styles.cardLine}></div>
			<div className={styles.cardInfoBox}>
				<img alt="company logo" src={Logo} />
				<div className={styles.cardInfoBoxOne}>
					<p className={styles.cardTeam}>PrivateAlps Team</p>
					<div className={`${styles.cardInfoBoxSmall} ${styles.grayText}`}>
						<p>{card.created_at} </p>
						<p className={styles.cardClock}>
							<img src={Clock} alt="clock icon" /> <span>{card.time}</span>
						</p>
					</div>
				</div>
			</div>
			<div className={styles.bottomBtn}>
				<p className={styles.btn}>
					<Typography>View more</Typography>
					<img src={arrow_right} alt="" />
				</p>
			</div>
		</Link>
	)
}

export default LargeCard
