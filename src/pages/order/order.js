import Nav from "../../components/overlay/nav/nav";
import {useEffect, useState} from "react";
import styles from "./order.module.scss";
import {Button, Typography} from "@mui/material";

// import icon_disk from "../../assets/icons/icon_disk.svg";
import icon_cpu from "../../assets/icons/icon_cpu.svg";
import icon_system from "../../assets/icons/icon_system.svg";
import RangeInput from "../../components/rangeInput/rangeInput";

import {stepsData} from "./stepsData";

import debianIcon from  "../../assets/system/debian.svg";
import ubuntuIcon from  "../../assets/system/ubuntu.svg";
import fedoraIcon from  "../../assets/system/fedora.svg";
import centosIcon from  "../../assets/system/centos.svg";
import rockyIcon from  "../../assets/system/rocky.svg";

import non from "../../assets/system/non.svg";
import litespeed from "../../assets/system/litespeed.svg";
import cpanel from "../../assets/system/cpanel.svg";

import arrow_right from "../../assets/icons/arrow_right.svg";
import 'swiper/swiper-bundle.css';
import {Swiper, SwiperSlide} from "swiper/react";
import arrowIcon from "../../assets/icons/arrow_right.svg";
import CustomSelect from "../../components/customSelect/customSelect";

export default function Order(){
    const [orderData, setOrderData] = useState({
        name: "Linux VPS - V1.CH",
        options: {
            diskSpace: 0,
        },
        totalPrice: 2352,
        period: 0,
        operatingSystem: "Debian",
        hostingSolution: "No application"
    });
    const [openSelectIndex, setOpenSelectIndex] = useState(null);

    const [selectedValue, setSelectedValue] = useState([
        "12",
        "24",
        "12",
        "12",
        "12",
        "unlimited",
        "unlimited",
        "unlimited",
    ]);
    const [currentStep, setCurrentStep] = useState(0);
    const [steps] = useState(stepsData);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 560);

    const handleChange = (value, index) => {
        const newSelectedValue = [...selectedValue];
        newSelectedValue[index] = value;
        setSelectedValue(newSelectedValue);
    };

    const handleSelectClick = (index) => {
        setOpenSelectIndex(openSelectIndex === index ? null : index);
    };

    const getInputStyle = (index, size) => {
        if(size === 4){
            if(index === 1){
                return {
                    left: "33%",
                    position: "absolute",
                    transform: "translateX(-50%)"
                }
            } else if(index === 2){
                return {
                    left: "66%",
                    position: "absolute",
                    transform: "translateX(-50%)"
                }
            }
        } else if(size === 5){
            if(index === 1){
                return {
                    left: "25%",
                    position: "absolute",
                    transform: "translateX(-50%)"
                }
            } else if(index === 2){
                return {
                    left: "50%",
                    position: "absolute",
                    transform: "translateX(-50%)"
                }
            }

            else if(index === 3){
                return {
                    right: "25%",
                    position: "absolute",
                    transform: "translateX(50%)"
                }
            }
        }
    }

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 560);
        };

        window.addEventListener('resize', handleResize);

        setCurrentStep(0);
        setOrderData({
            name: "Linux VPS - V1.CH",
            options: {
                diskSpace: 0,
            },
            totalPrice: 2352,
            period: 0,
            operatingSystem: "Debian",
            hostingSolution: "No application"
        });

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [swiperInstance, setSwiperInstance] = useState(null);

    return(
        <div>
            <Nav page="order" />

            <section className="section">
                <div className={styles.blur2}></div>
                <div className="inside" style={{maxWidth: (isMobile ? "auto" : "1312px")}}>
                    <div className="flex md:flex-row flex-col items-stretch md:gap-12 gap-4">
                        <div className={"flex flex-col text-center " + styles.navContainer}>
                            {steps.map((step, index) => (
                                <div
                                    onClick={() => {
                                        swiperInstance.slideTo(index);
                                    }}
                                    className={styles.stepNav + (currentStep >= index ? " " + styles.active : " ") + (index !== 3 && " flex-1")}>
                                    <p className={"text-decorated"} dangerouslySetInnerHTML={{ __html: step[0] }}></p>
                                    {index !== 3 && <div></div>}
                                </div>
                                ))}
                            <div className={styles.totalPrice}>
                                <div className={styles.totalPrice__label}>Total price:</div>
                                <div className={styles.totalPrice__price}>{orderData.totalPrice}€</div>
                                <span className={styles.totalPrice__period + " text-decorated opacity-50"}>/month</span>
                            </div>
                        </div>
                        <div className={"flex-1"}>
                            <header className={styles.orderHeader}>
                                <h1 className={"title"}>{orderData.name}</h1>
                            </header>
                            <div className="flex w-full">
                                <div style={{display: "flex", alignItems: "stretch", paddingBottom: "64px"}}>
                                <Swiper
                                    style={{width: (isMobile ? "340px" : "980px")}}
                                    slidesPerView={1}
                                    spaceBetween={12}
                                    onSlideChange={() => {
                                        setCurrentStep(swiperInstance.activeIndex)
                                    }}
                                    onSwiper={setSwiperInstance}
                                    className={styles.swiper}
                                >
                                    <div className={styles.blur1}></div>

                                    <div className={styles.nextSlide} onClick={() => {
                                        swiperInstance.slideNext();
                                    }}></div>


                                    {steps.length > 0 && steps.map((stepSlide, index) => (

                                        <SwiperSlide key={index} className={styles.order__wrapper__parent} style={{width: (isMobile ? "auto" : "980px")}}>

                                            <div className={styles.order__wrapper + " flex flex-col"}>
                                                {index === 3 && (
                                                    <div>
                                                        <div className={"flex justify-between"}>
                                                            <h3 className={"title text-decorated"}
                                                                style={{fontSize: "24px", fontWeight: 600}}>Order
                                                                Summary</h3>
                                                            <p className={styles.orderSummaryTotalPrice + " text-decorated"}>2352€<br/>
                                                                <p className={styles.orderSummaryTotalPrice__period}>/month</p>
                                                            </p>
                                                        </div>
                                                        <div className={styles.orderSummaryListBg}>
                                                            <div className={styles.orderSummaryList}>
                                                                <div className={styles.orderSummaryList__item}>
                                                                    <div className={styles.orderSummaryList__name}>
                                                                        <img src={icon_cpu} alt=""/>
                                                                        <div>
                                                                            <p className={"text-decorated"}>V1.CH</p>
                                                                            <span
                                                                                className={"text-decorated"}>500GB</span>
                                                                        </div>
                                                                    </div>
                                                                    <p className={"text-decoreated opacity-50"}>12.9€</p>
                                                                </div>
                                                                <div className={styles.orderSummaryList__item}>
                                                                    <div className={styles.orderSummaryList__name}>
                                                                        <img src={icon_cpu} alt=""/>
                                                                        <div>
                                                                            <p className={"text-decorated"}>V1.CH</p>
                                                                            <span
                                                                                className={"text-decorated"}>500GB</span>
                                                                        </div>
                                                                    </div>
                                                                    <p className={"text-decoreated opacity-50"}>12.9€</p>
                                                                </div>
                                                                <div className={styles.orderSummaryList__item}>
                                                                    <div className={styles.orderSummaryList__name}>
                                                                        <img src={icon_cpu} alt=""/>
                                                                        <div>
                                                                            <p className={"text-decorated"}>V1.CH</p>
                                                                            <span
                                                                                className={"text-decorated"}>500GB</span>
                                                                        </div>
                                                                    </div>
                                                                    <p className={"text-decoreated opacity-50"}>12.9€</p>
                                                                </div>
                                                                <div className={styles.orderSummaryList__item}>
                                                                    <div className={styles.orderSummaryList__name}>
                                                                        <img src={icon_cpu} alt=""/>
                                                                        <div>
                                                                            <p className={"text-decorated"}>V1.CH</p>
                                                                            <span
                                                                                className={"text-decorated"}>500GB</span>
                                                                        </div>
                                                                    </div>
                                                                    <p className={"text-decoreated opacity-50"}>12.9€</p>
                                                                </div>
                                                                <div className={styles.orderSummaryList__item}>
                                                                    <div className={styles.orderSummaryList__name}>
                                                                        <img src={icon_cpu} alt=""/>
                                                                        <div>
                                                                            <p className={"text-decorated"}>V1.CH</p>
                                                                            <span
                                                                                className={"text-decorated"}>500GB</span>
                                                                        </div>
                                                                    </div>
                                                                    <p className={"text-decoreated opacity-50"}>12.9€</p>
                                                                </div>
                                                                <div className={styles.orderSummaryList__item}>
                                                                    <div className={styles.orderSummaryList__name}>
                                                                        <img src={icon_cpu} alt=""/>
                                                                        <div>
                                                                            <p className={"text-decorated"}>V1.CH</p>
                                                                            <span
                                                                                className={"text-decorated"}>500GB</span>
                                                                        </div>
                                                                    </div>
                                                                    <p className={"text-decoreated opacity-50"}>12.9€</p>
                                                                </div>
                                                                <div className={styles.orderSummaryList__item}>
                                                                    <div className={styles.orderSummaryList__name}>
                                                                        <img src={icon_cpu} alt=""/>
                                                                        <div>
                                                                            <p className={"text-decorated"}>V1.CH</p>
                                                                            <span
                                                                                className={"text-decorated"}>500GB</span>
                                                                        </div>
                                                                    </div>
                                                                    <p className={"text-decoreated opacity-50"}>12.9€</p>
                                                                </div>
                                                                <div className={styles.orderSummaryList__item}>
                                                                    <div className={styles.orderSummaryList__name}>
                                                                        <img src={icon_cpu} alt=""/>
                                                                        <div>
                                                                            <p className={"text-decorated"}>V1.CH</p>
                                                                            <span
                                                                                className={"text-decorated"}>500GB</span>
                                                                        </div>
                                                                    </div>
                                                                    <p className={"text-decoreated opacity-50"}>12.9€</p>
                                                                </div>
                                                                <div className={styles.orderSummaryList__item}>
                                                                    <div className={styles.orderSummaryList__name}>
                                                                        <img src={icon_cpu} alt=""/>
                                                                        <div>
                                                                            <p className={"text-decorated"}>V1.CH</p>
                                                                            <span
                                                                                className={"text-decorated"}>500GB</span>
                                                                        </div>
                                                                    </div>
                                                                    <p className={"text-decoreated opacity-50"}>12.9€</p>
                                                                </div>
                                                                <div className={styles.orderSummaryList__item}>
                                                                    <div className={styles.orderSummaryList__name}>
                                                                        <img src={icon_cpu} alt=""/>
                                                                        <div>
                                                                            <p className={"text-decorated"}>V1.CH</p>
                                                                            <span
                                                                                className={"text-decorated"}>500GB</span>
                                                                        </div>
                                                                    </div>
                                                                    <p className={"text-decoreated opacity-50"}>12.9€</p>
                                                                </div>
                                                                <div className={styles.orderSummaryList__item}>
                                                                    <div className={styles.orderSummaryList__name}>
                                                                        <img src={icon_cpu} alt=""/>
                                                                        <div>
                                                                            <p className={"text-decorated"}>V1.CH</p>
                                                                            <span
                                                                                className={"text-decorated"}>500GB</span>
                                                                        </div>
                                                                    </div>
                                                                    <p className={"text-decoreated opacity-50"}>12.9€</p>
                                                                </div>
                                                                <div className={styles.orderSummaryList__item}>
                                                                    <div className={styles.orderSummaryList__name}>
                                                                        <img src={icon_cpu} alt=""/>
                                                                        <div>
                                                                            <p className={"text-decorated"}>V1.CH</p>
                                                                            <span
                                                                                className={"text-decorated"}>500GB</span>
                                                                        </div>
                                                                    </div>
                                                                    <p className={"text-decoreated opacity-50"}>12.9€</p>
                                                                </div>
                                                                <div className={styles.orderSummaryList__item}>
                                                                    <div className={styles.orderSummaryList__name}>
                                                                        <img src={icon_cpu} alt=""/>
                                                                        <div>
                                                                            <p className={"text-decorated"}>V1.CH</p>
                                                                            <span
                                                                                className={"text-decorated"}>500GB</span>
                                                                        </div>
                                                                    </div>
                                                                    <p className={"text-decoreated opacity-50"}>12.9€</p>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>
                                                )}

                                                {index === 0 && (
                                                    <div className={styles.order__row}>
                                                        <div
                                                            className={styles.order__row__header + " flex gap-2 md:flex-nowrap flex-wrap items-center"}>
                                                            <img src={icon_system} alt=""/>
                                                            <h3 className={"text-decorated opacity-75 " + styles.productName}>Select
                                                                Operation System</h3>
                                                            <p className={"text-decorated " + styles.order__row__price}>({orderData.operatingSystem})</p>
                                                        </div>
                                                        <div className={"flex justify-between gap-2 mt-6 " + (isMobile && styles.order__option__container)}>
                                                            <div
                                                                onClick={() => {
                                                                    handleSelectClick(0);
                                                                    setOrderData({ ...orderData, operatingSystem: "Debian" });
                                                                }}
                                                                className={styles.order__option + " flex-1 " + (orderData.operatingSystem === "Debian" ? " " + styles.order__option__active + " " : "") + styles.order__option__system}>
                                                                <p className={"text-decorated"}>Debian</p>
                                                                <img
                                                                    src={debianIcon}
                                                                    alt={"debian"}
                                                                />
                                                                <CustomSelect options={[{ label: "12", value: 12 }]}
                                                                    value={selectedValue[0]}
                                                                    onChange={(value) => handleChange(value, 0)}
                                                                    isOpen={openSelectIndex === 0}
                                                                    onClick={() => handleSelectClick(0)} 
                                                                />
                                                                </div>
                                                            <div
                                                                onClick={() => {
                                                                    handleSelectClick(1);
                                                                    setOrderData({ ...orderData, operatingSystem: "Ubuntu" });
                                                                }}
                                                                className={styles.order__option + " flex-1 " + (orderData.operatingSystem === "Ubuntu" ? " " + styles.order__option__active + " " : "") + styles.order__option__system}>
                                                                <p className={"text-decorated"}>Ubuntu</p>
                                                                <img
                                                                    src={ubuntuIcon}
                                                                    alt={"ubuntu"}
                                                                />
                                                                <CustomSelect options={[
                                                                    {label: "24.04", value: 24},
                                                                    {label: "22.04", value: 22},
                                                                ]} value={selectedValue[1]}
                                                                              onChange={(value) => handleChange(value, 1)}
                                                                              isOpen={openSelectIndex === 1}
                                                                              onClick={() => handleSelectClick(1)}
                                                                />
                                                            </div>
                                                            <div
                                                                onClick={() => {
                                                                    handleSelectClick(2);

                                                                    setOrderData({ ...orderData, operatingSystem: "Fedora" });
                                                                }}
                                                                className={styles.order__option + " flex-1 " + (orderData.operatingSystem === "Fedora" ? " " + styles.order__option__active + " " : "") + styles.order__option__system}>
                                                                <p className={"text-decorated"}>Fedora</p>
                                                                <img
                                                                    src={fedoraIcon}
                                                                    alt={"fedora"}
                                                                />
                                                                <CustomSelect options={[
                                                                    {label: "12", value: 12},
                                                                ]}  value={selectedValue[2]}
                                                                              onChange={(value) => handleChange(value, 2)}
                                                                              isOpen={openSelectIndex === 2}
                                                                              onClick={() => handleSelectClick(2)}
                                                                /> </div>
                                                            <div
                                                                onClick={() => {
                                                                    handleSelectClick(3);
                                                                    setOrderData({ ...orderData, operatingSystem: "Centos" });
                                                                }}
                                                                className={styles.order__option + " flex-1 " + (orderData.operatingSystem === "Centos" ? " " + styles.order__option__active + " " : "") + styles.order__option__system}>
                                                                <p className={"text-decorated"}>Centos</p>
                                                                <img
                                                                    src={centosIcon}
                                                                    alt={"debian"}
                                                                />
                                                                <CustomSelect options={[
                                                                    {label: "12", value: 12},
                                                                ]} value={selectedValue[3]}
                                                                              onChange={(value) => handleChange(value, 3)}
                                                                              isOpen={openSelectIndex === 3}
                                                                              onClick={() => handleSelectClick(3)} />
                                                            </div>
                                                            <div
                                                                onClick={() => {
                                                                    handleSelectClick(4);
                                                                    setOrderData({ ...orderData, operatingSystem: "Rocky" });
                                                                }}
                                                                className={styles.order__option + " flex-1 " + (orderData.operatingSystem === "Rocky" ? " " + styles.order__option__active + " " : "") + styles.order__option__system}>
                                                                <p className={"text-decorated"}>Rocky</p>
                                                                <img
                                                                    src={rockyIcon}
                                                                    alt={"debian"}
                                                                />
                                                                <CustomSelect options={[
                                                                    {label: "12", value: 12},
                                                                ]}value={selectedValue[4]}
                                                                              onChange={(value) => handleChange(value, 4)}
                                                                              isOpen={openSelectIndex === 4}
                                                                              onClick={() => handleSelectClick(4)} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                                {index === 0 && (
                                                    <div style={{margin: "0px 0 -10px", height: "1px", width: "100%", backgroundColor: "rgba(255,255,255,.08)"}}></div>
                                                )}
                                                {index === 0 && (
                                                    <div className={styles.order__row}>
                                                        <div
                                                            className={styles.order__row__header + " flex gap-2 md:flex-nowrap flex-wrap items-center"}>
                                                        <img src={icon_system} alt=""/>
                                                            <h3 className={"text-decorated opacity-75 " + styles.productName}>Hosting Solutions</h3>
                                                        </div>
                                                        <div className={"flex justify-between gap-2 mt-6 " + (isMobile && styles.order__option__container)}>
                                                            <div
                                                                onClick={() => {
                                                                    handleSelectClick(5);
                                                                    setOrderData({
                                                                        ...orderData,
                                                                        hostingSolution: "No application"
                                                                    });
                                                                }}
                                                                className={styles.order__option + " flex-1 " + (orderData.hostingSolution === "No application" ? " " + styles.order__option__active + " " : "") + styles.order__option__system}>
                                                                <p className={"text-decorated"}>No application</p>
                                                                <div className={styles.order__option__system__icon}>
                                                                <img
                                                                    src={non}
                                                                    alt={"debian"}
                                                                /></div>
                                                                <CustomSelect options={[
                                                                    {label: "12", value: 12},
                                                                ]} value={selectedValue[5]}
                                                                              onChange={(value) => handleChange(value, 5)}
                                                                              isOpen={openSelectIndex === 5}
                                                                              onClick={() => handleSelectClick(5)} />
                                                            </div>
                                                            <div
                                                                onClick={() => {
                                                                    handleSelectClick(6);
                                                                    setOrderData({
                                                                        ...orderData,
                                                                        hostingSolution: "Litespeed"
                                                                    });
                                                                }}
                                                                className={styles.order__option + " flex-1 " + (orderData.hostingSolution === "Litespeed" ? " " + styles.order__option__active + " " : "") + styles.order__option__system}>
                                                                <p className={"text-decorated"}>Litespeed</p>
                                                                <div className={styles.order__option__system__icon}>
                                                                    <img
                                                                        src={litespeed}
                                                                        alt={"debian"}
                                                                    />
                                                                </div>
                                                                <CustomSelect options={[
                                                                    {label: "(Unlimited domains)", value: "unlimited"},
                                                                ]} value={selectedValue[6]}
                                                                              onChange={(value) => handleChange(value, 6)}
                                                                              isOpen={openSelectIndex === 6}
                                                                              onClick={() => handleSelectClick(6)} />
                                                                </div>
                                                            <div
                                                                onClick={() => {
                                                                    handleSelectClick(7);
                                                                    setOrderData({
                                                                        ...orderData,
                                                                        hostingSolution: "Cpanel"
                                                                    });
                                                                }}
                                                                className={styles.order__option + " flex-1 " + (orderData.hostingSolution === "Cpanel" ? " " + styles.order__option__active + " " : "") + styles.order__option__system}>
                                                                <p className={"text-decorated"}>Cpanel</p>
                                                                <div className={styles.order__option__system__icon}>
                                                                    <img
                                                                        src={cpanel}
                                                                        alt={"debian"}
                                                                    />
                                                                </div>
                                                                <CustomSelect options={[
                                                                    {label: "(Unlimited domains)", value: "unlimited"},
                                                                ]} value={selectedValue[7]}
                                                                              onChange={(value) => handleChange(value, 7)}
                                                                              isOpen={openSelectIndex === 7}
                                                                              onClick={() => handleSelectClick(7)} />
                                                                </div>
                                                            </div>
                                                        </div>

                                                )}

                                                {stepSlide.slice(1).map((step, index) => (

                                                    <div className={styles.order__row}>
                                                        <div
                                                            className={styles.order__row__header + " flex gap-2 md:flex-nowrap flex-wrap items-center"}>
                                                            <img src={step.icon} alt=""/>
                                                            <h3 className={"text-decorated opacity-75 " + styles.productName}>{step.title}</h3>
                                                            {step.type !== "checkbox" &&
                                                                <p className="text-decorated"></p>}
                                                            <p className={"text-decorated " + styles.order__row__price}>{orderData.options[step.name] && "(+" + orderData.options[step.name] + "€)"}</p>
                                                        </div>
                                                        {step.type === "range" &&
                                                            <>
                                                                <RangeInput min={0} max={step.options.length - 1}
                                                                            step={1} value={orderData.options[step.name]}
                                                                            onChange={(value) => {
                                                                                setOrderData({
                                                                                    ...orderData,
                                                                                    options: {
                                                                                        ...orderData.options,
                                                                                        [step.name]: value
                                                                                    }
                                                                                })}}
                                                                                />
                                                                <div className="flex justify-between gap-2 mt-6 relative">
                                                                    {step.options && step.options.map((option, index) => (
                                                                        <div
                                                                            style={getInputStyle(index, step.options.length)}
                                                                            className={styles.rangeInputLegend + " " + (step.options.length === 5 && (index === 1 || index === 3) ? "" : "flex-initial")}>
                                                                            <p className={"text-decorated cursor-pointer"}

                                                                               onClick={() => {
                                                                                   setOrderData({
                                                                                       ...orderData,
                                                                                       options: {
                                                                                           ...orderData.options,
                                                                                           [step.name]: index
                                                                                       }
                                                                                   });
                                                                               }}
                                                                               dangerouslySetInnerHTML={{__html: option.name}}></p>
                                                                        </div>
                                                                    ))}
                                                                </div>
                                                            </>
                                                        }
                                                        {step.type === "radio" &&
                                                            <div className="flex md:flex-nowrap flex-wrap gap-2 mt-6">
                                                                {step.options && step.options.map((option, index) => (
                                                                    <div
                                                                        className={styles.order__option + " flex-1 " + (option.price === orderData.options[step.name] && styles.order__option__active)}
                                                                        onClick={() => {
                                                                            console.log(step.price);
                                                                            setOrderData({
                                                                                ...orderData, // Spread the existing orderData
                                                                                options: {
                                                                                    ...orderData.options, // Spread the existing options
                                                                                    [step.name]: option.price // Set the new key-value pair
                                                                                }
                                                                            });
                                                                            console.log(orderData.options);
                                                                        }}>
                                                                        <p className={"text-decorated"}
                                                                           dangerouslySetInnerHTML={{__html: option.name}}></p>
                                                                    </div>

                                                                ))}
                                                            </div>}
                                                        {step.type === "checkbox" &&
                                                            <div className="flex items-center gap-2 mt-6"
                                                                 onClick={() => {
                                                                     setOrderData({
                                                                         ...orderData,
                                                                         options: {
                                                                             ...orderData.options,
                                                                             [step.name]: !orderData.options[step.name] // use square brackets for dynamic keys
                                                                         }
                                                                     })
                                                                 }}>
                                                                <div
                                                                    className={styles.order__checkbox + " " + (orderData.options[step.name] ? styles.order__checkbox__active : "")}></div>
                                                                <p className={"text-decorated"}>{step.title}</p>
                                                            </div>}


                                                    </div>
                                                ))}

                                                {index === 3 && (
                                                    <div>
                                                        <div className={"flex gap-2 mb-6 " + (isMobile && styles.order__option__container)}>
                                                            <div
                                                                onClick={() => {
                                                                    setOrderData({ ...orderData, period: 0 });
                                                                }}
                                                                className={styles.order__option + " flex-1 " + styles.order__option__badge + (orderData.period === 0 ? " " + styles.order__option__active : "")}>
                                                                <p className={"text-decorated"}>1 month</p>
                                                            </div>
                                                            <div
                                                                onClick={() => {
                                                                    setOrderData({ ...orderData, period: 1 });
                                                                }}
                                                                className={styles.order__option + " flex-1 " + styles.order__option__badge + (orderData.period === 1 ? " " + styles.order__option__active : "")}>
                                                                <p className={"text-decorated"}>3 Months</p>
                                                                <span>-10%</span>
                                                            </div>
                                                            <div
                                                                onClick={() => {
                                                                    setOrderData({ ...orderData, period: 2 });
                                                                }}
                                                                className={styles.order__option + " flex-1 " + styles.order__option__badge + (orderData.period === 2 ? " " + styles.order__option__active : "")}>
                                                                <p className={"text-decorated"}>6 Months</p>
                                                                <span>-20%</span>
                                                            </div>
                                                            <div
                                                                onClick={() => {
                                                                    setOrderData({ ...orderData, period: 3 });
                                                                }}
                                                                className={styles.order__option + " flex-1 " + styles.order__option__badge + (orderData.period === 3 ? " " + styles.order__option__active : "")}>
                                                                <p className={"text-decorated"}>12 Months</p>
                                                                <span>-30%</span>
                                                            </div>
                                                        </div>
                                                        <div
                                                            className={"flex items-stretch " + styles.orderFooterSummary}>
                                                            <div className={styles.orderFooterSummary__left}>
                                                                <input type="text" className={"input"} style={{boxSizing: "border-box"}}
                                                                       placeholder={"Desired Hostname"}/>
                                                                <p className={"text-decorated"}>generate</p>
                                                            </div>
                                                            <Button className={"btn"} style={{height: "48px"}}>
                                                                <Typography>Add to Cart</Typography>
                                                                <img src={arrow_right} alt=""/>
                                                            </Button>
                                                        </div>
                                                    </div>
                                                )}

                                            </div>

                                        </SwiperSlide>

                                    ))}

                                    {swiperInstance && (
                                        <>
                                            <div className={"slider-nav slider-nav-hard" + (currentStep === 0 ? " hide" : "")} style={{
                                                left: "-52px",
                                                transform: "translateY(-50%) scaleX(-1)",
                                                top: "45%"
                                            }} onClick={() => {
                                                swiperInstance.slideTo(currentStep - 1);
                                            }}>
                                                <img src={arrowIcon} alt=""/>
                                            </div>
                                            <div
                                                className={"slider-nav slider-nav-hard " + (currentStep === swiperInstance.slides.length - 1 ? "hide" : "")}
                                                style={{right: "-96px", top: "45%"}} onClick={() => {
                                                swiperInstance.slideTo(currentStep + 1);
                                            }}>
                                                <img src={arrowIcon} alt=""/>
                                            </div>
                                        </>
                                    )}
                                </Swiper>
                                </div>

                            </div>

                            <div className={styles.order__progressbar + " w-full items-center"}>
                                {steps.map((step, index) => (
                                    <div className={"flex-1" + (currentStep >= index ? " " + styles.active : "")}
                                         onClick={() => {
                                             swiperInstance.slideTo(index);
                                         }}></div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}