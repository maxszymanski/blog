// src/components/Modal.js

import React from 'react';
import styles from "./modal.module.scss";
import { useModal } from '../../context/ModalContext';
import icon_delete from "../../assets/icons/icon_delete.svg";

export default function Modal() {
    const { modalContent, isVisible, hideModal, title, icon } = useModal();

    if (!isVisible) return null;

    return (
        <div className={styles.offshoreModalWrapper + " " + (isVisible ? styles.active : "")}>
            <div className={styles.offshoreModal}>
                <div className={styles.offshoreModalContainer}>
                    <button className={styles.offshoreModalClose} onClick={hideModal}>
                        <img src={icon_delete} alt="Close"/>
                    </button>
                    <header className={styles.offshoreModalHeader}>
                        <img src={icon} alt={title}/>
                        <h2 className={"text-decorated " + styles.offshoreModalHeader__title}>{title}</h2>
                    </header>
                    {modalContent}
                </div>
            </div>
        </div>
    );
}