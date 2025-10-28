import styles from './PostList.module.css'
import PostCard from './PostCard'
import CardOne from '../../assets/images/blog/card-one.png'
import CardTwo from '../../assets/images/blog/card-two.png'
import CardThree from '../../assets/images/blog/card-three.png'
import LargeCard from './LargeCard'
import ListHeading from './ListHeading'

const largeCard = {
	image: CardOne,
	category: 'Cybersecurity',
	slug: 'why-data-privacy-is-the-new-Competitive-Edge',
	name: 'Why Data Privacy Is the New Competitive Edge',
	created_at: 'Sep 16, 2025 ',
	time: '4 min. read',
}

export const cards = [
	{
		image: CardOne,
		category: 'Popular',
		slug: 'why-data-privacy-is-the-new-Competitive-Edge',
		name: 'Why Data Privacy Is the New Competitive Edge',
		created_at: 'Sep 16, 2025 ',
		time: '4 min. read',
	},
	{
		image: CardTwo,
		category: 'Top stories',
		slug: 'why-data-privacy',
		name: 'Why Data Privacy Is the New Competitive Edge',
		created_at: 'Sep 16, 2025 ',
		time: '4 min. read',
	},
	{
		image: CardThree,
		category: 'Cybersecurity',
		slug: 'why-data-privacy-is-the-new-Competitive-Edg',
		name: 'Why Data Privacy Is the New Competitive Edge',
		created_at: 'Sep 16, 2025 ',
		time: '4 min. read',
	},
	{
		image: CardThree,
		category: 'Cybersecurity',
		slug: 'why-data-privacy-is-the-new-Competit',
		name: 'Why Data Privacy Is the New Competitive Edge',
		created_at: 'Sep 16, 2025 ',
		time: '4 min. read',
	},
	{
		image: CardOne,
		category: 'Popular',
		slug: 'why-data-privacy-is-the-new',
		name: 'Why Data Privacy Is the New Competitive Edge',
		created_at: 'Sep 16, 2025 ',
		time: '4 min. read',
	},
	{
		image: CardTwo,
		category: 'Top stories',
		slug: 'why-data-privacy-is-the-new-Competitive',
		name: 'Why Data Privacy Is the New Competitive Edge',
		created_at: 'Sep 16, 2025 ',
		time: '4 min. read',
	},
]

function PostList({ authorPage = false }) {
	return (
		<section className="section">
			<div className="inside">
				{!authorPage && <LargeCard card={largeCard} />}
				{authorPage && <ListHeading />}
				<div className={styles.postList}>
					{cards.map(card => (
						<PostCard key={card.slug} card={card} />
					))}
				</div>
			</div>
		</section>
	)
}

export default PostList
