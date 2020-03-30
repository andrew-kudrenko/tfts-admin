import React from 'react'
import EditCategoryForm from '../components/EditCategoryForm'

export default () => {
  return (
    <>
      <h2 className="text-center">Новая категория</h2>
      <hr />
      <EditCategoryForm endPoint="/categories" />
    </>
  )
}