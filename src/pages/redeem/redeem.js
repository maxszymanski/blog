import { useState } from "react";
import { Typography, Button } from "@mui/material";
import styles from "./redeem.module.scss";
import Nav from "../../components/overlay/nav/nav";
import Footer from "../../components/overlay/footer/footer";
import Dots from "../../components/overlay/dots/dots";
import SuccessModal from "./SuccessModal";
import { useRive } from "@rive-app/react-canvas";
import cardAnimRive from "../../assets/rive/redeem/Card.riv";

import lightBg from "../../assets/images/giftcard/rectangle_light2.png";
import grid1 from "../../assets/images/giftcard/grid1.svg";
import grid2 from "../../assets/images/giftcard/grid2.svg";
import grid3 from "../../assets/images/giftcard/grid3.svg";
import giftcard from "../../assets/images/giftcard/giftcard.png";
import lines from "../../assets/images/giftcard/lines.svg";
import rightLight from "../../assets/images/giftcard/rightLight.svg";

export default function Redeem() {
    const [giftCardCode, setGiftCardCode] = useState("");
    const [error, setError] = useState("");
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [riveLoaded, setRiveLoaded] = useState(false);

    const { rive, RiveComponent } = useRive({
        src: cardAnimRive,
        autoplay: false,
        stateMachines: "State Machine 1",
        onLoad: () => {
            setRiveLoaded(true);
        },
    });

    const handleSubmit = () => {
        if (!giftCardCode.trim()) {
            setError("Invalid gift card code. Please check and try again");
            return;
        }

        setError("");
        setShowSuccessModal(true);
        console.log("Gift card code:", giftCardCode);
    };

    const closeModal = () => {
        setShowSuccessModal(false);
        setGiftCardCode("");
    };

    return (
        <div>
            <Nav page="redeem" />

            <section className="section pb-[270px]">
                <div className={styles.container}>
                    <div className={styles.leftSection}>
                        <div className={styles.orangeBlur}></div>
                        <img src={lightBg} alt="" className={styles.lightBg} />

                        <img src={grid1} alt="" className={styles.grid1} />
                        <img src={grid2} alt="" className={styles.grid2} />
                        <img src={grid3} alt="" className={styles.grid3} />

                        <div className={styles.dots1}>
                            <Dots type="home-services1" />
                        </div>
                        <div className={styles.dots2}>
                            <Dots type="home-services2" />
                        </div>

                        <div className={styles.content}>
                            <Typography
                                className={styles.heading}
                                data-aos="fade-up"
                            >
                                <span className={styles.headingLine1}>
                                    Let's Redeem
                                </span>
                                <br className={styles.headingLineBreak} />
                                <span className={styles.headingLine2}>
                                    Your Gift Card
                                </span>
                            </Typography>

                            <Typography
                                className={styles.subheading}
                                data-aos="fade-up"
                                data-aos-delay="100"
                            >
                                Your Gift Card Adventure Begins!
                            </Typography>

                            <div
                                className={styles.inputContainer}
                                data-aos="fade-up"
                                data-aos-delay="200"
                            >
                                <div className={styles.inputWrapper}>
                                    <input
                                        type="text"
                                        value={giftCardCode}
                                        onChange={(e) =>
                                            setGiftCardCode(e.target.value)
                                        }
                                        className={styles.input}
                                        placeholder="Gift Card PIN"
                                    />
                                    <label className={styles.label}>CODE</label>
                                </div>
                                <Typography className={styles.error}>
                                    {error || " "}
                                </Typography>
                            </div>

                            <Button
                                className={styles.redeemButton}
                                onClick={handleSubmit}
                                data-aos="fade-up"
                                data-aos-delay="300"
                                disableRipple
                            >
                                <Typography className={styles.buttonText}>
                                    Redeem Gift Card
                                </Typography>
                            </Button>

                            <div
                                className={styles.mobileGiftCard}
                                data-aos="fade-up"
                                data-aos-delay="400"
                            >
                                <img
                                    src={giftcard}
                                    alt="Gift Card"
                                    className={styles.mobileGiftCardImage}
                                />
                            </div>
                        </div>
                    </div>

                    <div className={styles.rightSection} data-aos="fade-left">
                        <img src={lines} alt="" className={styles.lines} />

                        <img
                            src={rightLight}
                            alt=""
                            className={styles.rightLight}
                        />

                        <div className={styles.gradientOverlay}></div>

                        <img
                            src={giftcard}
                            alt="Gift Card"
                            className={styles.giftCard}
                        />
                    </div>
                </div>
            </section>

            <Footer />

            <SuccessModal
                isOpen={showSuccessModal}
                onClose={closeModal}
                rive={rive}
                RiveComponent={RiveComponent}
                riveLoaded={riveLoaded}
            />
        </div>
    );
}
