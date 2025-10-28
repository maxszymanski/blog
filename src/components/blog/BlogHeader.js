import { Button, Typography } from '@mui/material'
import { useState } from 'react'
import styles from './BlogHeader.module.css'
import Dots from 'components/overlay/dots/dots'

const categories = ['Popular', 'Web hosting', 'VPN', 'Cybersecurity', 'Engineering', 'Product Updates', 'Top stories']

function BlogHeader() {
	const [selectedCategory, setSelectedCategory] = useState(null)

	return (
		<header className="section">
			<div className="inside pb-6 ">
				<Dots type="blog-one" />

				<Dots type="blog-two" />

				<div
					style={{ maxWidth: '560px' }}
					className={'text-center flex flex-col gap-6 justify-center w-full mx-auto relative  '}>
					<h2 className={'title text-center'} data-aos="fade-up">
						Latest from the Blog
					</h2>
					<p className="text-decorated-blog " data-aos="fade-up">
						Insights, updates, and stories from the world of privacy-first automation.
					</p>
				</div>
				<div className={styles.btnsBox}>
					{categories.map((category, idx) => (
						<Button
							key={category}
							data-aos="fade-up"
							className={`btn btn-blog `}
							onClick={() => {
								setSelectedCategory(category)
							}}
							disableRipple>
							<Typography>{category}</Typography>
						</Button>
					))}
				</div>
			</div>
		</header>
	)
}

export default BlogHeader
