import styles from './PostCard.module.scss'

import Fire from '../../assets/images/blog/fire.svg'
import { Typography } from '@mui/material'

function HeaderPostCard({ card }) {
	return (
		<div className={`${styles.card} ${styles.mobile}`} data-aos="fade-up">
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
			</div>
		</div>
	)
}

export default HeaderPostCard
