import Dots from 'components/overlay/dots/dots'
import styles from './BlogSubscribe.module.css'
import { cards } from './PostList'
import PostCard from './PostCard'

function PostMorePost() {
	return (
		<section className={`section ${styles.postsSection}`}>
			<Dots type="blog-subscribe-1" />
			<div className="inside">
				<div className={styles.postList}>
					{cards.slice(0, 3).map(card => (
						<PostCard key={card.slug} card={card} />
					))}
				</div>
			</div>
		</section>
	)
}

export default PostMorePost
