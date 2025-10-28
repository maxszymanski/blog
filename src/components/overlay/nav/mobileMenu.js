import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Button, Typography } from '@mui/material'
import styles from './nav.module.scss'
import mobileStyles from './mobileMenu.module.scss'
import telegram from '../../../assets/icons/telegram.svg'
import tor from '../../../assets/icons/tor.svg'
import classNames from 'classnames'
import { menuData } from './menuData'
import arrow from '../../../assets/icons/arrow_right.svg'

export default function MobileMenu(props) {
	const history = useHistory()
	const [currentView, setCurrentView] = useState(0)
	const [viewData, setViewData] = useState({
		name: '',
		description: '',
		data: null,
	})

	if (currentView === 2) {
		return (
			<div className={classNames(styles.center, { [styles.active]: props.active })}>
				<div
					className={mobileStyles.mobile__back__container}
					onClick={() => {
						setCurrentView(1)
					}}>
					<img src={arrow} alt="" />
					<div>
						<div className={mobileStyles.mobile__back + ' text-decorated'}>{viewData.name}</div>
						<span className={'text-decorated mt-2 opacity-75'}>{viewData.description}</span>
					</div>
				</div>
				{viewData.data &&
					viewData.data.map((item, index) => (
						<Link to={item.link} className={styles.megamenuOneOption} key={index}>
							<p className={'text-decorated'} dangerouslySetInnerHTML={{ __html: item.text }}></p>
							{item.mobileBackground && (
								<div
									className={styles.megamenuBackground}
									dangerouslySetInnerHTML={{ __html: item.mobileBackground }}></div>
							)}
						</Link>
					))}

				<Button className={styles.loginBtn + ' ' + styles.showOnMobile} disableRipple>
					<Typography>Log in</Typography>
				</Button>
			</div>
		)
	}

	if (currentView === 1) {
		return (
			<div className={classNames(styles.center, { [styles.active]: props.active })}>
				<div
					className={mobileStyles.mobile__back__container}
					onClick={() => {
						setCurrentView(0)
					}}>
					<img src={arrow} alt="" />
					<div className={mobileStyles.mobile__back + ' text-decorated'}>Menu</div>
				</div>
				{menuData.map((item, index) => (
					<div
						onClick={() => {
							setCurrentView(2)
							setViewData({
								name: item.title,
								description: item.description,
								data: item.details,
							})
						}}
						className={styles.oneTab}
						data-active={props.page === item.page}>
						<img src={item.icon} alt={item.title} />
						<div className={mobileStyles.mobile__link}>
							<span className={mobileStyles.mobile__name + ' text-decorated'}>{item.title}</span>
							<span className={mobileStyles.mobile__description + ' text-decorated'}>
								{item.description}
							</span>
						</div>
						<img src={arrow} style={{ margin: 'auto 0 auto auto' }} alt="" />
					</div>
				))}

				<Button className={styles.loginBtn + ' ' + styles.showOnMobile} disableRipple>
					<Typography>Log in</Typography>
				</Button>
			</div>
		)
	}
	return (
		<div className={classNames(styles.center, { [styles.active]: props.active })}>
			<Link to="/" className={styles.oneTab} data-active={props.page === 'home'}>
				<Typography>Home</Typography>
			</Link>
			<li
				className={styles.parent + ' ' + styles.oneTab}
				onClick={() => {
					setCurrentView(1)
				}}>
				<Typography>Services</Typography>
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
			<a href="https://t.me/privatealpsnews" target="_blank" rel="noreferrer" className={styles.oneTab}>
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
		</div>
	)
}
