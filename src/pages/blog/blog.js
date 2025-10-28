import PostList from 'components/blog/PostList'
import BlogHeader from '../../components/blog/BlogHeader'

function Blog() {
	return (
		<div>
			<BlogHeader />
			<main>
				<PostList />
			</main>
		</div>
	)
}

export default Blog
