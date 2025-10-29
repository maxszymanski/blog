import BlogAuthorHeader from 'components/blog/BlogAuthorHeader'
import PostList from 'components/blog/PostList'
import { allCards } from '../../components/blog/PostList'
import { useParams, useHistory } from 'react-router-dom'
import { useEffect } from 'react'

function BlogAuthor() {
	const { slug } = useParams()
	const history = useHistory()
	const post = allCards.find(card => card.author_slug === slug)

	useEffect(() => {
		if (!post) {
			history.replace('/blog')
		}
	}, [post, history])

	if (!post) return null

	return (
		<div>
			<BlogAuthorHeader card={post} />
			<main>
				<PostList authorPage />
			</main>
		</div>
	)
}

export default BlogAuthor
