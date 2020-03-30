import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

export default ({ isShowing, acceptHandler, cancelHandler }) => {
  const [show, setShow] = useState(isShowing)
  const [hasError, setHasError] = useState(false)
  const [pending, setPending] = useState(false)
  const [completed, setCompleted] = useState(false)

  const handleClose = () => {
    setShow(false)
    cancelHandler()
  }

  const handleCloseWithAwait = async () => {
    setPending(true)

    try {
      await acceptHandler()
      setCompleted(true)
    } catch (e) {
      setHasError(true)
    } finally {
      setPending(false)
      setTimeout(() => cancelHandler(), 1500)
    }
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Подтвердите действие</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6 className="font-weight-bold font-italic">
          <span className="font-weight-light mr-2">Статус:</span>
          {!pending && !completed && <span className="text-dark">-</span>}
          {pending && <span className="text-info">Запрос к серверу...</span>}
          {!hasError && completed && <span className="text-success">Успешно!</span>}
          {hasError && <span className="text-danger">Произошла ошибка!</span>}
        </h6>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Отмена
        </Button>
        <Button variant="success" onClick={handleCloseWithAwait}>
          Подтвердить
        </Button>
      </Modal.Footer>
    </Modal>
  )
}