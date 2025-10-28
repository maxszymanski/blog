// >> Modules
import { useState } from 'react';
import styles from './dedicatedGpuServers.module.scss';

import heroIcon from 'assets/images/services/dedicated-gpu-server/heroIcon.png';

import icon_strike from 'assets/icons/icon_strike.svg';
import icon_diagram_up2 from 'assets/icons/icon_diagram_up2.svg';
import icon_shield from 'assets/icons/icon_shield.svg';
import icon_video_refresh from 'assets/icons/icon_video_refresh.svg';
import icon_power_energy from 'assets/icons/icon_power_energy.svg';
import icon_monitor from 'assets/icons/icon_monitor.svg';
import icon_checklist from 'assets/icons/icon_checklist.svg';
import icon_squares from 'assets/icons/icon_squares.svg';
import icon_diagram_up from 'assets/icons/icon_diagram_up.svg';
import icon_database_server from 'assets/icons/icon_database_server.svg';
import icon_code_scale from 'assets/icons/icon_code_scale.svg';
import icon_add_substract from 'assets/icons/icon_add_substract.svg';
import icon_folder_diamond from 'assets/icons/icon_folder_diamond.svg';
import icon_web from 'assets/icons/icon_web.svg';
import icon_chip from 'assets/icons/icon_chip.svg';

// >> Components
import Nav from 'components/overlay/nav/nav';
import Footer from 'components/overlay/footer/footer';

import Hero from '../global/hero/hero';
import LongList from '../global/longList/longList';
import UsedFor from '../global/usedFor/usedFor';
import KeyAdvantages from '../global/keyAdvantages/keyAdvantages';
import UnderHeroPoints from '../global/underHeroPoints/underHeroPoints';

