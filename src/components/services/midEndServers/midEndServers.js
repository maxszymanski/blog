// >> Modules
import styles from './midEndServers.module.scss';
import { useState } from 'react';

import midEndServersIcon from 'assets/images/services/end-servers/midEndServersIcon.png';

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
export default function MidEndServers(props) {
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
			title: 'Middle End V1',
			desc: 'Middle End V1\nDedicated Server',
			table: [
				{
					name: 'System',
					value: 'Bare Metal',
				},
				{
					name: 'CPU',
					value: 'Dual Intel Xeon X5670',
				},
				{
					name: 'RAM',
					value: '32 GB DDR3',
				},
				{
					name: 'Storage',
					value: '1 TB SSD SATA3',
				},
				{
					name: 'Port Speed',
					value: '10 Gbps',
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
			perMonth: 130,
		},
		{
			icon: icon_strike,
			title: 'Middle End V2',
			desc: 'Middle End V2\nDedicated Server',
			table: [
				{
					name: 'System',
					value: 'Bare Metal',
				},
				{
					name: 'CPU',
					value: 'Dual Intel Xeon X5670',
				},
				{
					name: 'RAM',
					value: '32 GB DDR3',
				},
				{
					name: 'Storage',
					value: '1 TB SSD SATA3',
				},
				{
					name: 'Port Speed',
					value: '10 Gbps',
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
			perMonth: 219,
		},
		{
			icon: icon_strike,
			title: 'Middle End V3',
			desc: 'Middle End V3\nDedicated Server',
			table: [
				{
					name: 'System',
					value: 'Bare Metal',
				},
				{
					name: 'CPU',
					value: 'Dual Intel Xeon X5670',
				},
				{
					name: 'RAM',
					value: '32 GB DDR3',
				},
				{
					name: 'Storage',
					value: '1 TB SSD SATA3',
				},
				{
					name: 'Port Speed',
					value: '10 Gbps',
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
			perMonth: 230,
		},
		{
			icon: icon_strike,
			title: 'Middle End V4',
			desc: 'Middle End V4\nDedicated Server',
			table: [
				{
					name: 'System',
					value: 'Bare Metal',
				},
				{
					name: 'CPU',
					value: 'Dual Intel Xeon X5670',
				},
				{
					name: 'RAM',
					value: '32 GB DDR3',
				},
				{
					name: 'Storage',
					value: '1 TB SSD SATA3',
				},
				{
					name: 'Port Speed',
					value: '10 Gbps',
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
			perMonth: 979,
		},
	]);

	return (
		<div className={styles.page}>
			<Nav page={props.page} />
			<Hero
				icon={midEndServersIcon}
				title={'Mid End Servers'}
				content="locations-switzerland"
			/>
			<About
				type="3-rows"
				title={'About Our Mid End Servers'}
				list={aboutList}
			/>
			<ShortList list={shortList} />
			<Footer />
		</div>
	);
}
