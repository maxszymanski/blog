import Nav from "../../components/overlay/nav/nav";
import Footer from "../../components/overlay/footer/footer";
import styles from "./faq.module.scss";
import arrowIcon from "../../assets/icons/faq_arrow.svg";
import {useState} from "react";
import faqImage from "../../assets/images/faq/faqImage.png";

const faqData = [
    ["What's not allowed?" , "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At autem consequatur dolore eius esse et fuga illo iure modi non, odit perferendis praesentium quo, sed tempora ullam voluptates? Amet cupiditate error esse explicabo libero maxime saepe sint sit? Accusantium aspernatur at consectetur dicta ducimus nihil praesentium quaerat quidem ratione tenetur. Adipisci, suscipit."],
    ["Domain Names - How long do DNS changes take?", ""],
    ["What forms of payments do you accept?", ""],
    ["Does PrivateAlps provide refunds?", ""],
    ["I do not have server administration skills, can I order administration from you?", ""],
    ["There is no configuration suitable for me in the list of available servers and VPS.\n" +
    "Is it possible to change the configuration of the server or VPS?", ""],
    ["Can I order a backup server?", ""],
    ["Can you order an additional IP address?", ""],
    ["Can I use KVM/VNC to server?", ""],
    ["Can I reinstall my dedicated servers, and what are the options for doing so?", ""],
]

export default function Faq(){
    const [activeFaq, setActiveFaq] = useState(null);

    return (
        <div>
            <Nav page="faq"/>

            <section className="section relative">
                <div className={"inside " + styles.faq__container}>
                    <div className={styles.faq__blur__1}></div>
                    <div className={styles.faq__blur__2}></div>

                    <div className={styles.faq__header}>
                        <h2 className={"text-decorated " + styles.faq__title}>Frequently Asked Questions</h2>
                        <p className="text-decorated">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque et justo eget eros lobortis ullamcorper et non leo. Cras et augue at dui accumsan mollis vitae in purus.</p>

                        <img src={faqImage} alt="" className={styles.faq__image}/>
                    </div>

                    <div className={styles.faq__list}>
                        {faqData.map((item, key) => {
                            return (
                                <div onClick={() => {setActiveFaq(key)}} key={key} className={styles.faq__item + " " + (activeFaq === key && styles.active)}>
                                    <div className={styles.faq__question}>
                                        <p className={"text-decorated"}>{item[0]}</p>
                                        <img src={arrowIcon} alt=""/>
                                    </div>
                                    <p className={styles.faq__answer}>{item[1]}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <Footer/>
        </div>
    )
}