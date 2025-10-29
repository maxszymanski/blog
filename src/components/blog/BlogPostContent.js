import styles from './BlogPostContent.module.css'
import ContentImage from '../../assets/images/blog/content-image.png'
import BlogFaq from './BlogFaq'
import { Link } from 'react-router-dom'
import Dots from 'components/overlay/dots/dots'

const links = [
	{ name: 'Best VPS hosting – detailed review', slug: 'best-vps-hosting' },
	{ name: 'How does semaglutide nasal spray work?', slug: 'best-vps-hosting' },
	{ name: 'Best VPS hosting – detailed review', slug: 'best-vps-hostings' },
]

function BlogPostContent() {
	return (
		<section className="section">
			<div className={`inside ${styles.container}`}>
				<Dots type="content-one" />
				<div className={styles.tableBox}>
					<h3 className={styles.tableTitle}>Table of contents</h3>

					<div className={styles.tableLinkList}>
						{links.map(link => (
							<Link to={link.slug} key={link.slug} className={styles.tableLink}>
								{link.name}
							</Link>
						))}
					</div>
				</div>
				<div className={styles.contentBox}>
					<p className={`text-decorated ${styles.subtitle}`}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>

					<h3 className={`text-decorated ${styles.title}`}>
						Network file storage (NFS) for high-performance AI workloads
					</h3>
					<p className={`text-decorated ${styles.subtitle}`}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
					<div className={styles.contentImageBox}>
						<img src={ContentImage} alt="blog security" className={styles.contentImage} />
					</div>
					<h3 className={`text-decorated ${styles.title}`}>H3 - PrivateAlps</h3>
					<p className={`text-decorated ${styles.subtitle}`}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
					<h3 className={`text-decorated ${styles.title}`}>H3 - PrivateAlps</h3>
					<p className={`text-decorated ${styles.subtitle}`}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
					</p>
					<BlogFaq />
				</div>
			</div>
		</section>
	)
}

export default BlogPostContent
