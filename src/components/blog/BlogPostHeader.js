import styles from './PostCard.module.css'
import HeaderPostCard from './HeaderPostCard'
import HeaderLargeCard from './HeaderLargeCard'

function BlogPostHeader({ card }) {
	return (
		<header className="section">
			<div className="inside">
				<div className={styles.postHeaderBox}>
					<HeaderPostCard card={card} />
					<HeaderLargeCard card={card} />
				</div>
			</div>
		</header>
	)
}

export default BlogPostHeader
