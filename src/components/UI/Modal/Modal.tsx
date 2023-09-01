import React from 'react'
import ReactDOM  from 'react-dom'

import styles from './Modal.module.css'

const Backdrop: React.FC<{onHide: () => void}> = (props) => {
    return <div className={styles.backdrop} onClick={props.onHide}/>
}

const ModalOverlay: React.FC<{children: any}> = (props) => {
    return <div className={styles.modal}>{props.children}</div>
}

const portalElement: HTMLElement = document.getElementById('overlay') as HTMLElement

const Modal: React.FC<{children: any, onHide: () => void}> = (props) => {
  return (
    <>
        {ReactDOM.createPortal(<Backdrop onHide={props.onHide}/>, portalElement)}
        {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
  )
}

export default Modal
