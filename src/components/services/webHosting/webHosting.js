// >> Modules
import styles from './webHosting.module.scss';
import { useState } from 'react';

import webHostingIcon from 'assets/images/services/webHosting/webHostingIcon.png';

import icon_strike from 'assets/icons/icon_strike.svg';
import icon_domain from 'assets/icons/icon_domain_not_included.svg';
import icon_php_selector from 'assets/icons/icon_php_selector.svg';
import icon_cpanel from 'assets/icons/icon_cpanel.svg';
import icon_lock from 'assets/icons/icon_lock-colored.svg';
import icon_access from 'assets/icons/icon_access.svg';
import icon_shield from 'assets/icons/icon_shield-colored.svg';
import icon_installer from 'assets/icons/icon_installer.svg';

// >> Components
import Nav from 'components/overlay/nav/nav';
import Footer from 'components/overlay/footer/footer';

import Hero from '../global/hero/hero';
import ShortList from "../global/shortList/shortList";
import About from "../global/about/about";

// >> Script
export default function WebHosting(props) {
	const [aboutList] = useState({
		row1: [
			{
				icon: icon_domain,
				text: 'Domain not included',
			},
			{
				icon: icon_cpanel,
				text: 'Cpanel panel',
			}
		],

		row2: [
			{
				icon: icon_php_selector,
				text: 'PHP Selector.\nPHP versions can be switched.',
			},
			{
				icon: icon_lock,
				text: 'Free Let\'s Encrypt SSL\nCertificates (HTTPS)',
			},
			{
				icon: icon_access,
				text: 'Anonymized access\nlogs by default',
			},
		],

		row3: [
			{
				icon: icon_shield,
				text: 'Free Basic Anti-DDoS\nProtection Service',
			},
			{
				icon: icon_installer,
				text: 'App Installer for popular\nsoftware available',
			},
		],
	});

	const [longList] = useState([
		{
			icon: icon_strike,
			title: 'W1.CH',
			desc: 'Web Hosting Plan V1',
			table: [
				{
					name: 'System',
					value: 'Cpanel',
				},
				{
					name: 'Domains',
					value: '1',
				},
				{
					name: 'Subdomains',
					value: '5',
				},
				{
					name: 'Storage',
					value: '50GB SSD',
				},
				{
					name: 'Bandwidth',
					value: 'Unlimited',
				},
			],
			perMonth: 14,
		},
		{
			icon: icon_strike,
			title: 'W2.CH',
			desc: 'Web Hosting Plan V1',
			table: [
				{
					name: 'System',
					value: 'Cpanel',
				},
				{
					name: 'Domains',
					value: '2',
				},
				{
					name: 'Subdomains',
					value: '10',
				},
				{
					name: 'Storage',
					value: '80GB SSD',
				},
				{
					name: 'Bandwidth',
					value: 'Unlimited',
				},
			],
			perMonth: 24,
		},
		{
			icon: icon_strike,
			title: 'W3.CH',
			desc: 'Web Hosting Plan V1',
			table: [
				{
					name: 'System',
					value: 'Cpanel',
				},
				{
					name: 'Domains',
					value: '4',
				},
				{
					name: 'Subdomains',
					value: '15',
				},
				{
					name: 'Storage',
					value: '150GB SSD',
				},
				{
					name: 'Bandwidth',
					value: 'Unlimited',
				},
			],
			perMonth: 34,
		},
		{
			icon: icon_strike,
			title: 'W4.CH',
			desc: 'Web Hosting Plan V1',
			table: [
				{
					name: 'System',
					value: 'Cpanel',
				},
				{
					name: 'Domains',
					value: '8',
				},
				{
					name: 'Subdomains',
					value: 'Unlimited',
				},
				{
					name: 'Storage',
					value: '500GB SSD',
				},
				{
					name: 'Bandwidth',
					value: 'Unlimited',
				},
			],
			perMonth: 49,
		},
	]);

	return (
		<div className={styles.page}>
			<Nav page={props.page} />
			<Hero
				icon={webHostingIcon}
				title={'Web Hosting'}
				content="locations-switzerland"
				bottomDots={true}
			/>
			<About
				type="3-rows-3-center"
				title={'About Our Web Hosting'}
				list={aboutList}
			/>
			<ShortList list={longList} descType="white" />
			<Footer />
		</div>
	);
}
