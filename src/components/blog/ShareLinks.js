import Facebook from '../../assets//images/blog/facebook.svg'
import X from '../../assets//images/blog/twitterX.svg'
import Instagram from '../../assets//images/blog/instagram.svg'
import Linkedin from '../../assets//images/blog/linkedin.svg'

const getShareLinks = () => {
	if (typeof window === 'undefined') return []

	const currentUrl = encodeURIComponent(window.location.href)
	const pageTitle = encodeURIComponent(document.title)

	return [
		{
			image: Facebook,
			href: `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`,
		},
		{
			image: X,
			href: `https://x.com/intent/tweet?url=${currentUrl}&text=${pageTitle}`,
		},
		{
			image: Instagram,

			href: 'https://www.instagram.com/',
		},
		{
			image: Linkedin,
			href: `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`,
		},
	]
}

export default getShareLinks
