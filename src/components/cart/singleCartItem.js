import styles from './singleCartItem.module.scss';
import {Button, Typography} from "@mui/material";
import icon_delete from "../../assets/icons/icon_delete.svg";
import icon_strike from "../../assets/icons/icon_strike.svg";
import icon_clipboard from "../../assets/icons/clipboard.svg";

export default function SingleCartItem(props) {

    const copyClipboard = () => {
        navigator.clipboard.writeText(props.name);
    }

    return (
        <div className={styles.singleCartItem__container}>
            <header className={styles.singleCartItem__header}>
                <h2 className={"text-decorated"}>{props.title}</h2>
                <p>{props.price}</p>
            </header>


            <ul className={styles.singleCartItem__content}>
                {props.details && props.details.map((detail, index) => (
                    <li key={index}>
                        <img src={icon_strike} alt="" className={"invert"}/>
                        <p>{detail.text}</p>
                    </li>
                ))}
            </ul>
            <div className={styles.singleCartItem__name}>
                <span className={"text-decorated opacity-50"}>Desired Hostname:</span>
                <p className={"text-decorated opacity-75"}>{props.name}</p>
                <button onClick={copyClipboard} className={styles.singleCartItem__copy}>
                    <img src={icon_clipboard} alt="clipboard"/>
                </button>
            </div>


            <footer className={"flex justify-between items-end " + styles.singleCartItem__footer}>
                <div>
                    <p className={"text-decorated opacity-50"}><span style={{
                        fontSize: "16px",
                        fontWeight: 500,
                    }}>Total</span></p>
                    <p className={"text-decorated"} style={{
                        fontSize: "24px",
                        fontWeight: 500
                    }}>{props.total} <span className={"opacity-50 block"} style={{
                        fontSize: "16px",
                        fontWeight: 500
                    }}>/month</span></p>
                </div>
                <Button
                    className={"btn"}
                    onClick={() => {
                        // View more
                    }}
                    disableRipple
                >
                    <Typography>Delete</Typography>
                    <img src={icon_delete} alt="icon-delete" style={{height: "8px", width: "8px"}}/>
                </Button>
            </footer>
        </div>
    )
}