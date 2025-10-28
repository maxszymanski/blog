// >> Modules
import styles from './affiliateFeatures.module.scss';

import icon_discount from '../../assets/icons/icon_discount.svg';
import icon_crypto from '../../assets/icons/icon_crypto.svg';
import icon_cost from '../../assets/icons/icon_cost.svg';
import icon_advertiser from '../../assets/icons/icon_advertiser.svg';
import icon_performance from '../../assets/icons/icon_performance.svg';
import icon_coupon from '../../assets/icons/icon_coupon.svg';

import feature1 from '../../assets/images/affiliate/feature1.png';
import feature2 from '../../assets/images/affiliate/feature2.png';
import feature3 from '../../assets/images/affiliate/feature3.png';
import feature4 from '../../assets/images/affiliate/feature4.png';
import feature5 from '../../assets/images/affiliate/feature5.png';
import feature6 from '../../assets/images/affiliate/feature6.png';

import feature1Mobile from '../../assets/images/affiliate/feature1Mobile.png';
import feature2Mobile from '../../assets/images/affiliate/feature2Mobile.png';
import feature3Mobile from '../../assets/images/affiliate/feature3Mobile.png';
import feature4Mobile from '../../assets/images/affiliate/feature4Mobile.png';
import feature5Mobile from '../../assets/images/affiliate/feature5Mobile.png';
import feature6Mobile from '../../assets/images/affiliate/feature6Mobile.png';


// >> Components
import Dots from 'components/overlay/dots/dots';
import AffiliateOneFeature from "./affiliateOneFeature";

// >> Script
export default function AffiliateFeatures(props) {
    return (
        <div className={styles.section}>
            <div className={styles.inside}>
                <Dots type="affiliate-features1" />
                <Dots type="affiliate-features2" />
                <Dots type="home-features1" />
                <Dots type="home-features2" />

                <h2 className={styles.title} data-aos="fade-up">
                    Earn money for life!
                </h2>

                <div className={styles.points}>
                    <AffiliateOneFeature
                        type="medium"
                        number="1"
                        icon={icon_discount}
                        rive={feature1}
                        mobileRive={feature1Mobile}
                        title="20% commission of every new sale"
                        desc="Each referred customer will bring you 20% of the first monthly service price and 10% of every next sales and renewals"
                    />
                    <AffiliateOneFeature
                        type="short"
                        number="2"
                        icon={icon_coupon}
                        rive={feature2}
                        mobileRive={feature2Mobile}
                        title="Discount for your customers"
                        desc="They get 10% off any service that are offered on privatealps.net"
                    />
                    <AffiliateOneFeature
                        type="short"
                        number="3"
                        icon={icon_performance}
                        rive={feature3}
                        mobileRive={feature3Mobile}
                        title="Performance reporting"
                        desc="Measure your affiliate performance through our affiliate management page."
                    />
                    <AffiliateOneFeature
                        type="short"
                        number="4"
                        icon={icon_cost}
                        rive={feature4}
                        mobileRive={feature4Mobile}
                        title="No cost to you"
                        desc="It is completely free to join our program and to start making money with us!"
                    />
                    <AffiliateOneFeature
                        type="short"
                        number="5"
                        icon={icon_crypto}
                        rive={feature5}
                        mobileRive={feature5Mobile}
                        title="Cryptocurrency withdrawal"
                        desc="Bitcoin, Monero, Litecoin"
                    />
                    <AffiliateOneFeature
                        type="medium"
                        number="6"
                        icon={icon_advertiser}
                        rive={feature6}
                        mobileRive={feature6Mobile}
                        title="Advertising materials"
                        desc="We will provide you with advertising materials (banners) to make your work easier."
                    />
                </div>
            </div>
        </div>
    );
}
