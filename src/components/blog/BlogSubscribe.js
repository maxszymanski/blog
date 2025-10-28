import Dots from 'components/overlay/dots/dots'
import styles from './BlogSubscribe.module.css'
import { Button, Typography } from '@mui/material'

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
						<Button data-aos="fade-up" className={`btn ${styles.formBtn}`} onClick={() => {}} disableRipple>
							<Typography>Subscribe</Typography>
						</Button>
					</form>
				</div>
			</div>
		</section>
	)
}

export default BlogSubscribe
