// >> Modules
import styles from './raisedEndServers.module.scss';
import { useState } from 'react';

import raisedEndServersIcon from 'assets/images/services/end-servers/raisedEndServersIcon.png';

import icon_chip from 'assets/icons/icon_chip.svg';
import icon_shield from 'assets/icons/icon_shield.svg';
import icon_folder_diamond from 'assets/icons/icon_folder_diamond.svg';
import icon_lock from 'assets/icons/icon_lock.svg';
import icon_user from 'assets/icons/icon_user.svg';
import icon_settings from 'assets/icons/icon_settings.svg';
import icon_strike from 'assets/icons/icon_strike.svg';

// >> Components
import Nav from 'components/overlay/nav/nav';
import Footer from 'components/overlay/footer/footer';

import Hero from '../global/hero/hero';
import About from '../global/about/about';
import ShortList from '../global/shortList/shortList';

// >> Script
export default function RaisedEndServers(props) {
	const [aboutList] = useState({
		row1: [
			{
				icon: icon_folder_diamond,
				text: 'Fully DMCA Ignored',
			},
			{
				icon: icon_lock,
				text: 'Dedicated Bare Metal\nHardware',
			},
		],

		row2: [
			{
				icon: icon_settings,
				text: 'Included 5x IPv4',
			},
			{
				icon: icon_shield,
				text: 'Included Free /\n64 IPV6 Subnet',
			},
			{
				icon: icon_settings,
				text: 'IPMI Console Access',
			},
		],

		row3: [
			{
				icon: icon_chip,
				text: 'Delivery Delay are from 1 to 5 business\ndays depending on the current stock',
			},
			{
				icon: icon_user,
				text: 'Network Speeds are Guaranteed and\nare NOT “shared” bandwidth',
			},
		],
	});
	const [shortList] = useState([
		{
			icon: icon_strike,
			title: 'Raised End V1',
			desc: 'Raised End V1\nDedicated Server',
			table: [
				{
					name: 'System',
					value: 'Bare Metal',
				},
				{
					name: 'CPU',
					value: 'Dual Intel Xeon® Gold 6134',
				},
				{
					name: 'RAM',
					value: '64GB DDR4',
				},
				{
					name: 'Storage',
					value: '1TB SSD',
				},
				{
					name: 'Port Speed',
					value: '1 Gbit/s',
				},
				{
					name: 'Bandwidth',
					value: '20TB',
				},
				{
					name: 'IP(s)',
					value: '5 IP /29',
				},
			],
			perMonth: 559,
		},
		{
			icon: icon_strike,
			title: 'Raised End V2',
			desc: 'Raised End V2\nDedicated Server',
			table: [
				{
					name: 'System',
					value: 'Bare Metal',
				},
				{
					name: 'CPU',
					value: 'Dual Intel Xeon® Gold 6134',
				},
				{
					name: 'RAM',
					value: '64GB DDR4',
				},
				{
					name: 'Storage',
					value: '1TB SSD',
				},
				{
					name: 'Port Speed',
					value: '1 Gbit/s',
				},
				{
					name: 'Bandwidth',
					value: '20TB',
				},
				{
					name: 'IP(s)',
					value: '5 IP /29',
				},
			],
			perMonth: 689,
		},
		{
			icon: icon_strike,
			title: 'Raised End V3',
			desc: 'Raised End V3\nDedicated Server',
			table: [
				{
					name: 'System',
					value: 'Bare Metal',
				},
				{
					name: 'CPU',
					value: 'Dual Intel Xeon® Gold 6134',
				},
				{
					name: 'RAM',
					value: '64GB DDR4',
				},
				{
					name: 'Storage',
					value: '1TB SSD',
				},
				{
					name: 'Port Speed',
					value: '1 Gbit/s',
				},
				{
					name: 'Bandwidth',
					value: '20TB',
				},
				{
					name: 'IP(s)',
					value: '5 IP /29',
				},
			],
			perMonth: 700,
		},
		{
			icon: icon_strike,
			title: 'Raised End V4',
			desc: 'Raised End V4\nDedicated Server',
			table: [
				{
					name: 'System',
					value: 'Bare Metal',
				},
				{
					name: 'CPU',
					value: 'Dual Intel Xeon® Gold 6134',
				},
				{
					name: 'RAM',
					value: '64GB DDR4',
				},
				{
					name: 'Storage',
					value: '1TB SSD',
				},
				{
					name: 'Port Speed',
					value: '1 Gbit/s',
				},
				{
					name: 'Bandwidth',
					value: '20TB',
				},
				{
					name: 'IP(s)',
					value: '5 IP /29',
				},
			],
			perMonth: 1150,
		},
	]);

	return (
		<div className={styles.page}>
			<Nav page={props.page} />
			<Hero
				icon={raisedEndServersIcon}
				title={'Raised End Servers'}
				content="locations-switzerland"
			/>
			<About
				type="3-rows"
				title={'About Our Raised End Servers'}
				list={aboutList}
			/>
			<ShortList list={shortList} />
			<Footer />
		</div>
	);
}
