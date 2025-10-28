import styles from "./partnerships.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import { Autoplay } from 'swiper/modules';

import cloudflareLogo from "../../../assets/images/home/faq/cloudflare.svg";
import ciscoLogo from "../../../assets/images/home/faq/cisco.svg";
import cogentLogo from "../../../assets/images/home/faq/cogent.svg";
import ripeNccLogo from "../../../assets/images/home/faq/ripeNcc.svg";
import superMicroLogo from "../../../assets/images/home/faq/superMicro.svg";
import juniperLogo from "../../../assets/images/home/faq/juniper.svg";

export default function Partnerships() {
    return (
        <div className={styles.section}>
            <div className={styles.inside}>
                <h2 className={styles.title} data-aos="fade-up">
                    Our Partnerships
                </h2>
                <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={56}
                    centeredSlides={true}
                    className={styles.slider}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay]}
                >
                    <SwiperSlide className={styles.slide}><img src={cloudflareLogo} alt=""/></SwiperSlide>
                    <SwiperSlide className={styles.slide}><img src={ciscoLogo} alt=""/></SwiperSlide>
                    <SwiperSlide className={styles.slide}><img src={cogentLogo} alt=""/></SwiperSlide>
                    <SwiperSlide className={styles.slide}><img src={superMicroLogo} alt=""/></SwiperSlide>
                    <SwiperSlide className={styles.slide}><img src={ripeNccLogo} alt=""/></SwiperSlide>
                    <SwiperSlide className={styles.slide}><img src={juniperLogo} alt=""/></SwiperSlide>
                    <SwiperSlide className={styles.slide}><img src={cloudflareLogo} alt=""/></SwiperSlide>
                    <SwiperSlide className={styles.slide}><img src={ciscoLogo} alt=""/></SwiperSlide>
                    <SwiperSlide className={styles.slide}><img src={cogentLogo} alt=""/></SwiperSlide>
                    <SwiperSlide className={styles.slide}><img src={superMicroLogo} alt=""/></SwiperSlide>
                    <SwiperSlide className={styles.slide}><img src={ripeNccLogo} alt=""/></SwiperSlide>
                    <SwiperSlide className={styles.slide}><img src={juniperLogo} alt=""/></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}