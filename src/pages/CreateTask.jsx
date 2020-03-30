import React from 'react'
import EditTaskForm from '../components/EditTaskForm'
import withCategoriesState from '../hoc/withCategoriesState'

const CreateTask = ({ categories }) => {
  return (
    <>
      <h2 className="text-center">Новая задача</h2>
      <hr />
      <EditTaskForm categories={categories} endPoint="/tasks" />
    </>
  )
}

export default withCategoriesState(CreateTask)