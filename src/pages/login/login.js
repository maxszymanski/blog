import styles from './login.module.scss';
import telegram from "../../assets/icons/telegram.svg";
import {Button, Typography} from "@mui/material";
import tor from "../../assets/icons/tor.svg";
import {Link} from "react-router-dom";
import logo from "../../assets/logo.png";
import captcha from "../../assets/images/login/captcha.png";
import animShadow from '../../assets/images/home/hero/animShadow.png';
import icon_load from "../../assets/icons/icon_load.svg";

export default function Login(){
    return (
        <div className={"flex min-h-screen w-dvw " + styles.container}>
                <div className={"flex-1 flex flex-col text-center " + styles.main}>
                    <div className={styles.form}>
                        <div className={styles.loginHeader}>
                            <h1 className={"title"}>Sign in to your account!</h1>
                            <p className={"text"}>We're so excited to see you again!</p>
                            <img src={animShadow} className={styles.animShadow} alt=""/>
                        </div>


                        <div className={styles.inputContainer}>
                            <label htmlFor="email"><span className={"text-decorated"}>Email</span></label>
                            <input type="email" id="email" className={"input w-full mb-4"}/>
                        </div>

                        <div className={styles.inputContainer}>
                            <label htmlFor="password"><span className={"text-decorated"}>Password</span></label>
                            <input type="password" id="password" className={"input w-full"}/>
                        </div>

                        <p className={styles.forgot}><Link to={"/forgot-password"}>Forgot password?</Link></p>

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
                            <Typography>Log in</Typography>
                        </Button><br/>

                        <p><span className={"text-decorated opacity-40"}>Not registered with us?</span> <Link to={"/register"} className={styles.underlined__link}>Create an account</Link> </p>
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