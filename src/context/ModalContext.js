// src/context/ModalContext.js

import React, { createContext, useState, useContext, useCallback } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [modalContent, setModalContent] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [title, setTitle] = useState("");
    const [icon, setIcon] = useState("");

    const showModal = useCallback((content, title, icon) => {
        setModalContent(content);
        setIsVisible(true);
        setTitle(title);
        setIcon(icon);
    }, []);

    const hideModal = useCallback(() => {
        setIsVisible(false);
        setModalContent(null);
        setIcon("");

    }, []);

    return (
        <ModalContext.Provider value={{ modalContent, isVisible, showModal, hideModal, title, icon }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => useContext(ModalContext);
