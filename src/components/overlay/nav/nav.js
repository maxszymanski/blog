// `src/components/overlay/nav/nav.js`
import styles from './nav.module.scss'
import { Button, Typography } from '@mui/material'
import { Link, useHistory } from 'react-router-dom'
import logo from 'assets/logo.png'
import tor from 'assets/icons/tor.svg'
import telegram from 'assets/icons/telegram.svg'
import arrow from '../../../assets/icons/arrow_right.svg'
import { useEffect, useState } from 'react'
import classNames from 'classnames'
import MobileMenu from './mobileMenu'
import { menuData } from './menuData'

export default function Nav(props) {
	const history = useHistory()
	const [openMenu, setOpenMenu] = useState(false)
	const [isMobile, setIsMobile] = useState(window.innerWidth < 560)

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 560)
		}

		window.addEventListener('resize', handleResize)

		// Cleanup the event listener when the component is unmounted
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return (
		<div className={styles.section} data-aos="fade-down">
			<div className={classNames(styles.inside, { [styles.active]: openMenu })}>
				<Link to="/" className={styles.left} data-aos="fade-right">
					<img src={logo} className={styles.logo} alt="PrivateAlps" />
				</Link>
				{isMobile && <MobileMenu page={props.page} active={openMenu} />}
				{!isMobile && (
					<div className={classNames(styles.center, { [styles.active]: openMenu })}>
						<Link to="/" className={styles.oneTab} data-active={props.page === 'home'}>
							<Typography>Home</Typography>
						</Link>
						<li className={styles.parent + ' ' + styles.oneTab}>
							<Typography>Services</Typography>
							<MegaMenu />
						</li>
						<Link to="/affiliate" className={styles.oneTab} data-active={props.page === 'affiliate'}>
							<Typography>Affiliate</Typography>
						</Link>
						<Link to="/faq" className={styles.oneTab} data-active={props.page === 'faq'}>
							<Typography>FAQ</Typography>
						</Link>
						<Link to="/contact" className={styles.oneTab} data-active={props.page === 'contact'}>
							<Typography>Contact</Typography>
						</Link>
						<Link to="/blog" className={styles.oneTab} data-active={props.page === 'blog'}>
							<Typography>Blog</Typography>
						</Link>
						<a
							href="https://t.me/privatealpsnews"
							target="_blank"
							rel="noreferrer"
							className={styles.oneTab}>
							<img src={telegram} alt="" />
							<Typography>Telegram</Typography>
						</a>
						<a
							href="http://4wfsdhkbrdt6jwlozcmw2lzthoghgdrt3pty2vfre2ysdguvpazwfjad.onion/"
							target="_blank"
							rel="noreferrer"
							className={styles.oneTab}>
							<img src={tor} alt="" />
							<Typography>Tor Mirror</Typography>
						</a>
						<Button
							className={styles.loginBtn + ' ' + styles.showOnMobile}
							onClick={() => history.push('/login')}
							disableRipple>
							<Typography>Log in</Typography>
						</Button>
						{!isMobile && (
							<Button
								className={styles.cartBtn + ' ' + styles.showOnMobile}
								onClick={() => history.push('/cart')}
								disableRipple>
								<Typography>Cart (0)</Typography>
							</Button>
						)}
					</div>
				)}
				<div className={styles.right} data-aos="fade-left">
					{isMobile && (
						<Button
							className={styles.cartBtn + ' ' + styles.showOnMobile}
							onClick={() => history.push('/cart')}
							disableRipple>
							<Typography>Cart (0)</Typography>
						</Button>
					)}
					<div
						className={styles.menuBtn + ' ' + (openMenu ? styles.active : '')}
						onClick={() => setOpenMenu(!openMenu)}>
						<span></span>
					</div>
					<Button
						className={styles.loginBtn + ' ' + styles.hideOnMobile}
						onClick={() => history.push('/login')}
						disableRipple>
						<Typography>Log in</Typography>
					</Button>
					<Button
						className={styles.cartBtn + ' ' + styles.hideOnMobile}
						onClick={() => history.push('/cart')}
						disableRipple>
						<Typography>Cart (0)</Typography>
					</Button>
				</div>
			</div>
		</div>
	)
}
const MegaMenu = () => {
	const [menuContent, setMenuContent] = useState(0)

	const handleMouseEnter = index => {
		setMenuContent(index)
	}

	return (
		<div className={styles.megamenu + ' megamenu__wrapper gap-8'}>
			<ul>
				{menuData.map((item, index) => (
					<Link to={item.link} onMouseEnter={() => handleMouseEnter(index)} key={index}>
						<img src={item.icon} alt="" />
						<div>
							<p>
								<b>{item.title}</b>
							</p>
							<p>{item.description}</p>
						</div>
						<img src={arrow} alt="" className={'ml-auto'} />
					</Link>
				))}
			</ul>
			<div className={styles.megamenuOptions}>
				{menuData[menuContent].details.map((detail, index) => (
					<Link to={detail.link} className={styles.megamenuOneOption + ' flex-1'} key={index}>
						<div
							className={styles.megamenuBackground}
							dangerouslySetInnerHTML={{ __html: detail.background }}></div>
						<p className={'text-decorated'} dangerouslySetInnerHTML={{ __html: detail.text }}></p>
					</Link>
				))}
			</div>
		</div>
	)
}
