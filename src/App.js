// >> Modules
// import { AboutUs, HomePage, Launchpad, Layout, Project } from 'pages';
import { Suspense, useEffect } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

// >> Aos
import Aos from 'aos'
import 'aos/dist/aos.css'

// >> Styles
import './styles/variables.scss'
import './styles/fonts.css'
import './styles/globals.scss'

// >> Components
import Home from './components/home/home'
import DedicatedGpuServers from 'components/services/dedicatedGpuServers/dedicatedGpuServers'
import RaisedEndServers from 'components/services/raisedEndServers/raisedEndServers'
import HighEndServers from 'components/services/highEndServers/highEndServers'
import MidEndServers from 'components/services/midEndServers/midEndServers'
import Servers100gbps from 'components/services/servers100gbps/servers100gbps'
import Servers40gbps from 'components/services/servers40gbps/servers40gbps'
import Vpn from 'components/services/vpn/vpn'
import TorHosting from 'components/services/torHosting/torHosting'
import WindowsRdp from 'components/services/windowsRdp/windowsRdp'
import LinuxVps from 'components/services/linuxVps/linuxVps'
import LinuxVpsStorage from 'components/services/linuxVpsStorage/linuxVpsStorage'
import LinuxVpsNvme from 'components/services/linuxVpsNvme/linuxVpsNvme'
import ParrotSecurityVps from 'components/services/parrotSecurityVps/parrotSecurityVps'
import KaliLinuxVps from 'components/services/kaliLinuxVps/kaliLinuxVps'
import Cart from './pages/cart/cart'
import Order from './pages/order/order'
import Affilliate from './pages/affilliate/affilliate'
import Login from './pages/login/login'
import Register from './pages/register/register'
import Contact from './pages/contact/contact'
import Modal from './components/modal/modal'
import { ModalProvider } from './context/ModalContext'
import ResetPassword from './pages/resetPassword/resetPassword'
import Faq from './pages/faq/faq'
import WebHosting from './components/services/webHosting/webHosting'
import Redeem from './pages/redeem/redeem'
import BlogLayout from 'pages/blog/BlogLayout'
import Blog from 'pages/blog/blog'
import BlogPost from 'pages/blog/blogPost'
import BlogAuthor from 'pages/blog/blogAuthor'

// >> Script
const App = () => {
	useEffect(() => {
		Aos.init({ duration: 700, once: true })
	}, [])

	return (
		<div className="base">
			<Router>
				{/* <Layout> */}
				{/* <Suspense fallback={<CircularProgress />}> */}
				<Suspense>
					<Switch>
						{/* MAIN */}
						<Route exact path="/">
							<ModalProvider>
								<Home page="home" />
								<Modal />
							</ModalProvider>
						</Route>

						<Route exact path="/cart">
							<Cart />
						</Route>

						<Route exact path="/order">
							<Order />
						</Route>

						<Route exact path="/affiliate">
							<Affilliate />
						</Route>

						<Route exact path="/contact">
							<Contact />
						</Route>
						<Route exact path="/blog">
							<BlogLayout>
								<Blog />
							</BlogLayout>
						</Route>

						<Route exact path="/blog/:slug">
							<BlogLayout>
								<BlogPost />
							</BlogLayout>
						</Route>

						<Route exact path="/blog/autor/:slug">
							<BlogLayout>
								<BlogAuthor />
							</BlogLayout>
						</Route>

						<Route exact path="/faq">
							<Faq />
						</Route>

						<Route exact path="/login">
							<Login />
						</Route>
						<Route exact path="/register">
							<Register />
						</Route>
						<Route exact path="/forgot-password">
							<ResetPassword />
						</Route>

						<Route exact path="/redeem">
							<Redeem />
						</Route>

						{/* SERVICES */}
						<Route exact path="/services/dedicated-gpu-servers">
							<DedicatedGpuServers page="services" />
						</Route>
						<Route exact path="/services/raised-end-servers">
							<RaisedEndServers page="services" />
						</Route>
						<Route exact path="/services/high-end-servers">
							<HighEndServers page="services" />
						</Route>
						<Route exact path="/services/mid-end-servers">
							<MidEndServers page="services" />
						</Route>
						<Route exact path="/services/100gbps-servers">
							<Servers100gbps page="services" />
						</Route>
						<Route exact path="/services/40gbps-servers">
							<Servers40gbps page="services" />
						</Route>
						<Route exact path="/services/vpn">
							<Vpn page="services" />
						</Route>
						<Route exact path="/services/tor-hosting">
							<TorHosting page="services" />
						</Route>
						<Route exact path="/services/web-hosting">
							<WebHosting page="services" />
						</Route>
						<Route exact path="/services/windows-rdp">
							<WindowsRdp page="services" />
						</Route>
						<Route exact path="/services/linux-vps">
							<LinuxVps page="services" />
						</Route>
						<Route exact path="/services/linux-storage-vps">
							<LinuxVpsStorage page="services" />
						</Route>
						<Route exact path="/services/linux-vps-nvme">
							<LinuxVpsNvme page="services" />
						</Route>
						<Route exact path="/services/parrot-security-vps">
							<ParrotSecurityVps page="services" />
						</Route>
						<Route exact path="/services/kali-linux-vps">
							<KaliLinuxVps page="services" />
						</Route>

						<Redirect to="/" />
					</Switch>
				</Suspense>
				{/* </Layout> */}
			</Router>
		</div>
	)
}

export default App
