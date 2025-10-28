// >> Modules
import styles from './torHosting.module.scss';
import { useState } from 'react';

import torHostingIcon from 'assets/images/services/torHosting/torHostingIcon.png';
import whyChooseImg from 'assets/images/services/torHosting/whyChooseImg.png';

import icon_strike from 'assets/icons/icon_strike.svg';
import icon_settings from 'assets/icons/icon_settings.svg';
import icon_web from 'assets/icons/icon_web.svg';
import icon_star from 'assets/icons/icon_star.svg';
import icon_diagram_up2 from 'assets/icons/icon_diagram_up2.svg';

// >> Components
import Nav from 'components/overlay/nav/nav';
import Footer from 'components/overlay/footer/footer';

import Hero from '../global/hero/hero';
import LongList from '../global/longList/longList';
import WhyChoose from '../global/whyChoose/whyChoose';

// >> Script
export default function TorHosting(props) {
	const [whyChooseList] = useState([
		{
			icon: icon_settings,
			title: 'Fully-Loaded Security Suite',
			desc: 'Dive into a pre-installed suite of security tools, saving time and resources on setup and configuration.',
		},
		{
			icon: icon_star,
			title: 'Customizable Workstations',
			desc: 'Tailor your VPS to meet specific project requirements with flexible configurations and dedicated resources.',
		},
		{
			icon: icon_web,
			title: 'Global Access, Zero Compromise',
			desc: 'Connect to your secure workstation from anywhere in the world without sacrificing performance or security.',
		},
		{
			icon: icon_diagram_up2,
			title: 'Seamless Scalability',
			desc: 'Easily scale up as your security needs evolve, with plans designed for all levels of use, from individual researchers to large corporations.',
		},
	]);

	const [longList] = useState([
		{
			icon: icon_strike,
			title: 'Basic',
			desc: 'Basic Hidden Service',
			table: [
				{
					name: 'Onion Address',
					value: '1',
				},
				{
					name: 'CPU Cores',
					value: '2',
				},
				{
					name: 'RAM',
					value: '2GB',
				},
				{
					name: 'Storage',
					value: '30GB SSD',
				},
				{
					name: 'Traffic',
					value: 'Unlimited',
				},
				{
					name: 'Databases',
					value: 'Unlimited',
				},
			],
			perMonth: 30,
		},
		{
			icon: icon_strike,
			title: 'Standard',
			desc: 'Standard Hidden Service',
			table: [
				{
					name: 'Onion Address',
					value: '3',
				},
				{
					name: 'CPU Cores',
					value: '4',
				},
				{
					name: 'RAM',
					value: '4GB',
				},
				{
					name: 'Storage',
					value: '60GB SSD',
				},
				{
					name: 'Traffic',
					value: 'Unlimited',
				},
				{
					name: 'Databases',
					value: 'Unlimited',
				},
			],
			perMonth: 60,
		},
		{
			icon: icon_strike,
			title: 'Premium',
			desc: 'Premium Hidden Service',
			table: [
				{
					name: 'Onion Address',
					value: '5',
				},
				{
					name: 'CPU Cores',
					value: '4',
				},
				{
					name: 'RAM',
					value: '6GB',
				},
				{
					name: 'Storage',
					value: '100GB SSD',
				},
				{
					name: 'Traffic',
					value: 'Unlimited',
				},
				{
					name: 'Databases',
					value: 'Unlimited',
				},
			],
			perMonth: 80,
		},
	]);

	return (
		<div className={styles.page}>
			<Nav page={props.page} />
			<Hero
				icon={torHostingIcon}
				title={'Tor Hidden Hosting'}
				desc={
					'Easily host your site on the Tor network, manage everything with the aaPanel interface and unique .onion domain. Manage Everything on you own control panel. Fully Anonymous Access over Tor.'
				}
				content="description"
				bottomDots={true}
			/>
			<WhyChoose
				title={'Why Choose Our Tor Hidden Hosting?'}
				img={whyChooseImg}
				list={whyChooseList}
			/>
			<LongList list={longList} from="torHosting" descType="orange" />
			<Footer />
		</div>
	);
}
