import styles from './PostCard.module.css'
import Logo from '../../assets/images/blog/logo.svg'
import Clock from '../../assets/images/blog/clock.svg'
import Fire from '../../assets/images/blog/fire.svg'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
function PostCard({ card }) {
	return (
		<Link className={styles.card} to={`/blog/${card.slug}`} data-aos="fade-up">
			<div className={styles.imageBox}>
				<img src={card.image} alt="data flow" className={styles.cardHero} />
				<div className={styles.btnBox}>
					<p className="btn btn-card ">
						{card.category === 'Popular' && <img alt="fire icon" width={24} height={24} src={Fire} />}
						<Typography>{card.category}</Typography>
					</p>
				</div>
			</div>
			<div className={styles.cardInfo}>
				<p className={` text-decorated ${styles.cardText}`}>{card.name}</p>
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
			</div>
		</Link>
	)
}

export default PostCard
