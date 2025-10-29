import BlogPostContent from 'components/blog/BlogPostContent'
import BlogPostHeader from 'components/blog/BlogPostHeader'
import PostMorePost from 'components/blog/PostMorePost'
import { allCards } from '../../components/blog/PostList'
import { useParams, useHistory } from 'react-router-dom'
import { useEffect } from 'react'

function BlogPost() {
	const { slug } = useParams()
	const history = useHistory()
	const post = allCards.find(card => card.slug === slug)

	useEffect(() => {
		if (!post) {
			history.replace('/blog')
		}
	}, [post, history])

	if (!post) return null

	return (
		<div>
			<BlogPostHeader card={post} />
			<main>
				<BlogPostContent />
				<PostMorePost />
			</main>
		</div>
	)
}

export default BlogPost
