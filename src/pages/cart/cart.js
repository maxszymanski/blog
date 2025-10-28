import Nav from "../../components/overlay/nav/nav";
import Footer from "../../components/overlay/footer/footer";
import {Typography} from "@mui/material";
import {Link} from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from "./cart.module.scss";

import titleBg from '../../assets/images/services/global/hero/titleBg.png';

import 'swiper/swiper-bundle.css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import SingleCartItem from "../../components/cart/singleCartItem";

import arrowIcon from "../../assets/icons/arrow_right.svg";

import { FreeMode, Scrollbar } from 'swiper/modules';
import {useEffect, useState} from "react";

const PRODUCTS = [
    {
        title: "Linux VPS : V2.CH",
        price: "25€",
        total: "342.99€",
        name: "VPS-rrQlKOAF",
        details: [
            {icon: "../../assets/icons/icon_strike.svg", text: "Select Operative System: debian-10-x86_64 (0€)"},
            {icon: "", text: "Additional IPs: + 5 Ipv4 (15€)"},
            {icon: "", text: "Management Services: Monthly Advanced Management Service (200€)"},
            {icon: "", text: "Additional Disk Space: + 50GB SSD (20€)"},
            {icon: "", text: "Extra CPU Core: 6 X Extra CPU Core (30€)"},
            {icon: "", text: "VNC: No VNC (0€)"},
            {icon: "", text: "Automatic Backups: Daily Backups (10d Retention) (25€)"},
            {icon: "", text: "Extra GB Memory: 2 X Extra GB Memory (15€)"},
        ]
    },
    {
        title: "High-End Swiss Dedicated GPU Servers : GPU Server V2",
        price: "25€",
        name: "VPS-rrQlKOAF",
        total: "1049€",
        details: [
            {icon: "../../assets/icons/icon_strike.svg", text: "Select Operative System: debian-10-x86_64 (0€)"},
            {icon: "", text: "Additional IPs: + 5 Ipv4 (15€)"},
            {icon: "", text: "Management Services: Monthly Advanced Management Service (200€)"},
            {icon: "", text: "Additional Disk Space: + 50GB SSD (20€)"},
            {icon: "", text: "Extra CPU Core: 6 X Extra CPU Core (30€)"},
            {icon: "", text: "VNC: No VNC (0€)"},
        ]
    },
    {
        title: "Linux VPS : V2.CH",
        price: "25€",
        name: "VPS-rrQlKOAF",
        total: "342.99€",
        details: [
            {icon: "", text: "Select Operative System: debian-10-x86_64 (0€)"},
        ]
    },
    {
        title: "Linux VPS : V2.CH",
        price: "25€",
        name: "VPS-rrQlKOAF",
        total: "342.99€",
        details: [
            {icon: "", text: "Select Operative System: debian-10-x86_64 (0€)"},
        ]
    }
]


export default function Cart() {

    const [swiperInstance, setSwiperInstance] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (swiperInstance) {
            swiperInstance.on('slideChange', () => {
                setActiveIndex(swiperInstance.activeIndex);
            });
        }
    }, [swiperInstance]);

    return (
        <div>
            <Nav page="cart" />

            <section className="section relative">
                <div className="inside">
                    <CartHeader/>

                    <div className={styles.cartBlur1}></div>
                    <div className={styles.cartBlur2}></div>

                    <div className={styles.sliderContainer}>
                        <Swiper
                            spaceBetween={16}
                            modules={[FreeMode, Scrollbar]}
                            freeMode={true}
                            className={styles.slider}
                            scrollbar={{draggable: true}}
                            onSwiper={setSwiperInstance}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                608: {
                                    slidesPerView: 2,
                                }
                            }}
                        >
                            {PRODUCTS && PRODUCTS.map((product, index) => (
                                <SwiperSlide key={index} className={styles.cartSlide}>
                                    <SingleCartItem
                                        name={product.name}
                                        title={product.title}
                                        price={product.price}
                                        total={product.total}
                                        details={product.details}
                                    />
                                </SwiperSlide>
                            ))}

                        </Swiper>
                        {swiperInstance && (
                            <>
                                <div className={"slider-nav" + (activeIndex === 0 ? " hide" : "")} style={{left: "-32px", transform: "translateY(-50%) scaleX(-1)"}} onClick={() => {
                                    swiperInstance.slidePrev();
                                }}>
                                    <img src={arrowIcon} alt=""/>
                                </div>
                                <div className={"slider-nav " + (activeIndex === swiperInstance.slides.length - 1 ? "hide" : "")} style={{right: "-32px"}} onClick={() => {
                                    swiperInstance.slideNext();
                                }}>
                                    <img src={arrowIcon} alt=""/>
                                </div>
                            </>
                        )}

                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    )
}

const CartHeader = () => {
    return (
        <div className={"flex justify-between items-center " + styles.cartHeader}>
            <div>
                <h1 className={"title text-decorated " + styles.cartHeader__title}>Your cart: <span className={styles.cartHeader__span}>(</span><span className={styles.cartHeader__count}>3</span><span className={styles.cartHeader__span}>)</span></h1>

                <div className="flex flex-wrap items-center gap-3">
                    <Link
                        to={"/login"}
                        className={"btn-secondary"}
                    >
                        <Typography>Login to checkout</Typography>
                    </Link>
                    <Link
                        className={"btn-secondary"}
                        to={"/register"}
                    >
                        <Typography>Register</Typography>
                    </Link>
                </div>
            </div>

            <div className={styles.cartHeader__price}>
                <h2 className={"text-decorated"}>Total price:</h2>
                <p>2352€ <span className={"opacity-75"}>/month</span></p>
            </div>
            <img src={titleBg} alt="title-bg" className={styles.cartHeader__background}/>
        </div>
    )
}