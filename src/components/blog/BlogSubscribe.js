import Dots from 'components/overlay/dots/dots'
import styles from './BlogSubscribe.module.css'
import { Typography } from '@mui/material'
import users from '../../assets/images/blog/users.svg'

function BlogSubscribe() {
	return (
		<section className={`section ${styles.subscribeSection}`}>
			<Dots type="blog-subscribe-1" />
			<Dots type="blog-subscribe-2" />
			<div className="inside">
				<div className={styles.subscribeBox} data-aos="fade-up">
					<h2 className="text-center">
						<span className={`text-decorated ${styles.subscribeTitle}`}>Subscribe to </span>{' '}
						<span className={styles.subcribeSubTitle}>our Blog</span>
					</h2>
					<p className={`text-decorated-blog text-center`}>We post fresh content every week.</p>
					<form className={styles.subscribeForm}>
						<input className={styles.subscribeInput} placeholder="Enter your email address" />
						<button
							data-aos="fade-up"
							className={`btn-blog  ${styles.formBtn}`}
							onClick={e => {
								e.preventDefault()
							}}
							type="button"
							disableRipple>
							<Typography>Subscribe</Typography>{' '}
							<img alt="fire icon" width={20} height={20} src={users} className={styles.subscribeIcon} />
						</button>
					</form>
				</div>
			</div>
		</section>
	)
}

export default BlogSubscribe
