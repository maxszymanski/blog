import styles from "../login/login.module.scss"
import {Link} from "react-router-dom";
import captcha from "../../assets/images/login/captcha.png";
import {Button, Typography} from "@mui/material";
import logo from "../../assets/logo.png";
import telegram from "../../assets/icons/telegram.svg";
import tor from "../../assets/icons/tor.svg";
import animShadow from "../../assets/images/home/hero/animShadow.png";
import icon_load from "../../assets/icons/icon_load.svg";

export default function Register() {
    return (
        <div className={"flex min-h-screen w-dvw " + styles.container}>
            <div className={"flex-1 flex flex-col text-center " + styles.main}>
                <div className={styles.form}>
                    <div className={styles.loginHeader}>
                        <h1 className={"title"}>Create An Account!</h1>
                        <p className={"text"}>Lorem ipsum dolor sit amet</p>
                        <img src={animShadow} className={styles.animShadow} alt=""/>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4">
                        <div className={styles.inputContainer}>
                            <label htmlFor="firstName"><span className={"text-decorated"}>First Name</span></label>
                            <input type="text" id="firstName" className={"input w-full"}/>
                        </div>

                        <div className={styles.inputContainer}>
                            <label htmlFor="lastName"><span className={"text-decorated"}>Last Name</span></label>
                            <input type="text" id="lastName" className={"input w-full"}/>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className={styles.inputContainer}>
                            <label htmlFor="email"><span className={"text-decorated"}>Email</span></label>
                            <input type="email" id="email" className={"input w-full"}/>
                        </div>

                        <div className={styles.inputContainer}>
                            <label htmlFor="email"><span className={"text-decorated"}>Repeat Email Address</span></label>
                            <input type="email" id="email" className={"input w-full"}/>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className={styles.inputContainer}>
                            <label htmlFor="password"><span className={"text-decorated"}>Password</span></label>
                            <input type="password" id="password" className={"input w-full"}/>
                        </div>

                        <div className={styles.inputContainer}>
                            <label htmlFor="password"><span className={"text-decorated"}>Repeat Password</span></label>
                            <input type="password" id="password" className={"input w-full"}/>
                        </div>
                    </div>

                    <div className={styles.inputContainer}>
                        <label htmlFor="email"> <span className={"text-decorated"}>Affiliate
                            code (optional)</span></label>
                        <input type="email" id="email" className={"input w-full mb-4"}/>
                    </div>


                    <div className={"flex flex-col md:flex-row " + styles.captcha}>
                        <img src={captcha} alt=""/>
                        <button onClick={() => {
                            console.log("reset code");
                        }}>
                            <img src={icon_load} alt="load icon"/>
                        </button>
                        <input type="text" id="captcha" placeholder={"enter code..."} className={"input"}/>
                    </div>

                    <Button className={"w-full btn text-center"}>
                        <Typography>Sign up</Typography>
                    </Button><br/>

                    <p><span className={"text-decorated opacity-40"}>Already have an account?</span> <Link
                        to={"/login"} className={styles.underlined__link}>Login</Link></p>
                </div>
            </div>
            <div className={"flex-1 flex flex-col align-middle justify-end pb-24 text-center " + styles.background}>


                <Link to={"/"}><img src={logo} alt="privateAlps" className={"pb-2"} style={{
                    width: "100%",
                    maxWidth: "224px",
                    margin: "0 auto"
                }}/></Link>
                <p className={"pb-12 text-decorated"}>Your Privacy, Our Priority</p>

                <div className="flex align-middle gap-4 justify-center opacity-75">
                    <a
                        href="https://t.me/privatealpsnews"
                        target="_blank"
                        rel="noreferrer"
                        className={"flex align-middle gap-2 justify-center"}
                    >
                        <img src={telegram} alt="telegram-logo" className={"invert"}/>
                        <Typography>Telegram</Typography>
                    </a>
                    <a href="https://4wfsdhkbrdt6jwlozcmw2lzthoghgdrt3pty2vfre2ysdguvpazwfjad.onion/"
                       target="_blank"
                       rel="noreferrer"
                       className={"flex align-middle gap-2 justify-center"}
                    >
                        <img src={tor} alt="tor-logo" className={"invert"}/>
                        <Typography>Tor Mirror</Typography>
                    </a>
                </div>
            </div>
        </div>
    )
}