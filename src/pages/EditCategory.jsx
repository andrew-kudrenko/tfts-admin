import React from 'react'
import { withRouter } from 'react-router-dom'
import withCategoriesState from '../hoc/withCategoriesState'

import Loader from '../components/Loader'
import EditCategoryForm from '../components/EditCategoryForm'

const EditCategory = ({ categories, match }) => {
  const category = categories.find(c => c.alias === match.params.alias)

  return (
    <>
      <h2 className="text-center">Редактирование категории</h2>
      <hr />
      {
        category
          ? <EditCategoryForm category={category}
            endPoint="/categories/update"
            removingEndPoint="/categories/remove"
          />
          : <Loader />
      }
    </>
  )
}

export default withCategoriesState(withRouter(EditCategory)) 