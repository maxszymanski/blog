import { Typography } from '@mui/material'
import styles from './PostList.module.css'
import Dots from 'components/overlay/dots/dots'
import { Link } from 'react-router-dom'
import arrow_right from '../../assets/icons/arrow_right.svg'
import PostCard from './PostCard'

import { cards } from './PostList'

function ArticleSection() {
	return (
		<section className={`section  ${styles.articleSection}`}>
			<div className="inside  ">
				<Dots type="blog-two" />

				<Dots type="blog-three" />

				<div
					style={{ maxWidth: '560px' }}
					className={'text-center flex flex-col gap-6 justify-center w-full mx-auto relative  '}>
					<h2 className={'title text-center'} data-aos="fade-up">
						Latest from the Blog
					</h2>
					<p className="text-decorated-blog " data-aos="fade-up">
						Insights, updates, and stories from the world of privacy-first automation.
					</p>
				</div>
				<div className={styles.articleLinkBox}>
					<Link to="/blog" data-aos="fade-up" className={`btn btn-blog `}>
						<Typography>Show more</Typography>
						<img alt="fire icon" width={24} height={24} src={arrow_right} />
					</Link>
				</div>

				<div className={styles.postList} data-aos="fade-up">
					{cards.slice(0, 3).map(card => (
						<PostCard key={card.slug} card={card} />
					))}
				</div>
			</div>
		</section>
	)
}

export default ArticleSection
