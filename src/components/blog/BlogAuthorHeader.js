import styles from './BlogSubscribe.module.css'
import Facebook from '../../assets//images/blog/facebook.svg'
import X from '../../assets//images/blog/twitterX.svg'
import Instagram from '../../assets//images/blog/instagram.svg'
import Linkedin from '../../assets//images/blog/linkedin.svg'
import Avatar from '../../assets//images/blog/avatar.png'

const socials = [
	{
		image: Facebook,
		href: 'https://facebook.com',
	},
	{
		image: X,
		href: 'https://x.com',
	},
	{
		image: Instagram,
		href: 'https://instagram.com',
	},
	{
		image: Linkedin,
		href: 'https://linkedin.com',
	},
]

function BlogAuthorHeader({ card }) {
	return (
		<header className="section">
			<div className="inside">
				<div className={styles.authorHeaderBox}>
					<div className={styles.authorAvatarBox} data-aos="fade-right">
						<img src={Avatar} alt="expert avatar" />
					</div>
					<div className={styles.authorBox} data-aos="fade-up">
						<h1 className="text-center">
							<span className={`text-decorated ${styles.authorTitle}`}>{card.author} </span>{' '}
							<span className={styles.authorSubTitle}>Expert</span>
						</h1>

						<p className={`text-decorated-blog`}>
							{' '}
							{card.author_description ||
								'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}{' '}
						</p>
						<div className={styles.authorSocialBox}>
							{socials.map(social => (
								<a
									key={social.href}
									target="_blank"
									rel="noopenner noreferrer"
									href={social.href}
									className={styles.authorSocial}>
									<img className="" src={social.image} alt="social icon" />
								</a>
							))}
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default BlogAuthorHeader
