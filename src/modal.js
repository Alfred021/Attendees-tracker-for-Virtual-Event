import React, { useState, useImperativeHandle, forwardRef, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './modal.css';

const modalElement = document.getElementById("modal-root");

export const Modal = ({children}, ref) => {
    const [isDisplayed, setIsDisplayed] = useState(false);

    const close = useCallback(() => setIsDisplayed(false), [])

    useImperativeHandle(ref, () => ({
        open: () => setIsDisplayed(true),
        close
    }), [close])

    const handleEscapeKey = useCallback(e => {
        if (e.keyCode === 27) {
            close()
        }
    },[close])

    useEffect(() => {
        if (isDisplayed) {
            document.addEventListener("keydown", handleEscapeKey, false)
        }
        return () => {
            document.removeEventListener("keydown", handleEscapeKey, false)
        }
    }, [handleEscapeKey, isDisplayed])

    return createPortal( isDisplayed ? (
            <div className="modal">
                <div className="modal-overlay" onClick={close} /> 
                <div className="modal-body">
                    {children}
                    <span role="button" className="modal-close" aria-label="close" onClick={close}>OK</span>
                </div>   
            </div>) : null
            , modalElement
            )
}

export default forwardRef(Modal);
