import React,{useRef} from 'react'
import '../Modal/Modal.scss'

const Modal = (props) => {
    const boxRef=useRef()
    const open = () => {
        boxRef.current.classList.toggle("open");
        document.getElementsByTagName('body')[0].style.overflowY='scroll'

        props.setMenuOpen(false)
    }
    return (
        <div className={`modal_search ${props.menuOpen && "open"}`} ref={boxRef}>
            <div className='modal_search_cancel' onClick={open}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.7072 6.70709L25.293 5.29297L16.0001 14.5858L6.70722 5.29297L5.29297 6.70709L14.5859 16L5.29297 25.293L6.70722 26.7071L16.0001 17.4142L25.293 26.7071L26.7072 25.293L17.4143 16L26.7072 6.70709Z" fill="#070814" />
                </svg>

            </div>
            <div className='modal_search_input'>
                <input type="text"  placeholder='AXTARIS EDIN...' />
            </div>
        </div>
    )
}

export default Modal
