// >> Modules
import styles from './kaliLinuxVps.module.scss';
import { useState } from 'react';

import dragonIcon from 'assets/images/services/kaliLinuxVps/dragonIcon.png';
import whyChooseImg from 'assets/images/services/kaliLinuxVps/whyChooseImg.png';

import icon_strike from 'assets/icons/icon_strike.svg';
import icon_stoper from 'assets/icons/icon_stoper.svg';
import icon_settings from 'assets/icons/icon_settings.svg';
import icon_web from 'assets/icons/icon_web.svg';
import icon_star from 'assets/icons/icon_star.svg';
import icon_diagram_up2 from 'assets/icons/icon_diagram_up2.svg';
import icon_shield from 'assets/icons/icon_shield.svg';
import icon_crown from 'assets/icons/icon_crown.svg';
import icon_user from 'assets/icons/icon_user.svg';
import icon_chip from 'assets/icons/icon_chip.svg';
import icon_folder_diamond from 'assets/icons/icon_folder_diamond.svg';
import icon_team from 'assets/icons/icon_team.svg';

// >> Components
import Nav from 'components/overlay/nav/nav';
import Footer from 'components/overlay/footer/footer';

import Hero from '../global/hero/hero';
import ShortList from '../global/shortList/shortList';
import WhyChoose from '../global/whyChoose/whyChoose';
import UseCases from '../global/useCases/useCases';

// >> Script
export default function KaliLinuxVps(props) {
	const [whyChooseList] = useState([
		{
			icon: icon_settings,
			title: 'Pre-Configured for Excellence',
			desc: 'Jump straight into security assessments with a pre-configured Kali Linux environment, saving time on setup and configuration.',
		},
		{
			icon: icon_star,
			title: 'Powerful Resource',
			desc: 'With dedicated resources, tackle the most demanding security tasks without any performance bottlenecks.',
		},
		{
			icon: icon_web,
			title: 'Global Accessibility',
			desc: 'Access your Kali Linux VPS from anywhere, ensuring that your cybersecurity projects progress no matter where you are.',
		},
		{
			icon: icon_diagram_up2,
			title: 'Seamless Scalability',
			desc: 'As your security needs grow, so does your VPS. Scale up with ease, ensuring that you always have the resources you need.',
		},
	]);

	const [useCasesList] = useState([
		{
			icon: icon_shield,
			title: 'Security Professionals',
			desc: 'Conduct comprehensive penetration tests and security audits with industry-standard tools.',
		},
		{
			icon: icon_crown,
			title: 'Educators and Students',
			desc: 'Use a safe environment for cybersecurity training and education.',
		},
		{
			icon: icon_user,
			title: 'IT Consultants',
			desc: 'Offer client security services, including vulnerability assessments and network fortifications.',
		},
		{
			icon: icon_chip,
			title: 'Software Developers',
			desc: 'Test application security in a controlled, secure environment',
		},
		{
			icon: icon_diagram_up2,
			title: 'Forensic Analysts',
			desc: 'Perform digital forensics investigations with specialized tools available on Kali Linux.',
		},
		{
			icon: icon_folder_diamond,
			title: 'Research Institutions',
			desc: 'Engage in cybersecurity research with a platform capable of handling complex datasets and simulations.',
		},
		{
			icon: icon_team,
			title: 'Corporate IT Teams',
			desc: 'Utilize for regular security checks and internal audits to ensure corporate network integrity.',
		},
	]);

	const [shortList] = useState([
		{
			icon: icon_strike,
			title: 'Kali-V1',
			desc: 'Ideal for beginners in cybersecurity and students, our Starter Kali Linux VPS provides essential tools and performance to learn the basics of ethical hacking and security testing.',
			table: [
				{
					name: 'Virtualization',
					value: 'KVM',
				},
				{
					name: 'VCPU',
					value: '5 x Xeon 5600',
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
			perMonth: 28.9,
		},
		{
			icon: icon_strike,
			title: 'Kali-V2',
			desc: 'Designed for professional security analysts and mid-sized projects, this tier offers enhanced power and storage to handle more complex tasks.',
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
					value: '4GB DDR4',
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
			perMonth: 41.9,
		},
		{
			icon: icon_strike,
			title: 'Kali-V3',
			desc: 'Our most powerful VPS solution for enterprises, offering top-tier resources for advanced penetration testing, security research, and large-scale security operations',
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
			perMonth: 81.9,
		},
		{
			icon: icon_strike,
			title: 'Kali-Budget',
			desc: 'Experience robust cybersecurity on a budget with our Parrot VPS solutions – affordable yet powerful, designed for aspiring security professionals and cost-conscious users',
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
					value: '2GB DDR4',
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
			perMonth: 14,
		},
	]);

	return (
		<div className={styles.page}>
			<Nav page={props.page} />
			<Hero
				icon={dragonIcon}
				title={'Kali Linux VPS'}
				desc={
					'Experience Unmatched Cybersecurity with Our Kali Linux VPS Workstations Offshore,\nNo KYC, Anonymous, no logs\n\nUnlock the full potential of ethical hacking and cybersecurity with our cutting-edge Kali Linux VPS Workstations. Tailored for security professionals and ethical hackers, our virtual private servers are configured with Kali Linux, the premier platform for advanced penetration testing and security auditing.'
				}
				content="longdesc"
				notiIcon={icon_stoper}
				notiText={'Instant Deploy'}
			/>
			<WhyChoose
				title={'Why Choose Our Kali Linux VPS?'}
				img={whyChooseImg}
				list={whyChooseList}
			/>
			<UseCases list={useCasesList} />

			<ShortList list={shortList} descType="white" />
			<Footer />
		</div>
	);
}
