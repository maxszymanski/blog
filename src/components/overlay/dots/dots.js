// >> Modules
import { useEffect, useRef } from 'react'
import styles from './dots.module.scss'

function getRandomInt(max) {
	return Math.floor(Math.random() * max)
}

// >> Script
function OneDot(props) {
	return <div className={styles.oneDot} data-type={props.type}></div>
}

export default function Dots(props) {
	const dotsRef = useRef(null)

	useEffect(() => {
		let createRandom = 10 - getRandomInt(7)

		const lightRandomElipse = () => {
			let rand = getRandomInt(dotsRef.current.children.length)
			dotsRef.current.children[rand].dataset.active = 'true'

			setTimeout(() => {
				dotsRef.current.children[rand].dataset.active = 'false'
			}, 2500)
		}

		lightRandomElipse()

		const interval = setInterval(() => {
			;[...Array(createRandom)].map((x, i) => lightRandomElipse())

			createRandom = 10 - getRandomInt(7)
		}, 3000)
		return () => clearInterval(interval)
	}, [dotsRef])

	return (
		<div className={styles.dots} ref={dotsRef} data-type={props.type}>
			{props.type === 'contact' ? (
				<>
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(8)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(8)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(8)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(8)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(16 * 12)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}

					{[...Array(8)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(8)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(8)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(8)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
				</>
			) : null}
			{props.type === 'affiliate-features1' ? (
				<>
					{[...Array(13)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(13)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(13)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(16)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(16)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(16)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(16)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(16)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(13)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(13)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(13)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
				</>
			) : null}
			{props.type === 'affiliate-features2' ? (
				<>
					{[...Array(9)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(9)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(9)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(9)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(9)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(9)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
				</>
			) : null}
			{props.type === 'footer1' ? (
				<>
					{[...Array(18)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(18)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(18)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(18)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
				</>
			) : null}
			{props.type === 'footer2' ? (
				<>
					{[...Array(9)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(9)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(11)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(11)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(11)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(11)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(11)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(11)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(11)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(9)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(9)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
				</>
			) : null}
			{props.type === 'home-hero1' ? (
				<>
					{[...Array(3)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(3)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(3)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(6)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(6)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(6)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(6)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(6)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(6)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(3)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(3)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(3)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
				</>
			) : null}
			{props.type === 'home-hero2' ? (
				<>
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="empty" />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="empty" />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="empty" />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="empty" />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="empty" />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="empty" />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="empty" />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="empty" />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="empty" />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="empty" />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="empty" />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="empty" />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="empty" />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="empty" />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="empty" />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="empty" />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="empty" />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="empty" />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="empty" />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="empty" />
					))}{' '}
					{[...Array(8)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(8)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(8)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(8)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
				</>
			) : null}
			{props.type === 'home-hero3' ? (
				<>
					{[...Array(9)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(9)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(9)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(9)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(9)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(9)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
				</>
			) : null}
			{props.type === 'blog-two' ? (
				<>
					{[...Array(9)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(9)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(9)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(9)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(9)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(9)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
				</>
			) : null}
			{props.type === 'blog-three' ? (
				<>
					{[...Array(9)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(9)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(9)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(9)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(9)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(9)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
				</>
			) : null}
			{props.type === 'blog-one' ? (
				<>
					{[...Array(5)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(5)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(5)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(5)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(5)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
				</>
			) : null}
			{props.type === 'content-one' ? (
				<>
					{[...Array(3)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(3)].map((x, i) => (
						<OneDot type="empty" key={i} />
					))}
					{[...Array(3)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(3)].map((x, i) => (
						<OneDot type="empty" key={i} />
					))}
					{[...Array(3)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(3)].map((x, i) => (
						<OneDot type="empty" key={i} />
					))}
					{[...Array(6)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(6)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(6)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(6)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(6)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(6)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(3)].map((x, i) => (
						<OneDot type="empty" key={i} />
					))}
					{[...Array(3)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(3)].map((x, i) => (
						<OneDot type="empty" key={i} />
					))}
					{[...Array(3)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(3)].map((x, i) => (
						<OneDot type="empty" key={i} />
					))}
					{[...Array(3)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
				</>
			) : null}
			{props.type === 'home-features1' ? (
				<>
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
				</>
			) : null}
			{props.type === 'home-features2' ? (
				<>
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(4)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
				</>
			) : null}
			{props.type === 'home-services1' ? (
				<>
					{[...Array(9)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(9)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(9)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(9)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(9)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(9)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
				</>
			) : null}
			{props.type === 'home-services2' ? (
				<>
					{[...Array(13)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(13)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(13)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(16)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(16)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(16)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(16)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(16)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(13)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(13)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					<OneDot type="empty" />
					<OneDot type="empty" />
					<OneDot type="empty" />
					{[...Array(13)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
				</>
			) : null}

			{props.type === 'services-hero-1' ? (
				<>
					{[...Array(18)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(18)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(18)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(18)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
				</>
			) : null}
			{props.type === 'services-underHeroPoints' ? (
				<>
					{[...Array(18)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(18)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(18)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(18)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
				</>
			) : null}
			{props.type === 'services-keyAdvantages-1' ? (
				<>
					{[...Array(18)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(18)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(18)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(18)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
				</>
			) : null}
			{props.type === 'services-keyAdvantages-2' ? (
				<>
					{[...Array(10)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(10)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(10)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
				</>
			) : null}
			{props.type === 'services-usedFor-1' ? (
				<>
					{[...Array(18)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(18)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(18)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(18)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
				</>
			) : null}
			{props.type === 'services-usedFor-2' ? (
				<>
					{[...Array(5)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(5)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(5)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(5)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(5)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(5)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(5)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(5)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(5)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
				</>
			) : null}
			{props.type === 'services-whyChoose-1' ? (
				<>
					{[...Array(18)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(18)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(18)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(18)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
				</>
			) : null}
			{props.type === 'services-whyChoose-2' ? (
				<>
					{[...Array(5)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(5)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(5)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(5)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(5)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(5)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(5)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(5)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(5)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
				</>
			) : null}
			{props.type === 'services-useCases-1' ? (
				<>
					{[...Array(18)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(18)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(18)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(18)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
				</>
			) : null}
			{props.type === 'blog-subscribe-1' ? (
				<>
					{[...Array(18)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(18)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(18)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(18)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
				</>
			) : null}
			{props.type === 'blog-subscribe-2' ? (
				<>
					{[...Array(18)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(18)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(18)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(18)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
				</>
			) : null}
			{props.type === 'services-about-1' ? (
				<>
					{[...Array(5)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(5)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(5)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(5)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(5)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(5)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(5)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(5)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(5)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(5)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(5)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(5)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(5)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(5)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(5)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
				</>
			) : null}
			{props.type === 'services-about-2' ? (
				<>
					{[...Array(5)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(5)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(5)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(5)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(5)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(5)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(5)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(5)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(5)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(5)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(5)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(5)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(5)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(5)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(5)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
				</>
			) : null}
			{props.type === 'services-about-3' ? (
				<>
					{[...Array(18)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(18)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(18)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
					{[...Array(18)].map((x, i) => (
						<OneDot type="normal" key={i} />
					))}
				</>
			) : null}
		</div>
	)
}
