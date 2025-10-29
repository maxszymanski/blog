import styles from './BlogFaq.module.scss'
import arrowIcon from '../../assets/icons/faq_arrow.svg'
import { useState } from 'react'

const faqData = [
	[
		'Why Data Privacy Is the New Competitive Edge',
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem consequatur dolore eius esse et fuga illo iure modi non, odit perferendis praesentium quo, sed tempora ullam voluptates? Amet cupiditate error esse explicabo libero maxime saepe sint sit? Accusantium aspernatur at consectetur dicta ducimus nihil praesentium quaerat quidem ratione tenetur. Adipisci, suscipit.',
	],
	[
		'Lobortis egestas odio pharetra enim ut',
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem consequatur dolore eius esse et fuga illo iure modi non, odit perferendis praesentium quo, sed tempora ullam voluptates? Amet cupiditate error esse explicabo libero maxime saepe sint sit? Accusantium aspernatur at consectetur dicta ducimus nihil praesentium quaerat quidem ratione tenetur. Adipisci, suscipit.',
	],
	[
		'Lobortis egestas odio pharetra enim ut',
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem consequatur dolore eius esse et fuga illo iure modi non, odit perferendis praesentium quo, sed tempora ullam voluptates? Amet cupiditate error esse explicabo libero maxime saepe sint sit? Accusantium aspernatur at consectetur dicta ducimus nihil praesentium quaerat quidem ratione tenetur. Adipisci, suscipit.',
	],
]

function BlogFaq() {
	const [activeFaq, setActiveFaq] = useState(null)
	return (
		<div className="">
			<h2 className={`${styles.faq__title} text-decorated`}>FAQ</h2>

			<div className={styles.faq__list}>
				{faqData.map((item, key) => {
					return (
						<div
							onClick={() => {
								setActiveFaq(key)
							}}
							key={key}
							className={styles.faq__item + ' ' + (activeFaq === key && styles.active)}>
							<div className={styles.faq__question}>
								<p className={'text-decorated'}>{item[0]}</p>
								<img src={arrowIcon} alt="" />
							</div>
							<p className={styles.faq__answer}>{item[1]}</p>
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default BlogFaq
