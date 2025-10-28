// >> Modules
import styles from './highEndServers.module.scss';
import { useState } from 'react';

import highEndServersIcon from 'assets/images/services/end-servers/highEndServersIcon.png';

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
export default function HighEndServers(props) {
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
				text: 'Hardware Limit of 1 NVME\nDrive per Server',
			},
			{
				icon: icon_user,
				text: 'Network Speeds are Guaranteed\nand are NOT “shared” bandwidth',
			},
		],
	});
	const [shortList] = useState([
		{
			icon: icon_strike,
			title: 'High End V1',
			desc: 'High End V1',
			table: [
				{
					name: 'System',
					value: 'Bare Metal',
				},
				{
					name: 'CPU',
					value: 'Dual Xeon® E5-2680 V4',
				},
				{
					name: 'RAM',
					value: '64 GB DDR4 ECC',
				},
				{
					name: 'Storage',
					value: '1 TB SSD SATA3',
				},
				{
					name: 'Port Speed',
					value: '1 GbpsD',
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
			perMonth: 285,
		},
		{
			icon: icon_strike,
			title: 'High End V2',
			desc: 'High End V2',
			table: [
				{
					name: 'System',
					value: 'Bare Metal',
				},
				{
					name: 'CPU',
					value: 'Dual Xeon® E5-2680 V4',
				},
				{
					name: 'RAM',
					value: '64 GB DDR4 ECC',
				},
				{
					name: 'Storage',
					value: '1 TB SSD SATA3',
				},
				{
					name: 'Port Speed',
					value: '1 GbpsD',
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
			perMonth: 365,
		},
		{
			icon: icon_strike,
			title: 'High End V3',
			desc: 'High End V3',
			table: [
				{
					name: 'System',
					value: 'Bare Metal',
				},
				{
					name: 'CPU',
					value: 'Dual Xeon® E5-2680 V4',
				},
				{
					name: 'RAM',
					value: '64 GB DDR4 ECC',
				},
				{
					name: 'Storage',
					value: '1 TB SSD SATA3',
				},
				{
					name: 'Port Speed',
					value: '1 GbpsD',
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
			perMonth: 455,
		},
		{
			icon: icon_strike,
			title: 'High End V4',
			desc: 'High End V4',
			table: [
				{
					name: 'System',
					value: 'Bare Metal',
				},
				{
					name: 'CPU',
					value: 'Dual Xeon® E5-2680 V4',
				},
				{
					name: 'RAM',
					value: '64 GB DDR4 ECC',
				},
				{
					name: 'Storage',
					value: '1 TB SSD SATA3',
				},
				{
					name: 'Port Speed',
					value: '1 GbpsD',
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
			perMonth: 999,
		},
	]);

	return (
		<div className={styles.page}>
			<Nav page={props.page} />
			<Hero
				icon={highEndServersIcon}
				title={'High End Servers'}
				content="locations-switzerland"
			/>
			<About
				type="3-rows"
				title={'About Our High End Servers'}
				list={aboutList}
			/>
			<ShortList list={shortList} />
			<Footer />
		</div>
	);
}
