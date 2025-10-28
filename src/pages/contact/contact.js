import styles from './contact.module.scss';
import {Button, Typography} from "@mui/material";
import animShadow from '../../assets/images/home/hero/animShadow.png';
import Nav from "../../components/overlay/nav/nav";
import Footer from "../../components/overlay/footer/footer";
import {useState} from "react";
import Dots from "../../components/overlay/dots/dots";

export default function Contact(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        policy: false,
        robot: false
    })

    const handleSubmit = () => {
        console.log(formData);
    }

    return (
        <div>
            <Nav page="contact"/>

            <section className="section relative">

                <div className="inside relative">
                    <div className={styles.dots1}>
                        <Dots type="contact"/>
                    </div>
                    <div className={styles.dots2}>
                        <Dots type="contact"/>
                    </div>

                    <div className={styles.loginHeader}>
                        <h1 className={"title"}>Contact with us</h1>
                        <img src={animShadow} className={styles.animShadow} alt=""/>
                    </div>
                    <div className={styles.form}>

                        <div className={"flex flex-col md:flex-row gap-4 " + styles.formHeader}>
                            <div className={styles.inputContainer}>
                                <label htmlFor="name"><span className={"text-decorated"}>Name</span></label>
                                <input
                                    value={formData.name}
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                    type="text" id="name" className={"input w-full " + styles.input}/>
                            </div>

                            <div className={styles.inputContainer}>
                                <label htmlFor="email"><span className={"text-decorated"}>Email
                                    Address</span></label>
                                <input type="email" id="email" className={"input w-full " + styles.input}/>
                            </div>
                        </div>

                        <div className={styles.inputContainer}>
                            <label htmlFor="subject"><span className={"text-decorated"}>Subject</span></label>
                            <input type="text" id="subject" className={"input w-full mb-4 " + styles.input}/>
                        </div>

                        <div className={styles.inputContainer}>
                            <label htmlFor="message"><span className={"text-decorated"}>Message</span></label>
                            <textarea
                                style={{height: "auto"}}
                                name="message" id="message" cols="30" rows="10" className={"input w-full " + styles.input}></textarea>
                        </div>

                        <div className={styles.formBottom}>
                            <div className={"flex gap-4 items-center"}>
                                <div className={styles.formCheckbox + " " + (formData.policy && styles.active)}>
                                    <input

                                        value={formData.policy}
                                        onChange={(e) => setFormData({...formData, policy: e.target.checked})}
                                        type="checkbox"
                                        name="policy"
                                        id="policy"/>
                                </div>
                                <label htmlFor="policy" className={"text-decorated"}>I agree the <a href="/"
                                                                                                    className={formData.policy && styles.activeLabel}>Privacy
                                    policy.</a></label>
                            </div>
                            <div className={styles.captcha}>
                                <div></div>
                                <p className="text-decorated" style={{fontWeight: 500}}>I'm not a robot</p>

                            </div>
                        </div>

                        <Button className={"w-full btn text-center"} onClick={handleSubmit}>
                            <Typography>Send</Typography>
                        </Button><br/>
                    </div>
                </div>


                <Footer/>
            </section>
        </div>
    )
}