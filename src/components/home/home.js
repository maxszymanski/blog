// >> Modules
import styles from './home.module.scss'

// >> Components
import Nav from 'components/overlay/nav/nav'
import Footer from 'components/overlay/footer/footer'
import Hero from './hero/hero'
import Features from './features/features'
import Services from './services/services'
import About from './about/about'
import Partnerships from './partnerships/partnerships'
import ArticleSection from 'components/blog/ArticleSection'

// >> Script
export default function Home(props) {
	return (
		<div className={styles.page}>
			<Nav page={props.page} />
			<Hero />
			<Partnerships />
			<Features />
			<About />
			<ArticleSection />
			<Services />
			<Footer />
		</div>
	)
}
