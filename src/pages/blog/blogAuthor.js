import BlogAuthorHeader from 'components/blog/BlogAuthorHeader'
import PostList from 'components/blog/PostList'

function BlogAuthor() {
	return (
		<div>
			<BlogAuthorHeader />
			<main>
				<PostList authorPage />
			</main>
		</div>
	)
}

export default BlogAuthor
