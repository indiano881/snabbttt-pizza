import styles from './Shopping.module.css'
import Modal from '../Modal';
const Shopping = ({isOpen, hasCloseBtn = true, onClose, children}) => {
    return (
        <>
        <Modal hasCloseBtn={true} isOpen={isOpen} onClose={onClose}>
          <h2>BLABLA</h2>
        </Modal>
        </>
    )
}

export default Shopping
