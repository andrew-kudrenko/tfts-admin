import React from 'react'
import { NavLink } from 'react-router-dom'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import ButtonCreate from '../components/ButtonCreate'
import Loader from '../components/Loader'
import withState from '../hoc/withState'

const TasksList = ({ tasks, categories }) => {
  return (
    <>
      <h2 className="text-center">Список задач</h2>
      <hr />
      <ButtonCreate to="create">Новая задача</ButtonCreate>
      {categories.length && tasks.length
        ? categories.map(category => (
          <React.Fragment key={category.alias}>
            <h5 className="mb-3 text-info">{category.title}</h5>
            <ListGroup className="mb-3">
              {tasks.filter(task => task.category === category.alias).map(task => (
                <NavLink to={`${task._id}`} className="text-dark">
                  <ListGroupItem className="mb-2 list-group-item-action" key={task._id}>
                    {task.title}
                  </ListGroupItem>
                </NavLink>
              ))}
            </ListGroup>
          </React.Fragment>
        ))
        : <Loader />
      }
    </>
  )
}

export default withState(TasksList)