import BlogSubscribe from 'components/blog/BlogSubscribe'
import Footer from 'components/overlay/footer/footer'
import Nav from 'components/overlay/nav/nav'

function BlogLayout({ children }) {
	return (
		<div>
			<Nav page="blog" />
			{children}
			<BlogSubscribe />
			<Footer />
		</div>
	)
}

export default BlogLayout
