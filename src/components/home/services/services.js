// >> Modules
import styles from "./services.module.scss";
import { Button, Typography } from "@mui/material";
import { useState } from "react";

import icon_chip from "assets/icons/icon_chip.svg";
import icon_lock from "assets/icons/icon_lock.svg";
import icon_shield from "assets/icons/icon_shield.svg";
import icon_strike from "assets/icons/icon_strike.svg";
import icon_web from "assets/icons/icon_web.svg";

import icon_stoper from "assets/icons/icon_stoper.svg";
import icon_fire from "assets/icons/icon_fire.svg";

// >> Components
import Dots from "components/overlay/dots/dots";
import OnePoint from "./onePoint/onePoint";

import arrow from "../../../assets/icons/arrow_right.svg";

// >> Script
export default function Services(props) {
    const [badges] = useState({
        "Instant Deploy": {
            name: "Instant Deploy",
            icon: icon_stoper,
        },
        "Most popular": {
            name: "Most popular",
            icon: icon_fire,
        },
    });

    const [list] = useState([
        {
            name: "VPS",
            icon: icon_shield,
            points: [
                {
                    icon: icon_lock,
                    name: "Kali Linux VPS",
                    priceFrom: 12.35,
                    badges: [badges["Most popular"]],
                    desc: "Experience Unmatched Cybersecurity with Our Kali Linux VPS Workstations\nOffshore, No KYC, Anonymous, no logs\n\n- Instant Deploy ( 1 Click Deploy )\n\nUnlock the full potential of ethical hacking and cybersecurity with our cutting-edge Kali Linux VPS Workstations. Tailored for security professionals and ethical hackers, our virtual private servers are configured with Kali Linux, the premier platform for advanced penetration testing and security auditing.",
                    leftText: "",
                    rightText: "",
                },
                {
                    icon: icon_web,
                    name: "Web Hosting",
                    priceFrom: 5.99,
                    badges: [badges["Most popular"]],
                    desc: "",
                    leftText:
                        "- Domain not included\n- Cpanel panel\n- PHP Selector. PHP versions can be switched.\n- Free Let's Encrypt SSL Certificates (HTTPS)\n- Anonymized access logs by default",
                    rightText:
                        "- Free Basic Anti-DDoS Protection Service\n- App Installer for popular software available",
                },
                {
                    icon: icon_strike,
                    name: "Linux VPS",
                    priceFrom: 12.9,
                    badges: [badges["Instant Deploy"], badges["Most popular"]],
                    desc: "Offshore, No KYC, Anonymous, no logs",
                    leftText:
                        "- Fully DMCA Ignored\n- 100Mbp/s available\n- 1 IPv4 dedicated IP included\n- Full Disk Encryption available",
                    rightText:
                        "- Custom ISO Installs\n- Free Basic DDoS Protection Service\n- Anytime OS Reinstallation\n- Dedicated CPU and RAM resources\n- Management service available",
                },
                {
                    icon: icon_lock,
                    name: "Kali Linux VPS",
                    priceFrom: 12.35,
                    badges: [badges["Most popular"]],
                    desc: "Experience Unmatched Cybersecurity with Our Kali Linux VPS Workstations\nOffshore, No KYC, Anonymous, no logs\n\n- Instant Deploy ( 1 Click Deploy )\n\nUnlock the full potential of ethical hacking and cybersecurity with our cutting-edge Kali Linux VPS Workstations. Tailored for security professionals and ethical hackers, our virtual private servers are configured with Kali Linux, the premier platform for advanced penetration testing and security auditing.",
                    leftText: "",
                    rightText: "",
                },
            ],
        },
        {
            name: "Webhosting",
            icon: icon_web,
            points: [
                {
                    icon: icon_strike,
                    name: "Linux VPS",
                    priceFrom: 12.9,
                    badges: [badges["Instant Deploy"], badges["Most popular"]],
                    desc: "Offshore, No KYC, Anonymous, no logs",
                    leftText:
                        "- Fully DMCA Ignored\n- 100Mbp/s available\n- 1 IPv4 dedicated IP included\n- Full Disk Encryption available",
                    rightText:
                        "- Custom ISO Installs\n- Free Basic DDoS Protection Service\n- Anytime OS Reinstallation\n- Dedicated CPU and RAM resources\n- Management service available",
                },
                {
                    icon: icon_web,
                    name: "Web Hosting",
                    priceFrom: 5.99,
                    badges: [badges["Most popular"]],
                    desc: "",
                    leftText:
                        "- Domain not included\n- Cpanel panel\n- PHP Selector. PHP versions can be switched.\n- Free Let's Encrypt SSL Certificates (HTTPS)\n- Anonymized access logs by default",
                    rightText:
                        "- Free Basic Anti-DDoS Protection Service\n- App Installer for popular software available",
                },
                {
                    icon: icon_lock,
                    name: "Kali Linux VPS",
                    priceFrom: 12.35,
                    badges: [badges["Most popular"]],
                    desc: "Experience Unmatched Cybersecurity with Our Kali Linux VPS Workstations\nOffshore, No KYC, Anonymous, no logs\n\n- Instant Deploy ( 1 Click Deploy )\n\nUnlock the full potential of ethical hacking and cybersecurity with our cutting-edge Kali Linux VPS Workstations. Tailored for security professionals and ethical hackers, our virtual private servers are configured with Kali Linux, the premier platform for advanced penetration testing and security auditing.",
                    leftText: "",
                    rightText: "",
                },
            ],
        },
        {
            name: "Baremetal server",
            icon: icon_strike,
            points: [
                {
                    icon: icon_strike,
                    name: "Linux VPS",
                    priceFrom: 12.9,
                    badges: [badges["Instant Deploy"], badges["Most popular"]],
                    desc: "Offshore, No KYC, Anonymous, no logs",
                    leftText:
                        "- Fully DMCA Ignored\n- 100Mbp/s available\n- 1 IPv4 dedicated IP included\n- Full Disk Encryption available",
                    rightText:
                        "- Custom ISO Installs\n- Free Basic DDoS Protection Service\n- Anytime OS Reinstallation\n- Dedicated CPU and RAM resources\n- Management service available",
                },
                {
                    icon: icon_web,
                    name: "Web Hosting",
                    priceFrom: 5.99,
                    badges: [badges["Most popular"]],
                    desc: "",
                    leftText:
                        "- Domain not included\n- Cpanel panel\n- PHP Selector. PHP versions can be switched.\n- Free Let's Encrypt SSL Certificates (HTTPS)\n- Anonymized access logs by default",
                    rightText:
                        "- Free Basic Anti-DDoS Protection Service\n- App Installer for popular software available",
                },
            ],
        },
        {
            name: "Pentesting Workstation",
            icon: icon_strike,
            points: [
                {
                    icon: icon_strike,
                    name: "Linux VPS",
                    priceFrom: 12.9,
                    badges: [badges["Instant Deploy"], badges["Most popular"]],
                    desc: "Offshore, No KYC, Anonymous, no logs",
                    leftText:
                        "- Fully DMCA Ignored\n- 100Mbp/s available\n- 1 IPv4 dedicated IP included\n- Full Disk Encryption available",
                    rightText:
                        "- Custom ISO Installs\n- Free Basic DDoS Protection Service\n- Anytime OS Reinstallation\n- Dedicated CPU and RAM resources\n- Management service available",
                },
            ],
        },
        {
            name: "GPU Solutions",
            icon: icon_chip,
            points: [
                {
                    icon: icon_strike,
                    name: "Linux VPS",
                    priceFrom: 12.9,
                    badges: [badges["Instant Deploy"], badges["Most popular"]],
                    desc: "Offshore, No KYC, Anonymous, no logs",
                    leftText:
                        "- Fully DMCA Ignored\n- 100Mbp/s available\n- 1 IPv4 dedicated IP included\n- Full Disk Encryption available",
                    rightText:
                        "- Custom ISO Installs\n- Free Basic DDoS Protection Service\n- Anytime OS Reinstallation\n- Dedicated CPU and RAM resources\n- Management service available",
                },
                {
                    icon: icon_web,
                    name: "Web Hosting",
                    priceFrom: 5.99,
                    badges: [badges["Most popular"]],
                    desc: "",
                    leftText:
                        "- Domain not included\n- Cpanel panel\n- PHP Selector. PHP versions can be switched.\n- Free Let's Encrypt SSL Certificates (HTTPS)\n- Anonymized access logs by default",
                    rightText:
                        "- Free Basic Anti-DDoS Protection Service\n- App Installer for popular software available",
                },
                {
                    icon: icon_lock,
                    name: "Kali Linux VPS",
                    priceFrom: 12.35,
                    badges: [badges["Most popular"]],
                    desc: "Experience Unmatched Cybersecurity with Our Kali Linux VPS Workstations\nOffshore, No KYC, Anonymous, no logs\n\n- Instant Deploy ( 1 Click Deploy )\n\nUnlock the full potential of ethical hacking and cybersecurity with our cutting-edge Kali Linux VPS Workstations. Tailored for security professionals and ethical hackers, our virtual private servers are configured with Kali Linux, the premier platform for advanced penetration testing and security auditing.",
                    leftText: "",
                    rightText: "",
                },
                {
                    icon: icon_lock,
                    name: "Kali Linux VPS",
                    priceFrom: 12.35,
                    badges: [badges["Most popular"]],
                    desc: "Experience Unmatched Cybersecurity with Our Kali Linux VPS Workstations\nOffshore, No KYC, Anonymous, no logs\n\n- Instant Deploy ( 1 Click Deploy )\n\nUnlock the full potential of ethical hacking and cybersecurity with our cutting-edge Kali Linux VPS Workstations. Tailored for security professionals and ethical hackers, our virtual private servers are configured with Kali Linux, the premier platform for advanced penetration testing and security auditing.",
                    leftText: "",
                    rightText: "",
                },
            ],
        },
        {
            name: "VPN",
            icon: icon_lock,
            points: [
                {
                    icon: icon_strike,
                    name: "Linux VPS",
                    priceFrom: 12.9,
                    badges: [badges["Instant Deploy"], badges["Most popular"]],
                    desc: "Offshore, No KYC, Anonymous, no logs",
                    leftText:
                        "- Fully DMCA Ignored\n- 100Mbp/s available\n- 1 IPv4 dedicated IP included\n- Full Disk Encryption available",
                    rightText:
                        "- Custom ISO Installs\n- Free Basic DDoS Protection Service\n- Anytime OS Reinstallation\n- Dedicated CPU and RAM resources\n- Management service available",
                },
                {
                    icon: icon_web,
                    name: "Web Hosting",
                    priceFrom: 5.99,
                    badges: [badges["Most popular"]],
                    desc: "",
                    leftText:
                        "- Domain not included\n- Cpanel panel\n- PHP Selector. PHP versions can be switched.\n- Free Let's Encrypt SSL Certificates (HTTPS)\n- Anonymized access logs by default",
                    rightText:
                        "- Free Basic Anti-DDoS Protection Service\n- App Installer for popular software available",
                },
                {
                    icon: icon_lock,
                    name: "Kali Linux VPS",
                    priceFrom: 12.35,
                    badges: [badges["Most popular"]],
                    desc: "Experience Unmatched Cybersecurity with Our Kali Linux VPS Workstations\nOffshore, No KYC, Anonymous, no logs\n\n- Instant Deploy ( 1 Click Deploy )\n\nUnlock the full potential of ethical hacking and cybersecurity with our cutting-edge Kali Linux VPS Workstations. Tailored for security professionals and ethical hackers, our virtual private servers are configured with Kali Linux, the premier platform for advanced penetration testing and security auditing.",
                    leftText: "",
                    rightText: "",
                },
                {
                    icon: icon_lock,
                    name: "Kali Linux VPS",
                    priceFrom: 12.35,
                    badges: [badges["Most popular"]],
                    desc: "Experience Unmatched Cybersecurity with Our Kali Linux VPS Workstations\nOffshore, No KYC, Anonymous, no logs\n\n- Instant Deploy ( 1 Click Deploy )\n\nUnlock the full potential of ethical hacking and cybersecurity with our cutting-edge Kali Linux VPS Workstations. Tailored for security professionals and ethical hackers, our virtual private servers are configured with Kali Linux, the premier platform for advanced penetration testing and security auditing.",
                    leftText: "",
                    rightText: "",
                },
            ],
        },
    ]);
    const [animSmoothnesFix, setAnimSmoothnesFix] = useState(null);
    const [animSmoothnesFix2, setAnimSmoothnesFix2] = useState(null);
    const [selectedList, setSelectedList] = useState(list[0]);
    const [selectedPoint, setSelectedPoint] = useState(0);

    const changeSelectedList = (element) => {
        setAnimSmoothnesFix(selectedList);
        setAnimSmoothnesFix2(element);
        setTimeout(() => {
            setSelectedList(element);
            setSelectedPoint(0);
            setAnimSmoothnesFix2(null);
        }, 10);
    };

    return (
        <div className={styles.section}>
            <div className={styles.inside}>
                <div className={styles.hideMobile}>
                    <Dots type="home-services1" />
                    <Dots type="home-services2" />
                </div>

                <h2 className={styles.title} data-aos="fade-up">
                    Our services range
                </h2>
                <div className={styles.desc} data-aos="fade-up">
                    <Typography>
                        Anonymity, Uncensored, Security Your one and only
                        destination for true offshore hosting services,
                    </Typography>
                </div>
                <div className={styles.services}>
                    <div className={styles.categories} data-aos="fade-up">
                        {list.map((element, index) => {
                            return (
                                <Button
                                    className={styles.oneCategory}
                                    onClick={() => {
                                        changeSelectedList(element);
                                    }}
                                    data-active={
                                        selectedList === element ? true : false
                                    }
                                    disableRipple
                                >
                                    <img src={element.icon} alt="" />
                                    <Typography>{element.name}</Typography>
                                </Button>
                            );
                        })}
                    </div>
                    <div className={styles.lists} data-aos="fade-up">
                        <div
                            className={styles.listNav + " slider-nav"}
                            style={{
                                left: "-8px",
                                transform: "scaleX(-1) translateY(-50%)",
                            }}
                            onClick={() => {
                                const index = selectedPoint;
                                if (index === 0) {
                                    setSelectedPoint(
                                        selectedList.points.length - 1
                                    );
                                } else {
                                    setSelectedPoint(selectedPoint - 1);
                                }
                            }}
                        >
                            <img src={arrow} alt="" />
                        </div>
                        <div
                            className={styles.listNav + " slider-nav"}
                            style={{
                                right: "-8px",
                            }}
                            onClick={() => {
                                const index = selectedPoint;
                                if (index === selectedList.points.length - 1) {
                                    setSelectedPoint(0);
                                } else {
                                    setSelectedPoint(selectedPoint + 1);
                                }
                            }}
                        >
                            <img src={arrow} alt="" />
                        </div>
                        {list.map((element, index) => {
                            return (
                                <div
                                    className={styles.oneList}
                                    data-active={
                                        selectedList === element ? true : false
                                    }
                                    data-smoothfix={
                                        animSmoothnesFix === element
                                            ? true
                                            : false
                                    }
                                    data-smoothfix2={
                                        animSmoothnesFix2 === element
                                            ? true
                                            : false
                                    }
                                >
                                    {element.points.map((element, index) => {
                                        return (
                                            <OnePoint
                                                {...element}
                                                selectedPoint={selectedPoint}
                                                setSelectedPoint={
                                                    setSelectedPoint
                                                }
                                                index={index}
                                                key={index}
                                            />
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                    <div className={styles.squares} data-aos="fade-up">
                        {selectedList.points.map((element, index) => {
                            return (
                                <div
                                    className={styles.oneSquare}
                                    data-active={
                                        selectedPoint === index ? true : false
                                    }
                                    onClick={() => {
                                        setSelectedPoint(index);
                                    }}
                                ></div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
