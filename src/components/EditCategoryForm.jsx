import React, { useState, useEffect, useRef } from 'react'
import { Form, Button } from 'react-bootstrap'
import { updateData } from '../utils/api'
import ModalPrompt from '../components/ModalPrompt'

export default ({ category, endPoint, removingEndPoint }) => {

  const [title, setTitle] = useState()
  const [alias, setAlias] = useState()
  const [img, setImg] = useState()
  const [preview, setPreview] = useState()
  const [description, setDescription] = useState()

  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if (category) {
      setTitle(category.title)
      setAlias(category.alias)
      setImg(category.img)
      setPreview(category.preview)
      setDescription(category.description)
    }
  }, [category])

  const promptHandler = async () => {
    try {
      await updateData(endPoint, JSON.stringify({ title, alias, img, preview, description, _id: category?._id }))
    } catch (e) {
      console.log(e)
    }
  }

  const deletingHandler = async () => {
    try {
      await updateData(removingEndPoint, JSON.stringify({ _id: category._id }))
    } catch (e) {
      console.log(e)
    }
  }

  const modalCallback = useRef(null)

  const closeHandler = () => {
    setShowModal(false)
  }

  return (
    !showModal
      ? <Form>
        <Form.Group controlId="title">
          <Form.Label>Название</Form.Label>
          <Form.Control type="text"
            placeholder="Название"
            value={title}
            onChange={event => setTitle(event.target.value)}
          />
        </Form.Group>

        {
          category?._id &&
          <Form.Group controlId="_id" >
            <Form.Label>Идентификатор</Form.Label>
            <Form.Control type="text"
              value={category._id}
              readOnly
            />
          </Form.Group>
        }

        <Form.Group controlId="alias">
          <Form.Label>Псевдоним</Form.Label>
          <Form.Control type="text"
            value={alias}
            placeholder="Псевдоним"
            onChange={event => setAlias(event.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="img">
          <Form.Label>Название изображения</Form.Label>
          <Form.Control type="text"
            placeholder="Название изображения"
            value={img}
            onChange={event => setImg(event.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="preview">
          <Form.Label>Краткое описание</Form.Label>
          <Form.Control as="textarea"
            rows="12"
            placeholder="Краткое описание"
            value={preview}
            onChange={event => setPreview(event.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Описание</Form.Label>
          <Form.Control as="textarea"
            rows="12"
            placeholder="Описание"
            value={description}
            onChange={event => setDescription(event.target.value)}
          />
        </Form.Group>

        <div className="d-flex justify-content-center">
          <Button variant="outline-success"
            type="submit"
            size="lg"
            className="mx-2"
            onClick={() => {
              modalCallback.current = promptHandler
              setShowModal(true)
            }}
          >
            Сохранить
        </Button>

          {
            removingEndPoint &&
            <Button variant="outline-danger"
              type="button"
              size="lg"
              className="mx-2"
              onClick={() => {
                modalCallback.current = deletingHandler
                setShowModal(true)
              }}
            >
              Удалить
        </Button>
          }
        </div>
      </Form>
      : <ModalPrompt isShowing={showModal}
        acceptHandler={modalCallback.current}
        cancelHandler={closeHandler}
      />
  )
}