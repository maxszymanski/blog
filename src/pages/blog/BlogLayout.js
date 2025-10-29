import BlogSubscribe from 'components/blog/BlogSubscribe'
import ScrollToTop from 'components/blog/ScrollToTop'
import Footer from 'components/overlay/footer/footer'
import Nav from 'components/overlay/nav/nav'

function BlogLayout({ children }) {
	return (
		<div>
			<ScrollToTop />
			<Nav page="blog" />
			{children}
			<BlogSubscribe />
			<Footer />
		</div>
	)
}

export default BlogLayout
