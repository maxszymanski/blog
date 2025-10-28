import { Typography } from '@mui/material'
import styles from './PostList.module.css'
import { Link } from 'react-router-dom'
import arrow_right from '../../assets/icons/arrow_right.svg'

function ListHeading() {
	return (
		<div className={styles.headingBox}>
			<h2 className={'title text-center'} data-aos="fade-up">
				Latest from the Blog
			</h2>
			<Link to="/blog" data-aos="fade-up" className={`btn btn-blog `}>
				<Typography>Show more</Typography>
				<img alt="fire icon" width={24} height={24} src={arrow_right} />
			</Link>
		</div>
	)
}

export default ListHeading
