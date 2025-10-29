import PostList from 'components/blog/PostList'
import BlogHeader from '../../components/blog/BlogHeader'
import { useRef, useState } from 'react'

function Blog() {
	const [selectedCategory, setSelectedCategory] = useState(null)
	const listRef = useRef(null)
	return (
		<div>
			<BlogHeader setSelectedCategory={setSelectedCategory} listRef={listRef} />
			<main>
				<PostList selectedCategory={selectedCategory} listRef={listRef} />
			</main>
		</div>
	)
}

export default Blog
