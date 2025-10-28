// >> Modules
import styles from "./footer.module.scss";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

import logo from "assets/logo.png";

// >> Components
import Dots from "components/overlay/dots/dots";

// >> Script
export default function Footer(props) {
    return (
        <div className={styles.section}>
            {/* <Dots type="footer1" /> */}
            <div className={styles.inside} data-aos="fade-up">
                <div className={styles.left}>
                    <Link to="/" className={styles.logo}>
                        <img src={logo} alt="PrivateAlps" />
                    </Link>
                    <div className={styles.stripe}></div>
                    <Typography className={styles.copyRight}>
                        Copyright © 2020 - 2024 <span>PrivateAlps.</span> All
                        rights reserved.
                    </Typography>
                </div>
                <div className={styles.right}>
                    <div className={styles.oneList}>
                        <Link to="/" className={styles.oneTab}>
                            <Typography>Home</Typography>
                        </Link>
                        <Link to="/services" className={styles.oneTab}>
                            <Typography>Services</Typography>
                        </Link>
                        <Link to="/affiliate" className={styles.oneTab}>
                            <Typography>Affiliate</Typography>
                        </Link>
                        <Link to="/faq" className={styles.oneTab}>
                            <Typography>FAQ</Typography>
                        </Link>
                        <Link to="/contact" className={styles.oneTab}>
                            <Typography>Contact</Typography>
                        </Link>
                    </div>
                    <div className={styles.oneList}>
                        <a
                            href="https://google.com"
                            target="_blank"
                            rel="noreferrer"
                            className={styles.oneTab}
                        >
                            <Typography>Terms of Service</Typography>
                        </a>
                        <a
                            href="https://google.com"
                            target="_blank"
                            rel="noreferrer"
                            className={styles.oneTab}
                        >
                            <Typography>Privacy Policy</Typography>
                        </a>
                        <a
                            href="https://google.com"
                            target="_blank"
                            rel="noreferrer"
                            className={styles.oneTab}
                        >
                            <Typography>Network Policy</Typography>
                        </a>
                        <a
                            href="https://google.com"
                            target="_blank"
                            rel="noreferrer"
                            className={styles.oneTab}
                        >
                            <Typography>Telegram</Typography>
                        </a>
                        <a
                            href="https://google.com"
                            target="_blank"
                            rel="noreferrer"
                            className={styles.oneTab}
                        >
                            <Typography>Tor Mirror</Typography>
                        </a>
                    </div>
                    <Dots type="footer2" />
                </div>
            </div>
        </div>
    );
}
