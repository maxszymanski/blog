import Nav from "../../components/overlay/nav/nav";
import Footer from "../../components/overlay/footer/footer";
import AffiliateForm from "../../components/affilate/affiliateForm";
import AffiliateHeader from "../../components/affilate/AffiliateHeader";
import {useState} from "react";
import icon_strike from "../../assets/icons/icon_strike.svg";
import icon_diagram_up2 from "../../assets/icons/icon_diagram_up2.svg";
import icon_shield from "../../assets/icons/icon_shield.svg";
import icon_web from "../../assets/icons/icon_web.svg";
import AffiliateFeatures from "../../components/affilate/affiliateFeatures";
import AffiliateHow from "../../components/affilate/affiliateHow";



export default function Affilliate(){

    const [usedForList] = useState([
        {
            icon: icon_strike,
            title: 'Earn money for life',
            desc: 'you can make 20% per each user you bring ! Sign up for ourgenerous affiliate program today, and earn extra revenue by promoting us!',
        },
        {
            icon: icon_shield,
            title: 'Sign up and activate your affiliate',
            desc: 'program will be activated automatically . It is completely free to join our program. No investment needed and no technical skills required.',
        },
        {
            icon: icon_diagram_up2,
            title: 'Earn',
            desc: 'Start referring customers. Share your affiliate links or affiliate code on your website, social media posts, etc. We will provide you with advertising materials. You can monitor your performance through the client area.',
        },
        {
            icon: icon_web,
            title: 'Earn',
            desc: 'On every successful purchase from your customers, you will receive a 20% commission of the first monthly price of the ordered service. Other purchases or renewals from your customers will be at a fixed 10% lifetime.',
        },
        {
            icon: icon_web,
            title: 'Withdraw',
            desc: 'You can make your payment requests when 25€ is reached or use your earned money to spend on our services, there is no minimum balance for spending on privatealps.net services.',
        },
    ]);

    return(
        <div>
            <Nav page="affiliate"/>
            <AffiliateHeader/>
            <AffiliateFeatures />
            <AffiliateHow
                list={usedForList}
            />

            <section className={"section"}>
                <div className="inside">
                    <AffiliateForm/>
                </div>
            </section>

            <Footer/>
        </div>
    )
}