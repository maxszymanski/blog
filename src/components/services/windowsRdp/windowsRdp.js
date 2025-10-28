// >> Modules
import styles from './windowsRdp.module.scss';
import { useState } from 'react';

import windowsRdpIcon from 'assets/images/services/windowsRdp/windowsRdpIcon.png';

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
import ShortList from '../global/shortList/shortList';

// >> Script
export default function WindowsRdp(props) {
	const [aboutList] = useState({
		row1: [
			{
				icon: icon_folder_diamond,
				text: 'Fully DMCA Ignored',
			},
			{
				icon: icon_lock,
				text: '1 IPv4 dedicated IP included\nin every plan',
			},
			{
				icon: icon_upload,
				text: 'Full Disk Encryption available\n(KVM only)',
			},
		],

		row2: [
			{
				icon: icon_settings,
				text: 'Custom ISO Installs (KVM only)',
			},
			{
				icon: icon_shield,
				text: 'Free Basic DDoS\nProtection Service',
			},
			{
				icon: icon_settings,
				text: 'Anytime OS Reinstallation',
			},
		],

		row3: [
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
	const [shortList] = useState([
		{
			icon: icon_strike,
			title: 'WIN-V1.CH',
			desc: 'V1 Windows Virtual\nPrivate Server',
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
					value: '35GB SSD',
				},
				{
					name: 'Bandwidth',
					value: '100 Mbp/s 2TB',
				},
				{
					name: 'Remote Desktop (RDP)',
					value: 'Yes',
				},
			],
			perMonth: 25,
		},
		{
			icon: icon_strike,
			title: 'WIN-V2.CH',
			desc: 'V2 Windows Virtual\nPrivate Server',
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
					value: '4GB DDR4',
				},
				{
					name: 'Storage',
					value: '50GB SSD',
				},
				{
					name: 'Bandwidth',
					value: '200 Mbp/s 5TB',
				},
				{
					name: 'Remote Desktop (RDP)',
					value: 'Yes',
				},
			],
			perMonth: 35,
		},
		{
			icon: icon_strike,
			title: 'WIN-V3.CH',
			desc: 'V3 Windows Virtual\nPrivate Server',
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
					value: '6GB DDR4',
				},
				{
					name: 'Storage',
					value: '80GB SSD',
				},
				{
					name: 'Bandwidth',
					value: '400 Mbp/s 7TB',
				},
				{
					name: 'Remote Desktop (RDP)',
					value: 'Yes',
				},
			],
			perMonth: 60,
		},
		{
			icon: icon_strike,
			title: 'WIN-V4.CH',
			desc: 'V4 Windows Virtual\nPrivate Server',
			table: [
				{
					name: 'Virtualization',
					value: 'KVM',
				},
				{
					name: 'VCPU',
					value: '12 x Xeon 5600',
				},
				{
					name: 'RAM',
					value: '12GB DDR4',
				},
				{
					name: 'Storage',
					value: '100GB SSD',
				},
				{
					name: 'Bandwidth',
					value: '400 Mbp/s 10TB',
				},
				{
					name: 'Remote Desktop (RDP)',
					value: 'Yes',
				},
			],
			perMonth: 105,
		},
	]);

	return (
		<div className={styles.page}>
			<Nav page={props.page} />
			<Hero
				icon={windowsRdpIcon}
				title={'Windows RDP'}
				content="locations-switzerland"
				notiIcon={icon_stoper}
				notiText={'Instant Deploy'}
			/>
			<About
				type="3-rows-2-full"
				title={'About Our Windows RDP'}
				list={aboutList}
			/>
			<ShortList list={shortList} />
			<Footer />
		</div>
	);
}