// >> Script
export default function DedicatedGpuServers(props) {
	const [underHeroPoints] = useState([
		{
			title: 'Optimized for AI,\nMachine Learning, and More',
			desc: 'The Dedicated GPU Server excels in the rapid analysis of massive data volumes. It is perfectly suited for big data analysis platforms such as Apache Spark, Hadoop, and SQL databases supporting GPU-accelerated queries. Moreover, it is ideal for scientific computing tasks like scientific simulations, weather modeling, and molecular dynamics research, taking advantage of its high-performance computing capabilities.',
			icon: icon_chip,
		},
		{
			title: 'Ideal for Big Data Analysis\nand Scientific Computing',
			desc: 'The Dedicated GPU Server excels in the rapid analysis of massive data volumes. It is perfectly suited for big data analysis platforms such as Apache Spark, Hadoop, and SQL databases supporting GPU-accelerated queries. Moreover, it is ideal for scientific computing tasks like scientific simulations, weather modeling, and molecular dynamics research, taking advantage of its high-performance computing capabilities.',
			icon: icon_web,
		},
		{
			title: 'A Key Asset for Graphic Rendering\nand VR/AR Simulations',
			desc: 'The Dedicated GPU Server excels in the rapid analysis of massive data volumes. It is perfectly suited for big data analysis platforms such as Apache Spark, Hadoop, and SQL databases supporting GPU-accelerated queries. Moreover, it is ideal for scientific computing tasks like scientific simulations, weather modeling, and molecular dynamics research, taking advantage of its high-performance computing capabilities.',
			icon: icon_folder_diamond,
		},
		{
			title: 'The Streaming Revolution \nwith GPU Technology',
			desc: 'The Dedicated GPU Server excels in the rapid analysis of massive data volumes. It is perfectly suited for big data analysis platforms such as Apache Spark, Hadoop, and SQL databases supporting GPU-accelerated queries. Moreover, it is ideal for scientific computing tasks like scientific simulations, weather modeling, and molecular dynamics research, taking advantage of its high-performance computing capabilities.',
			icon: icon_folder_diamond,
		},
	]);

	const [usedForList] = useState([
		{
			icon: icon_strike,
			title: 'Performance',
			desc: 'With its cutting-edge GPUs, our server offers unparalleled processing power.',
		},
		{
			icon: icon_diagram_up2,
			title: 'Flexibility and Scalability',
			desc: 'Perfect for the evolving needs of businesses, offering resource allocation on demand.',
		},
		{
			icon: icon_shield,
			title: 'Reliability and Security',
			desc: 'Highly reliable infrastructure with robust security measures to protect your sensitive data.',
		},
	]);

	const [longList] = useState([
		{
			title: 'GPU Server V1',
			desc: 'Mid-range performance for growing businesses, offering a boost with 64GB DDR4 RAM for more demanding data analytics and medium-scale machine learning tasks. Dual Xeon E5-2680 v4 CPUs and an Nvidia Tesla P4 - P40 GPUs provide the necessary power to drive your AI ambitions forward',
			icon: icon_strike,
			table: [
				{
					name: 'System',
					value: 'Bare Metal ',
				},
				{
					name: 'CPU',
					value: 'Intel Dual Xeon E5-2680 V4',
				},
				{
					name: 'GPU',
					value: 'Nvidia Tesla P4 / P40',
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
					value: 'UNMETERED',
				},
				{
					name: 'IP(s)',
					value: 5,
				},
			],
			perMonth: 415,
		},
		{
			title: 'GPU Server V2',
			desc: 'High-performance server designed for advanced machine learning, complex data analysis, and intensive computational workloads. Dual Xeon E5-2680 v4 CPUs, 64GB DDR4 RAM, and an Nvidia Tesla P4 & P40 GPUs support your high-speed, high-volume data processing needs.',
			icon: icon_strike,
			table: [
				{
					name: 'System',
					value: 'Bare Metal+',
				},
				{
					name: 'CPU',
					value: 'Intel Dual Xeon E5-2680 V5',
				},
				{
					name: 'GPU',
					value: 'Nvidia Tesla P5 / P35',
				},
				{
					name: 'RAM',
					value: '78GB DDR4',
				},
				{
					name: 'Storage',
					value: '2TB SSD',
				},
				{
					name: 'Port Speed',
					value: '2 Gbit/s',
				},
				{
					name: 'Bandwidth',
					value: 'UNMETERED',
				},
				{
					name: 'IP(s)',
					value: 6,
				},
			],
			perMonth: 1049,
		},
		{
			title: 'GPU Server V3',
			desc: 'Elite-tier server for maximum performance in AI, high-end graphic rendering, and VR/AR simulation. Equipped with Dual Intel Xeon Gold 6134 CPUs, 64GB DDR4 RAM, and an Nvidia Tesla P4 - P40 GPUs, this is the ultimate choice for industry leaders requiring unparalleled processing capabilities',
			icon: icon_strike,
			table: [
				{
					name: 'System',
					value: 'Bare Metal++',
				},
				{
					name: 'CPU',
					value: 'Intel Dual Xeon Gold 6134',
				},
				{
					name: 'GPU',
					value: 'Nvidia Tesla P6 / P60',
				},
				{
					name: 'RAM',
					value: '128GB DDR4',
				},
				{
					name: 'Storage',
					value: '3TB SSD',
				},
				{
					name: 'Port Speed',
					value: '3 Gbit/s',
				},
				{
					name: 'Bandwidth',
					value: 'UNMETERED',
				},
				{
					name: 'IP(s)',
					value: 7,
				},
			],
			perMonth: 1049,
		},
	]);

	const [keyAdvantagesList] = useState([
		{
			title: 'Parallel Computing Power',
			desc: 'Supported by software libraries like CUDA and frameworks such as TensorFlow and PyTorch.',
			icon: icon_power_energy,
		},
		{
			title: 'Optimized Image Quality with FFmpeg',
			desc: 'Supported by software libraries like CUDA and frameworks such as TensorFlow and PyTorch.',
			icon: icon_monitor,
		},
		{
			title: 'High Floating-Point Performance',
			desc: 'Supported by software libraries like CUDA and frameworks such as TensorFlow and PyTorch.',
			icon: icon_checklist,
		},
		{
			title: 'Scalability for Large Audiences with HLS and DASH',
			desc: 'Supported by software libraries like CUDA and frameworks such as TensorFlow and PyTorch.',
			icon: icon_diagram_up,
		},
		{
			title: 'High Data Transfer Speeds',
			desc: 'Supported by software libraries like CUDA and frameworks such as TensorFlow and PyTorch.',
			icon: icon_database_server,
		},
		{
			title: 'Effective Bandwidth Management with H.264/H.265',
			desc: 'Supported by software libraries like CUDA and frameworks such as TensorFlow and PyTorch.',
			icon: icon_strike,
		},
		{
			title: 'Extended Ecosystem',
			desc: 'Supported by software libraries like CUDA and frameworks such as TensorFlow and PyTorch.',
			icon: icon_code_scale,
		},
		{
			title: 'Latency Reduction with WebRTC and RTMP',
			desc: 'Supported by software libraries like CUDA and frameworks such as TensorFlow and PyTorch.',
			icon: icon_add_substract,
		},
		{
			title: 'Video Encoding Acceleration with CUDA and NVEnc',
			desc: 'Supported by software libraries like CUDA and frameworks such as TensorFlow and PyTorch.',
			icon: icon_video_refresh,
		},
		{
			title: 'Compatibility with Major Streaming Platforms',
			desc: 'Supported by software libraries like CUDA and frameworks such as TensorFlow and PyTorch.',
			icon: icon_strike,
		},
		{
			title: 'Diverse Applications',
			desc: 'Supported by software libraries like CUDA and frameworks such as TensorFlow and PyTorch.',
			icon: icon_squares,
		},
	]);

	return (
		<div className={styles.page}>
			<Nav page={props.page} />
			<Hero
				icon={heroIcon}
				title={'High-End Swiss\nDedicated GPU Servers'}
				content={null}
			/>
			<UnderHeroPoints list={underHeroPoints} />
			<KeyAdvantages
				title={'Key Advantages of the Dedicated GPU Server'}
				list={keyAdvantagesList}
			/>
			<UsedFor list={usedForList} />
			<LongList list={longList} from="dedicatedGpuServers" />
			<Footer />
		</div>
	);
}
