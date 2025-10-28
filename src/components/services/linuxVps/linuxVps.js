// >> Modules
import styles from './linuxVps.module.scss';
import { useState } from 'react';

import linuxVpsIcon from 'assets/images/services/linuxVps/linuxVpsIcon.png';

import icon_chip from 'assets/icons/icon_chip.svg';
import icon_shield from 'assets/icons/icon_shield.svg';
import icon_folder_diamond from 'assets/icons/icon_folder_diamond.svg';
import icon_lock from 'assets/icons/icon_lock.svg';
import icon_user from 'assets/icons/icon_user.svg';
import icon_settings from 'assets/icons/icon_settings.svg';
import icon_strike from 'assets/icons/icon_strike.svg';
import icon_stoper from 'assets/icons/icon_stoper.svg';
import icon_upload from 'assets/icons/icon_upload.svg';

// >> Components
import Nav from 'components/overlay/nav/nav';
import Footer from 'components/overlay/footer/footer';

import Hero from '../global/hero/hero';
import About from '../global/about/about';
import LongList from '../global/longList/longList';

// >> Script
export default function LinuxVps(props) {
	const [aboutList] = useState({
		row1: [
			{
				icon: icon_folder_diamond,
				text: 'Fully DMCA Ignored',
			},
			{
				icon: icon_strike,
				text: '100Mbp/s available',
			},
			{
				icon: icon_lock,
				text: '1 IPv4 dedicated IP included',
			},
		],
		row2: [
			{
				icon: icon_upload,
				text: 'Full Disk Encryption available',
			},
			{
				icon: icon_settings,
				text: 'Custom ISO Installs',
			},
			{
				icon: icon_shield,
				text: 'Free Basic DDoS \nProtection Service',
			},
		],

		row3: [
			{
				icon: icon_settings,
				text: 'Anytime OS Reinstallation',
			},
			{
				icon: icon_chip,
				text: 'Dedicated CPU and RAM\nresources',
			},
			{
				icon: icon_user,
				text: 'Management service available',
			},
		],
	});
	const [longList] = useState([
		{
			mostPopular: true,
			icon: icon_strike,
			title: 'V1.CH',
			desc: 'V1 Virtual Private Server',
			table: [
				{
					name: 'Virtualization',
					value: 'KVM',
				},
				{
					name: 'VCPU',
					value: '2 x Xeon 5600',
				},
				{
					name: 'RAM',
					value: '1GB DDR4',
				},
				{
					name: 'Storage',
					value: '30GB SSD',
				},
				{
					name: 'Bandwidth',
					value: '100 Mbp/s 2TB',
				},
			],
			perMonth: 12.9,
		},
		{
			icon: icon_strike,
			title: 'V2.CH',
			desc: 'V2 Virtual Private Server',
			table: [
				{
					name: 'Virtualization',
					value: 'KVM',
				},
				{
					name: 'VCPU',
					value: '4 x Xeon 5600',
				},
				{
					name: 'RAM',
					value: '2GB DDR4',
				},
				{
					name: 'Storage',
					value: '45GB SSD',
				},
				{
					name: 'Bandwidth',
					value: '200 Mbp/s 3TB',
				},
			],
			perMonth: 25,
		},
		{
			icon: icon_strike,
			title: 'V3.CH',
			desc: 'V3 Virtual Private Server',
			table: [
				{
					name: 'Virtualization',
					value: 'KVM',
				},
				{
					name: 'VCPU',
					value: '6 x Xeon 5600',
				},
				{
					name: 'RAM',
					value: '2GB DDR4',
				},
				{
					name: 'Storage',
					value: '60GB SSD',
				},
				{
					name: 'Bandwidth',
					value: '200 Mbp/s 5TB',
				},
			],
			perMonth: 35,
		},
		{
			icon: icon_strike,
			title: 'V4.CH',
			desc: 'V4 Virtual Private Server',
			table: [
				{
					name: 'Virtualization',
					value: 'KVM',
				},
				{
					name: 'VCPU',
					value: '8 x Xeon 5600',
				},
				{
					name: 'RAM',
					value: '6GB DDR4',
				},
				{
					name: 'Storage',
					value: '80GB SSD',
				},
				{
					name: 'Bandwidth',
					value: '300 Mbp/s 7TB',
				},
			],
			perMonth: 60,
		},
		{
			icon: icon_strike,
			title: 'V5.CH',
			desc: 'V5 Virtual Private Server',
			table: [
				{
					name: 'Virtualization',
					value: 'KVM',
				},
				{
					name: 'VCPU',
					value: '10 x Xeon 5600',
				},
				{
					name: 'RAM',
					value: '8GB DDR4',
				},
				{
					name: 'Storage',
					value: '100GB SSD',
				},
				{
					name: 'Bandwidth',
					value: '300 Mbp/s 10TB',
				},
			],
			perMonth: 75,
		},
		{
			icon: icon_strike,
			title: 'V6.CH',
			desc: 'V6 Virtual Private Server',
			table: [
				{
					name: 'Virtualization',
					value: 'KVM',
				},
				{
					name: 'VCPU',
					value: '10 x Xeon 5600',
				},
				{
					name: 'RAM',
					value: '16GB DDR4',
				},
				{
					name: 'Storage',
					value: '150GB SSD',
				},
				{
					name: 'Bandwidth',
					value: '400 Mbp/s 12TB',
				},
			],
			perMonth: 100,
		},
	]);

	return (
		<div className={styles.page}>
			<Nav page={props.page} />
			<Hero
				icon={linuxVpsIcon}
				title={'Linux VPS'}
				content="locations-switzerland-desc"
				notiIcon={icon_stoper}
				notiText={'Instant Deploy'}
			/>
			<About
				type="3-rows-3-full"
				title={'About Our Linux VPS'}
				list={aboutList}
			/>
			<LongList list={longList} descType="orange" />
			<Footer />
		</div>
	);
}
