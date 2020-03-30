import React from 'react'
import { withRouter } from 'react-router-dom'
import withState from '../hoc/withState'

import Loader from '../components/Loader'
import EditTaskForm from '../components/EditTaskForm'

const EditTask = ({ tasks, categories, match }) => {
  const task = tasks.find(t => t._id === match.params.id)

  return (
    <>
      <h2 className="text-center">Редактирование задачи</h2>
      <hr />
      {
        tasks.length && categories.length
          ? <EditTaskForm task={task}
            categories={categories}
            endPoint="/tasks/update"
            removingEndPoint="/tasks/remove"
          />
          : <Loader />
      }
    </>
  )
}

export default withState(withRouter(EditTask)) 