import React from 'react'
import PropTypes from 'prop-types'

function Modal({ modalOpen, setModalOpen, cashback, setSelected }) {
  function closeModal() {
    setModalOpen(false)
    setSelected([])
  }

  return (
    <div className={`modal ${modalOpen ? 'modal--open' : ''}`} role="dialog">
      <div className="modal__mask" onClick={() => closeModal()}></div>
      <div className="modal__content">
        <button className="modal__close" onClick={() => closeModal()}>
          <span className="modal__icon"></span>
        </button>
        <h3 className="modal__header">Thank you for your purchase!</h3>
        <p className="modal__body">
          Your cashback value is <span className="modal__value">${cashback},00</span>
        </p>
      </div>
    </div>
  )
}

Modal.propTypes = {
  modalOpen: PropTypes.bool,
  setModalOpen: PropTypes.func,
  cashback: PropTypes.number,
  setSelected: PropTypes.func
}

export default Modal
