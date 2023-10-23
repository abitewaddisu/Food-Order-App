import ReactDOM from 'react-dom'
import style from './Modal.module.css'

function Backdrop(props) {
    return <div className={style.backdrop} onClick={props.onClick}></div>
}

function ModalOverlay(props) {
    return (
        <div className={style.modal}>
            <div className={style.content}>{props.children}</div>
        </div>
    )
}

function Modal(props) {
    return (
        ReactDOM.createPortal(
            <>
                <Backdrop onClick={props.onClose} />
                <ModalOverlay>{props.children}</ModalOverlay>
            </>,
            document.getElementById('modal')
        )
    )
}

export default Modal