import {useState} from "react";
import styles from "./affiliateForm.module.scss";
import {Button, Typography} from "@mui/material";
import arrow_right from "../../assets/icons/arrow_right.svg";
import icon_blocks from "../../assets/icons/icon_blocks.svg";

import formDots from "../../assets/images/affiliate/formDots.png";

import affiliateFormBackground from "../../assets/images/affiliate/formBg.png";
import RangeInput from "../rangeInput/rangeInput";

export default function AffiliateForm() {
    const [affilateData, setAffilateData] = useState({
        lorem1: "",
        lorem2: 5,
        lorem3: 5,
    });

    return (
        <div className={"flex md:items-center py-24 " + styles.affiliateContainer}>
            <div className="flex-1">
                <div
                    data-aos="fade-right"
                    className={"relative"}
                    style={{
                    width: "100%",
                    maxWidth: "465px"
                }}>
                    <h2 className={"title text-left"}>Lorem ipsum dolor</h2>

                    <p
                        style={{marginTop: "16px"}}
                        className={"text"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae dictum
                        ipsum. Nam quis nibh consequat eros convallis malesuada sit amet nec sem. Morbi non mollis
                        elit.</p>

                    <hr style={{
                        margin: "32px 0",
                        borderColor: "rgba(255,255,255,.12)"
                    }}/>

                    <Button
                        className={"btn"}
                        onClick={() => {
                            // View more
                        }}
                        disableRipple
                    >
                        <Typography>Start Earning Now</Typography>
                        <img src={arrow_right} alt=""/>
                    </Button>

                    <img src={formDots} className={styles.affiliateDots} alt=""/>
                </div>

            </div>
            <div className="flex-1"
                 data-aos="fade-left">
                <div className={styles.affiliateForm}>
                    <img src={affiliateFormBackground} className={styles.affiliateFormBackground} alt=""/>
                    <div className="flex gap-2">
                        <img src={icon_blocks} alt=""/>
                        <p className={"text " + styles.affiliateFormHeading}>Lorem ipsum dolor</p>
                    </div>
                    <input
                        value={affilateData.lorem1}
                        onChange={(e) => setAffilateData({...affilateData, lorem1: e.target.value})}
                        type="text"
                        className={"input w-full"}
                        placeholder={"Lorem Ipsum dolor"}/>
                    <hr/>
                    <div className="flex gap-2">
                        <img src={icon_blocks} alt=""/>
                        <p className={"text " + styles.affiliateFormHeading}>Lorem ipsum</p>
                    </div>
                    <RangeInput min={0} max={10} step={1} value={affilateData.lorem2}
                                onChange={(value) => setAffilateData({...affilateData, lorem2: value})}
                    />
                    <div className="flex" style={{marginTop: "-12px"}}>
                        <div className="flex-1 text-decorated cursor-pointer" onClick={() => {
                            setAffilateData({...affilateData, lorem2: 0})
                        }}>0
                        </div>
                        <div className="flex-1 text-center text-decorated cursor-pointer" onClick={() => {
                            setAffilateData({...affilateData, lorem2: 5})
                        }}>5
                        </div>
                        <div className="flex-1 text-right text-decorated cursor-pointer" onClick={() => {
                            setAffilateData({...affilateData, lorem2: 10})
                        }}>10
                        </div>
                    </div>

                    <hr/>
                    <div className="flex gap-2">
                        <img src={icon_blocks} alt=""/>
                        <p className={"text " + styles.affiliateFormHeading}>Lorem ipsum</p>
                    </div>
                    <RangeInput min={0} max={10} step={1} value={affilateData.lorem3}     onChange={(value) => setAffilateData({...affilateData, lorem3: value})}
                    />
                    <div className="flex" style={{marginTop: "-12px"}}>
                        <div className="flex-1 text-decorated cursor-pointer" onClick={() => {
                            setAffilateData({...affilateData, lorem3: 0})
                        }}>0</div>
                        <div className="flex-1 text-center text-decorated cursor-pointer" onClick={() => {
                            setAffilateData({...affilateData, lorem3: 5})
                        }}>5</div>
                        <div className="flex-1 text-right text-decorated cursor-pointer" onClick={() => {
                            setAffilateData({...affilateData, lorem3: 10})
                        }}>10</div>
                    </div>

                    <hr/>
                    <div className={"flex flex-wrap justify-between items-end " + styles.affiliateBottom }>
                        <p
                            style={{
                                fontSize: "24px",
                                fontWeight: 600
                            }}
                            className={"text-decorated"}>Lorem ipsum:</p>
                        <span className={styles.affiliateForm__price}>2352€</span>
                    </div>
                </div>
            </div>
        </div>
    )
}