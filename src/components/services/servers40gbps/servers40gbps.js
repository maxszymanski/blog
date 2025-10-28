// >> Modules
import styles from './servers40gbps.module.scss';
import { useState } from 'react';

import servers40gbpsIcon from 'assets/images/services/servers-gbps/servers40gbpsIcon.png';

import icon_upload from 'assets/icons/icon_upload.svg';
import icon_folder_diamond from 'assets/icons/icon_folder_diamond.svg';
import icon_settings from 'assets/icons/icon_settings.svg';
import icon_strike from 'assets/icons/icon_strike.svg';

// >> Components
import Nav from 'components/overlay/nav/nav';
import Footer from 'components/overlay/footer/footer';

import Hero from '../global/hero/hero';
import About from '../global/about/about';
import Offer from '../global/offer/offer';

// >> Script
export default function Servers40gbps(props) {
	const [aboutList] = useState({
		row1: [
			{
				icon: icon_folder_diamond,
				text: 'Fully DMCA Ignored',
			},
			{
				icon: icon_settings,
				text: 'Dedicated Bare Metal\nHardware',
			},
			{
				icon: icon_settings,
				text: 'Included 5x IPv4',
			},
		],

		row2: [
			{
				icon: icon_settings,
				text: 'Included Free /\n64 IPV6 Subnet',
			},
			{
				icon: icon_upload,
				text: 'Network Speeds are Guaranteed\nand are NOT “shared” bandwidth',
			},
			{
				icon: icon_settings,
				text: 'IPMI Console Access',
			},
		],
	});

	const [offerList] = useState([
		{
			name: 'System',
			value: 'Bare Metal',
		},
		{
			name: 'CPU',
			value: 'Dual Intel Xeon ® Gold 6134',
		},
		{
			name: 'RAM',
			value: '128 GB DDR4',
		},
		{
			name: 'Storage',
			value: '1TB SSD',
		},
		{
			name: 'Port Speed',
			value: '40 GBPS',
		},
		{
			name: 'Bandwidth',
			value: 'UNMETERED',
		},
		{
			name: 'IPS',
			value: '5 IP /29',
		},
	]);

	return (
		<div className={styles.page}>
			<Nav page={props.page} />
			<Hero
				icon={servers40gbpsIcon}
				title={'40 GBP/S Servers'}
				content="locations-switzerland"
			/>
			<About
				type="2-rows"
				title={'About Our 40 GBP/S Servers'}
				list={aboutList}
			/>
			<Offer
				icon={icon_strike}
				title={'VIVACITY'}
				desc={'40 GBPS Dedicated Server'}
				perMonth={3199}
				list={offerList}
			/>
			<Footer />
		</div>
	);
}
