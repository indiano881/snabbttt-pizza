import styles from './Shopping.module.css'
import Modal from '../Modal';
const Shopping = ({isOpen, onClose, totalPizzas, totalPrice, setTotalPrice, setTotalPizzas}) => {

  const cancelBtn= () => {
    console.log("Cancel")
  }
    return (
        <>
        <Modal hasCloseBtn={true} isOpen={isOpen} onClose={onClose}>
          <h2>Shopping cart</h2>
          <h4>Total pizzas are : {totalPizzas}</h4>
          <h4>Total amount is : {totalPrice}</h4>
          <p>CONFIRM ORDER</p>
          <p onClick={cancelBtn}>CANCEL ORDER</p>
        </Modal>
        </>
    )
}

export default Shopping
