import React, { useState, useImperativeHandle, forwardRef, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';

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

    return createPortal( isDisplayed ? (<div className="modal">{children}</div>) : null
    , modalElement
    )
}

export default forwardRef(Modal);
