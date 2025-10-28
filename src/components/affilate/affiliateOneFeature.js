// >> Modules
import styles from './affiliateFeatures.module.scss';
import { Typography } from '@mui/material';

// >> Script
export default function AffiliateOneFeature(props) {
    return (
        <div
            className={styles.onePoint}
            data-type={props.type}
            data-aos="fade-up"
        >
            <img src={props.rive} className={styles.rive}  alt={""}/>
            <img src={props.mobileRive} className={styles.riveMobile}  alt={""}/>
            <img src={props.icon} className={styles.icon} alt="" />
            <Typography className={styles.pointTitle}>{props.title}</Typography>
            <Typography className={styles.pointDesc}>{props.desc}</Typography>
        </div>
    );
}
