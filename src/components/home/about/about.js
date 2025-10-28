import styles from './about.module.scss';
import aboutImage from '../../../assets/images/home/about.png';
import aboutImageBg from '../../../assets/images/home/aboutLight.png';

import icon_hotspot from '../../../assets/icons/icon_hotspot.svg';
import icon_cpu from '../../../assets/icons/icon_cpu.svg';
import icon_web from '../../../assets/icons/icon_web-colored.svg';
import icon_upload from '../../../assets/icons/icon_upload-colored.svg';


export default function About() {
    return (
        <section className={"section md:mt-[168px] mt-18"}>
            <div className="inside">
                <div className={"flex gap-9 " + styles.aboutContainer}>
                    <div className="flex-1">
                        <h2 className="title" data-aos="fade-up">Lorem ipsum dolor</h2>
                        <p className="text-decorated mt-4 opacity-50" data-aos="fade-up" style={{maxWidth: "465px", lineHeight: 1.1875}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae dictum ipsum. Nam quis nibh consequat eros convallis malesuada sit amet nec sem. Morbi non mollis elit.</p>
                        <hr className={"md:my-16 my-6"} style={{maxWidth: "465px", borderColor: "#211f1f"}}/>
                        <div className="flex flex-col">
                            <div className="flex mb-4 md:mb-12 gap-4 flex-wrap" data-aos="fade-up">
                                <div className="flex-1 md:min-w-auto min-w-64">
                                    <h3 className={"title " + styles.subheading}>Lorem ipsum dolor</h3>
                                </div>
                                <div className="flex-1 md:min-w-auto min-w-64">
                                    <p className="text-decorated opacity-50" style={{lineHeight: 1.1875}}>Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit.
                                        Nunc vitae dictum ipsum.</p>
                                </div>
                            </div>
                            <div className="flex mb-4 md:mb-12 gap-4 flex-wrap" data-aos="fade-up">
                                <div className="flex-1 md:min-w-auto min-w-64">
                                    <h3 className={"title " + styles.subheading}>Lorem ipsum dolor</h3>
                                </div>
                                <div className="flex-1 md:min-w-auto min-w-64">
                                    <p className="text-decorated opacity-50" style={{lineHeight: 1.1875}}>Lorem ipsum dolor sit amet, consectetur
                                        adipiscing
                                        elit.
                                        Nunc vitae dictum ipsum.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 flex-wrap" data-aos="fade-up">
                                <div className="flex-1 md:min-w-auto min-w-64">
                                    <h3 className={"title " + styles.subheading}>Lorem ipsum dolor</h3>
                                </div>
                                <div className="flex-1 md:min-w-auto min-w-64">
                                    <p className="text-decorated opacity-50" style={{lineHeight: 1.1875}}>Lorem ipsum dolor sit amet, consectetur
                                        adipiscing
                                        elit.
                                        Nunc vitae dictum ipsum.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="flex gap-6 flex-wrap items-end" data-aos="fade-up">

                            <div className="flex-1 min-w-30">
                                <img src={icon_hotspot} alt=""/>
                                <p className="text-decorated mt-4" style={{lineHeight: 1.1875}}>Lorem ipsum,<br/>dolor sit</p>
                            </div>
                            <div className="flex-1 min-w-30">
                                <img src={icon_cpu} alt=""/>
                                <p className="text-decorated mt-4" style={{lineHeight: 1.1875}}>Lorem ipsum,<br/>dolor sit</p>
                            </div>
                            <div className="flex-1 min-w-30">
                                <img src={icon_upload} alt=""/>
                                <p className="text-decorated mt-4" style={{lineHeight: 1.1875}}>Lorem ipsum,<br/>dolor sit</p>
                            </div>
                            <div className="flex-1 min-w-30">
                                <img src={icon_web} alt=""/>
                                <p className="text-decorated mt-4" style={{lineHeight: 1.1875}}>Lorem ipsum,<br/>dolor sit</p>
                            </div>
                        </div>

                        <div className={"mt-24 " + styles.aboutImage}>
                            <img src={aboutImageBg} className={styles.aboutImageBg} alt=""/>
                            <img src={aboutImage} alt=""data-aos="fade-up"/>
                        </div>

                    </div>
                </div>
            </div>
        </section>

    );
}