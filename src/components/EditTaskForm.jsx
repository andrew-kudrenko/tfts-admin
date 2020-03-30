import React, { useState, useEffect, useRef } from 'react'
import { Form, Button } from 'react-bootstrap'
import { updateData } from '../utils/api'
import ModalPrompt from '../components/ModalPrompt'

export default ({ task, categories, endPoint, removingEndPoint }) => {

  const [title, setTitle] = useState() 
  const [category, setCategory] = useState() 
  const [condition, setCondition] = useState() 
  const [solution, setSolution] = useState()

  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if (task) {
      setTitle(task.title)
      setCategory(task.category)
      setCondition(task.condition)
      setSolution(task.solution)  
    }
  }, [task])

  const promptHandler = async () => {
    try {
      await updateData(endPoint, JSON.stringify({ title, category, condition, solution, _id: task?._id }))
    } catch (e) {
      console.log(e)
    }
  }

  const deletingHandler = async () => {
    try {
      await updateData(removingEndPoint, JSON.stringify({ _id: task._id }))
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
        task?._id &&
        <Form.Group controlId="_id" >
          <Form.Label>Идентификатор</Form.Label>
          <Form.Control type="text"
            value={task._id}
            readOnly
          />
        </Form.Group>
      }

      <Form.Group controlId="category">
        <Form.Label>Категория</Form.Label>
        <Form.Control as="select" 
          value={category}
          onChange={event => setCategory(event.target.value)}
        >
          {categories.map(c => <option value={c.alias}>{c.title}</option>)}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="condition">
        <Form.Label>Условие</Form.Label>
        <Form.Control as="textarea"
          rows="12"
          placeholder="Условие"
          value={condition}
          onChange={event => setCondition(event.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="solution">
        <Form.Label>Решение</Form.Label>
        <Form.Control as="textarea"
          rows="12"
          placeholder="Решение"
          value={solution}
          onChange={event => setSolution(event.target.value)}
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