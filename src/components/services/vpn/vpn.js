// >> Modules
import styles from './vpn.module.scss';
import { useState } from 'react';

import vpnIcon from 'assets/images/services/vpn/vpnIcon.png';

import icon_strike from 'assets/icons/icon_strike.svg';
import icon_video_refresh from 'assets/icons/icon_video_refresh.svg';
import icon_power_energy from 'assets/icons/icon_power_energy.svg';
import icon_monitor from 'assets/icons/icon_monitor.svg';
import icon_checklist from 'assets/icons/icon_checklist.svg';
import icon_squares from 'assets/icons/icon_squares.svg';
import icon_diagram_up from 'assets/icons/icon_diagram_up.svg';
import icon_database_server from 'assets/icons/icon_database_server.svg';
import icon_code_scale from 'assets/icons/icon_code_scale.svg';
import icon_add_substract from 'assets/icons/icon_add_substract.svg';

// >> Components
import Nav from 'components/overlay/nav/nav';
import Footer from 'components/overlay/footer/footer';

import Hero from '../global/hero/hero';
import Offer from '../global/offer/offer';
import KeyAdvantages from '../global/keyAdvantages/keyAdvantages';

// >> Script
export default function Vpn(props) {
	const [offerList] = useState([
		{
			name: 'Devices',
			value: 'Bare Metal',
		},
		{
			name: 'Traffic',
			value: 'Dual Intel Xeon ® Gold 6134',
		},
		{
			name: 'VPN Type',
			value: '128 GB DDR4',
		},
		{
			name: 'Encription Level',
			value: '1TB SSD',
		},
		{
			name: 'DMCA',
			value: '40 GBPS',
		},
		{
			name: 'Logs',
			value: 'Zero Logs',
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
				icon={vpnIcon}
				title={'VPN (OpenVPN)'}
				content="locations-switzerland"
				bottomDots={true}
			/>
			<KeyAdvantages
				title={'Key Advantages of the Dedicated GPU Server'}
				list={keyAdvantagesList}
			/>
			<Offer
				icon={icon_strike}
				title={'VPN-V1-CH'}
				desc={'V1 Virtual Private Network'}
				perMonth={5}
				list={offerList}
			/>
			<Footer />
		</div>
	);
}
