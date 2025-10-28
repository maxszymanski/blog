// >> Modules
import styles from './linuxVpsStorage.module.scss';
import { useState } from 'react';

import linuxVpsStorageIcon from 'assets/images/services/linuxVps/linuxStorageVpsIcon.png';

import icon_folder_diamond from 'assets/icons/icon_folder_diamond.svg';
import icon_settings from 'assets/icons/icon_settings.svg';
import icon_strike from 'assets/icons/icon_strike.svg';
import icon_chip from 'assets/icons/icon_chip.svg';
import icon_diagram_up2 from 'assets/icons/icon_diagram_up2.svg';
import icon_web from 'assets/icons/icon_web.svg';
import icon_upload from 'assets/icons/icon_upload.svg';
import icon_star from 'assets/icons/icon_star.svg';

// >> Components
import Nav from 'components/overlay/nav/nav';
import Footer from 'components/overlay/footer/footer';

import Hero from '../global/hero/hero';
import About from '../global/about/about';
import Offer from '../global/offer/offer';
import UsedFor from '../global/usedFor/usedFor';

// >> Script
export default function LinuxVpsStorage(props) {
	const [aboutList] = useState({
		row1: [
			{
				icon: icon_folder_diamond,
				text: 'Fully DMCA Ignored',
			},
			{
				icon: icon_strike,
				text: 'Powered by a strong Ceph\ncluster (NAS)',
			},
			{
				icon: icon_settings,
				text: 'Data Replication /\nRedundancy across OSDs',
			},
		],

		row2: [
			{
				icon: icon_chip,
				text: 'RADOS Block Device\n(RBD technology)',
			},
			{
				icon: icon_diagram_up2,
				text: 'Data Balancing,\nHigh Availability & Scalability',
			},
		],
	});

	const [usedForList] = useState([
		{
			icon: icon_web,
			title: 'Media and Content Hosting',
		},
		{
			icon: icon_upload,
			title: 'Archiving',
		},
		{
			icon: icon_star,
			title: 'Content Delivery',
		},
	]);

	const [offerList] = useState([
		{
			name: 'CPU Cores',
			value: '2',
		},
		{
			name: 'RAM',
			value: '8GB',
		},
		{
			name: 'SAN Disk Size [GiB]',
			value: '5000GB',
		},
		{
			name: 'Bandwidth limit [TB]',
			value: '20TB',
		},
		{
			name: 'IPv4 Addresses',
			value: '1',
		},
	]);

	return (
		<div className={styles.page}>
			<Nav page={props.page} />
			<Hero
				icon={linuxVpsStorageIcon}
				title={'Linux Storage VPS'}
				content="locations-switzerland"
			/>
			<About
				type="2-rows-last-center"
				title={'About Our Linux Storage VPS'}
				list={aboutList}
			/>
			<UsedFor type="rounded" list={usedForList} />
			<Offer
				icon={icon_strike}
				listType="mr-65px"
				title={'Storage VPS V1'}
				desc={'Storage VPS V1'}
				perMonth={68}
				list={offerList}
			/>
			<Footer />
		</div>
	);
}
