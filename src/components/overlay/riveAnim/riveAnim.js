// >> Modules
import styles from './riveAnim.module.scss';

import { useRive } from '@rive-app/react-canvas';
import { useEffect, useRef } from 'react';

// >> Script
export default function RiveAnim(props) {
	const riveRef = useRef(null);
	const { rive, RiveComponent } = useRive({
		src: props.src,
		autoplay: true,
		stateMachines: 'State Machine 1',
		onLoad: props.loadFunction || null,
	});

	useEffect(() => {
		riveRef.current = rive;
	}, [rive]);

	return (
		<div className={styles.rive}>
			<RiveComponent />
		</div>
	);
}
