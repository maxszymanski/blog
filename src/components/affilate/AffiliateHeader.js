import {Button, Typography} from "@mui/material";
import arrow_right from "../../assets/icons/arrow_right.svg";
import animShadow from "../../assets/images/home/hero/animShadow.png";
import styles from "./affiliateHeader.module.scss";

export default function AffiliateHeader() {
    return (
        <header className={styles.header}>
            <section className={"section"}>
                <div className={"inside"}>
                    <div
                        style={{maxWidth: "560px"}}
                        className={"text-center flex flex-col gap-3 justify-center w-full mx-auto relative md:pt-24 pb-24"}>
                        <h2 className={"title text-center"} data-aos="fade-up">Affiliate Program</h2>
                        <p className={"text"} data-aos="fade-up">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et justo
                            eget eros lobortis ullamcorper et non leo. Cras et augue at dui accumsan mollis vitae in
                            purus.</p>
                        <Button
                            data-aos="fade-up"
                            className={"btn mx-auto"}
                            onClick={() => {
                                // View more
                            }}
                            disableRipple
                        >
                            <Typography>Start Earning Now</Typography>
                            <img src={arrow_right} alt=""/>
                        </Button>
                        <img src={animShadow} className={styles.animShadow} alt=""/>
                    </div>
                </div>
            </section>

        </header>
    )
}