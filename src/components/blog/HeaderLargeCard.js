import styles from './PostCard.module.css'
import Logo from '../../assets/images/blog/logo.svg'
import Clock from '../../assets/images/blog/clock.svg'
import Fire from '../../assets/images/blog/fire.svg'
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import Avatar from '../../assets//images/blog/avatar.png'
import Star from '../../assets//images/blog/star.svg'
import EmptyStar from '../../assets//images/blog/empty-star.svg'
import getShareLinks from './ShareLinks'

function HeaderLargeCard({ card }) {
	const links = getShareLinks()

	const totalStars = 5

	return (
		<div>
			<div className={`${styles.largeCardPost} `} data-aos="fade-up">
				<div className={styles.imageBox}>
					<img src={card.largeImage} alt="data flow" className={styles.largeCardHero} />
					<div className={styles.btnLargeBox}>
						<p className="btn btn-card ">
							{card.category === 'Popular' && <img alt="fire icon" width={24} height={24} src={Fire} />}
							<Typography>{card.category}</Typography>
						</p>
					</div>
				</div>
				<p className={` text-decorated ${styles.cardLargePostText}`}>{card.name}</p>
			</div>
			<div className={styles.largePostCardInfo}>
				<div className={styles.cardInfoBoxLarge}>
					<div className={styles.cardLogos}>
						<img alt="company logo" src={Logo} />
						<img alt="author" src={Avatar} className={styles.cardInfoAvatar} />
					</div>
					<div className={styles.cardInfoBoxOneLarge}>
						<p className={styles.cardTeamLarge}>
							PrivateAlps Team{' '}
							<Link to={`/blog/author/${card.author_slug}`} className={` ${styles.authorLink}`}>
								Reviewed by {card.author}
							</Link>{' '}
						</p>
						<div className={`${styles.cardInfoBoxSmall} ${styles.grayText}`}>
							<p>{card.created_at} </p>
							<p className={styles.cardClock}>
								<img src={Clock} alt="clock icon" /> <span>{card.time}</span>
							</p>
						</div>
					</div>
				</div>
				<div className={`${styles.ratingBox} `}>
					<p className={`${styles.grayText}`}>Article Rating</p>
					<div className={`${styles.ratingBoxOne} `}>
						<div className={styles.starsBox}>
							{[...Array(totalStars)].map((_, index) => (
								<img key={index} src={index < card.rating ? Star : EmptyStar} alt="star icon" />
							))}
						</div>
						<p className={`${styles.votesBox} ${styles.grayText}`}>
							{card.rating}/5 <span className={styles.votes}>{card.votes} votes</span>{' '}
						</p>
					</div>
				</div>
				<div className={styles.postSocials}>
					<p className={styles.grayText}>Share Article</p>
					<div className={styles.postSocialBox}>
						{links.map(social => (
							<a
								key={social.href}
								target="_blank"
								rel="noopenner noreferrer"
								href={social.href}
								className={styles.postSocial}>
								<img className="" src={social.image} alt="social icon" />
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default HeaderLargeCard
