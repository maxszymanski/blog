import styles from "./affiliateHow.module.scss";
import Dots from "../overlay/dots/dots";
import {Typography} from "@mui/material";
import rightImg_top from "../../assets/images/affiliate/affiliateHow.png";
import rightImg_bottom from "../../assets/images/affiliate/affiliateHowBg.png";


export default function AffiliateHow(props) {
    return (
        <section className={styles.section + " mt-8"}>
            <div className={styles.inside}>
                <h2 className="title mb-12" data-aos="fade-right">How it works?</h2>
                <div className={styles.bottom}>
                    <div className={styles.left} data-aos="fade-right">
                        {props.list.map((element, index) => {
                            return (
                                <div
                                    className={styles.onePoint}
                                    data-type={props.type}
                                    data-number={index + 1}
                                    key={index}
                                >
                                    {index + 1 === 2 ? (
                                        <Dots type="services-usedFor-2"/>
                                    ) : null}
                                    <div className={styles.icon}>
                                        <img
                                            src={element.icon}
                                            className={styles.rightArrow}
                                            alt="Icon"
                                        />
                                    </div>
                                    <div className={styles.texts}>
                                        <Typography
                                            className={styles.pointTitle}
                                        >
                                            {element.title}
                                        </Typography>
                                        {element.desc ? (
                                            <Typography className={styles.desc}>
                                                {element.desc}
                                            </Typography>
                                        ) : null}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className={styles.right}>
                        <div className={styles.rightImg} data-aos="fade-left">
                            <img
                                src={rightImg_top}
                                className={styles.topImg}
                                alt=""
                            />
                            <img
                                src={rightImg_bottom}
                                className={styles.bottomImg}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}