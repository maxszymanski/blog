import styles from './PostList.module.css'
import PostCard from './PostCard'
import CardOne from '../../assets/images/blog/card-one.png'
import CardOneLarge from '../../assets/images/blog/card-one-large.png'
import CardTwoLarge from '../../assets/images/blog/card-two-large.png'
import CardThreeLarge from '../../assets/images/blog/card-three-large.png'
import CardTwo from '../../assets/images/blog/card-two.png'
import CardThree from '../../assets/images/blog/card-three.png'
import LargeCard from './LargeCard'
import ListHeading from './ListHeading'

const largeCard = {
	image: CardOne,
	largeImage: CardOneLarge,
	category: 'Cybersecurity',
	slug: 'why-data-privacy-is-the-new-Competitive-Edge',
	name: 'Why Data Privacy Is the New Competitive Edge',
	created_at: 'Sep 16, 2025 ',
	time: '4 min. read',
	author: 'John John',
	author_slug: 'john-john',
	votes: '30',
	rating: 3,
	author_description: '',
}

export const cards = [
	{
		image: CardOne,
		largeImage: CardOneLarge,
		category: 'Popular',
		slug: 'why-data-privacy-is-the-new-Competitive-Edge',
		name: 'Why Data Privacy Is the New Competitive Edge',
		created_at: 'Sep 16, 2025 ',
		time: '4 min. read',
		author: 'John John',
		author_slug: 'john-john',
		votes: '30',
		rating: 5,
		author_description: '',
	},
	{
		image: CardTwo,
		largeImage: CardTwoLarge,
		category: 'Top stories',
		slug: 'best-vps-hosting',
		name: 'Best VPS hosting – detailed review',
		created_at: 'Sep 16, 2025 ',
		time: '4 min. read',
		author: 'Michael Gary Scott ',
		author_slug: 'michael-gary-scott ',
		votes: '25',
		rating: 5,
		author_description: '',
	},
	{
		image: CardThree,
		largeImage: CardThreeLarge,
		category: 'Cybersecurity',
		slug: 'why-data-privacy-is-the-new-Competitive-Edg',
		name: 'Why Data Privacy Is the New Competitive Edge',
		created_at: 'Sep 16, 2025 ',
		time: '4 min. read',
		author: 'John John',
		author_slug: 'john-john',
		votes: '30',
		rating: 5,
		author_description: '',
	},
	{
		image: CardThree,
		largeImage: CardThreeLarge,
		category: 'Cybersecurity',
		slug: 'why-data-privacy-is-the-new-Competit',
		name: 'Why Data Privacy Is the New Competitive Edge',
		created_at: 'Sep 16, 2025 ',
		time: '4 min. read',
		author: 'John John',
		author_slug: 'john-john',
		votes: '30',
		rating: 5,
		author_description: '',
	},
	{
		image: CardOne,
		largeImage: CardOneLarge,
		category: 'Popular',
		slug: 'why-data-privacy-is-the-new',
		name: 'Why Data Privacy Is the New Competitive Edge',
		created_at: 'Sep 16, 2025 ',
		time: '4 min. read',
		author: 'John John',
		author_slug: 'john-john',
		votes: '30',
		rating: 5,
		author_description: '',
	},
	{
		image: CardTwo,
		largeImage: CardTwoLarge,
		category: 'Top stories',
		slug: 'why-data-privacy-is-the-new-Competitive',
		name: 'Why Data Privacy Is the New Competitive Edge',
		created_at: 'Sep 16, 2025 ',
		time: '4 min. read',
		author: 'John John',
		author_slug: 'john',
		votes: '30',
		rating: 5,
		author_description: '',
	},
]

export const allCards = [largeCard, ...cards]

function PostList({ authorPage = false, selectedCategory, listRef }) {
	const filteredList = cards.filter(card => card.category === selectedCategory)

	const resultList = filteredList.length > 0 ? filteredList : cards

	return (
		<section className="section">
			<div className="inside">
				{!authorPage && <LargeCard card={largeCard} />}
				{authorPage && <ListHeading />}
				<div className={styles.postList} ref={listRef}>
					{resultList.map(card => (
						<PostCard key={card.slug} card={card} />
					))}
				</div>
			</div>
		</section>
	)
}

export default PostList
