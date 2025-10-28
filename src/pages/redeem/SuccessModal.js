import { Typography, Button } from "@mui/material";
import { useEffect } from "react";
import styles from "./SuccessModal.module.scss";
import rectangleLight from "../../assets/images/giftcard/modal/rectangle_light.png";

export default function SuccessModal({
    isOpen,
    onClose,
    rive,
    RiveComponent,
    riveLoaded,
}) {
    useEffect(() => {
        if (rive && riveLoaded) {
            rive.on("stop", () => {
                rive.pause();
            });
        }
    }, [rive, riveLoaded]);

    useEffect(() => {
        if (isOpen && rive && riveLoaded) {
            setTimeout(() => {
                rive.reset();
                rive.play();
            }, 150);
        }
    }, [isOpen, rive, riveLoaded]);

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className={`${styles.modalWrapper} ${isOpen ? styles.active : ""}`}
            onClick={handleOverlayClick}
        >
            <div className={styles.modalContainer}>
                <div
                    className={`${styles.cardModalImage} ${
                        riveLoaded ? styles.riveLoaded : ""
                    }`}
                >
                    {RiveComponent && <RiveComponent />}
                </div>
                <img
                    src={rectangleLight}
                    alt="Light Background"
                    className={styles.rectangleLightImage}
                />

                <div className={styles.modalContent}>
                    <div className={styles.modalLight}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="560"
                            height="600"
                            viewBox="0 0 560 600"
                            fill="none"
                        >
                            <g
                                style={{ mixBlendMode: "plus-lighter" }}
                                opacity="0.25"
                                filter="url(#filter0_f_2005_2967)"
                            >
                                <path
                                    d="M485 205C485 318.218 393.218 410 280 410C166.782 410 75 318.218 75 205C75 91.7816 166.782 0 280 0C393.218 0 485 91.7816 485 205Z"
                                    fill="url(#paint0_linear_2005_2967)"
                                />
                            </g>
                            <defs>
                                <filter
                                    id="filter0_f_2005_2967"
                                    x="-425"
                                    y="-500"
                                    width="1410"
                                    height="1410"
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB"
                                >
                                    <feFlood
                                        floodOpacity="0"
                                        result="BackgroundImageFix"
                                    />
                                    <feBlend
                                        mode="normal"
                                        in="SourceGraphic"
                                        in2="BackgroundImageFix"
                                        result="shape"
                                    />
                                    <feGaussianBlur
                                        stdDeviation="250"
                                        result="effect1_foregroundBlur_2005_2967"
                                    />
                                </filter>
                                <linearGradient
                                    id="paint0_linear_2005_2967"
                                    x1="280"
                                    y1="132.824"
                                    x2="280"
                                    y2="410"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="#FB5006" />
                                    <stop
                                        offset="1"
                                        stopColor="#FB6306"
                                        stopOpacity="0"
                                    />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    <button className={styles.closeButton} onClick={onClose}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                        >
                            <path
                                opacity="0.4"
                                d="M13 1L7 7M7 7L1 0.999999M7 7L13 13M7 7L1 13"
                                stroke="white"
                                stroke-width="1.5"
                                stroke-linecap="round"
                            />
                        </svg>
                    </button>

                    <div className={styles.modalTextContent}>
                        <Typography className={styles.modalHeading}>
                            You have a €50 gift
                            <br />
                            card waiting for you
                        </Typography>

                        <Typography className={styles.modalSubheading}>
                            Use your gift card credit to enjoy something special
                            <br />
                            —just for you.
                        </Typography>

                        <Button
                            className={styles.modalRedeemButton}
                            onClick={onClose}
                        >
                            <Typography className={styles.modalButtonText}>
                                Redeem Gift Card
                            </Typography>
                        </Button>

                        <button
                            className={styles.modalBackButton}
                            onClick={onClose}
                        >
                            Back
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
