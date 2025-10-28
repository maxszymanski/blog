// >> Modules
import styles from './linuxVpsNvme.module.scss';
import { useState } from 'react';

import linuxVpsNvmeIcon from 'assets/images/services/linuxVps/linuxVpsNvmeIcon.png';

import icon_folder_diamond from 'assets/icons/icon_folder_diamond.svg';
import icon_settings from 'assets/icons/icon_settings.svg';
import icon_strike from 'assets/icons/icon_strike.svg';
import icon_upload from 'assets/icons/icon_upload.svg';
import icon_lock from 'assets/icons/icon_lock.svg';
import icon_shield from 'assets/icons/icon_shield.svg';
import icon_stoper from 'assets/icons/icon_stoper.svg';

// >> Components
import Nav from 'components/overlay/nav/nav';
import Footer from 'components/overlay/footer/footer';

import Hero from '../global/hero/hero';
import About from '../global/about/about';
import LongList from '../global/longList/longList';

// >> Script
export default function LinuxVpsNvme(props) {
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
				text: 'Free Basic DDoS\nProtection Service',
			},
			{
				icon: icon_shield,
				text: 'Anytime OS Reinstallation',
			},
			{
				icon: icon_settings,
				text: 'Dedicated CPU and\nRAM resources',
			},
		],
	});

	const [longList] = useState([
		{
			icon: icon_strike,
			title: 'V1-NVME.CH',
			desc: 'V1-NVME Virtual Private Server powered with NVMe disk',
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
					value: '1GB DDR4',
				},
				{
					name: 'Storage',
					value: '30GB NVMe',
				},
				{
					name: 'Bandwidth',
					value: '100 Mbp/s 2TB',
				},
			],
			perMonth: 15,
		},
		{
			icon: icon_strike,
			title: 'V2-NVME.CH',
			desc: 'V2-NVME Virtual Private Server powered with NVMe disk',
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
					value: '40GB NVMe',
				},
				{
					name: 'Bandwidth',
					value: '200 Mbp/s 3TB',
				},
			],
			perMonth: 29,
		},
		{
			icon: icon_strike,
			title: 'V3-NVME.CH',
			desc: 'V3-NVME Virtual Private Server powered with NVMe disk',
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
					value: '4GB DDR4',
				},
				{
					name: 'Storage',
					value: '50GB NVMe',
				},
				{
					name: 'Bandwidth',
					value: '200 Mbp/s 5TB',
				},
			],
			perMonth: 45,
		},
		{
			icon: icon_strike,
			title: 'V4-NVME.CH',
			desc: 'V4-NVME Virtual Private Server powered with NVMe disk',
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
					value: '70GB NVMe',
				},
				{
					name: 'Bandwidth',
					value: '300 Mbp/s 7TB',
				},
			],
			perMonth: 66,
		},
		{
			icon: icon_strike,
			title: 'V5-NVME.CH',
			desc: 'V5-NVME Virtual Private Server powered with NVMe disk',
			table: [
				{
					name: 'Virtualization',
					value: 'KVM',
				},
				{
					name: 'VCPU',
					value: '14 x Xeon 5600',
				},
				{
					name: 'RAM',
					value: '16GB DDR4',
				},
				{
					name: 'Storage',
					value: '100GB NVMe',
				},
				{
					name: 'Bandwidth',
					value: '400 Mbp/s 10TB',
				},
			],
			perMonth: 115,
		},
	]);

	return (
		<div className={styles.page}>
			<Nav page={props.page} />
			<Hero
				icon={linuxVpsNvmeIcon}
				title={'Linux VPS NVMe'}
				content="locations-switzerland-longdesc"
				longDesc={
					'Ultra-fast VPS with NVME disk for optimal performance, provides exceptional performance fo your website or application. The NVME disk ensures ultra-fast read and write speeds for an improved user experience,\n\nWhether you manage a high-traffic website, require high-performance applications, offer streaming services, operate in the Cloud, develop gaming applications, or run an e-commerce site, a VPS NVME can provide the speed and reliability you need to deliver a fast and responsive user experience'
				}
				notiIcon={icon_stoper}
				notiText={'Instant Deploy'}
			/>
			<About
				type="2-rows"
				title={'About Our Linux VPS NVMe'}
				list={aboutList}
			/>
			<LongList list={longList} descType="orange" />

			<Footer />
		</div>
	);
}
