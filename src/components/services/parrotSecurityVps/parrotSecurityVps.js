// >> Modules
import styles from './parrotSecurityVps.module.scss';
import { useState } from 'react';

import parrotIcon from 'assets/images/services/parrotSecurityVps/parrotIcon.png';
import whyChooseImg from 'assets/images/services/parrotSecurityVps/whyChooseImg.png';

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
export default function ParrotSecurityVps(props) {
	const [whyChooseList] = useState([
		{
			icon: icon_settings,
			title: 'Fully-Loaded Security Suite',
			desc: 'Dive into a pre-installed suite of security tools, saving time and resources on setup and configuration.',
		},
		{
			icon: icon_star,
			title: 'Customizable Workstations',
			desc: 'Tailor your VPS to meet specific project requirements with flexible configurations and dedicated resources.',
		},
		{
			icon: icon_web,
			title: 'Global Access, Zero Compromise',
			desc: 'Connect to your secure workstation from anywhere in the world without sacrificing performance or security.',
		},
		{
			icon: icon_diagram_up2,
			title: 'Seamless Scalability',
			desc: 'Easily scale up as your security needs evolve, with plans designed for all levels of use, from individual researchers to large corporations.',
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
			title: 'Parrot-V1',
			desc: 'Ideal for beginners in cybersecurity, students, or small projects, this VPS offers the essential tools and performance for basic security tasks and learning',
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
			title: 'Parrot-V2',
			desc: 'Geared towards professionals and medium-scale projects, this tier provides enhanced capabilities for more complex security operations',
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
			title: 'Parrot-V3',
			desc: 'Our most powerful tier, designed for enterprises and intensive security operations, offering top-of-the-line resources for advanced cybersecurity tasks.',
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
			title: 'Parrot-Budget',
			desc: 'Experience robust cybersecurity on a budget with our Kali VPS solutions – affordable yet powerful, designed for aspiring security professionals and cost-conscious users',
			mostPopular: true,
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
				icon={parrotIcon}
				title={'Parrot Security VPS'}
				desc={
					'Elevate Your Security Operations with Our Parrot Security OS VPS Workstations Offshore, No KYC, Anonymous, no logs\n\nStep into the future of cybersecurity with our state-of-the-art Parrot Security OS VPS, the ultimate workstation for security experts and ethical hackers. Our service offers a comprehensive suite of tools for complete security and penetration testing, wrapped in a user-friendly virtual environment. Fully Anonymous Access over Tor.'
				}
				content="longdesc"
				notiIcon={icon_stoper}
				notiText={'Instant Deploy'}
			/>
			<WhyChoose
				title={'Why Choose Our Parrot Security VPS?'}
				img={whyChooseImg}
				list={whyChooseList}
			/>
			<UseCases list={useCasesList} />

			<ShortList list={shortList} descType="white" />
			<Footer />
		</div>
	);
}
