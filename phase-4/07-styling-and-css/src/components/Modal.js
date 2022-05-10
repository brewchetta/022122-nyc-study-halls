function Modal({setModalOpen}) {

  return (
    <>
    
      <div className="modal-background-mask" onClick={() => setModalOpen(false)} />

      <div className="modal centered">
        <span>I will be a modal someday...</span>
      </div>

    </>
  )

}

export default Modal;
