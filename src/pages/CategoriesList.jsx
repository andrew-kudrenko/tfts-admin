import React from 'react'
import { NavLink } from 'react-router-dom'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import ButtonCreate from '../components/ButtonCreate'
import Loader from '../components/Loader'
import withCategoriesState from '../hoc/withCategoriesState'

const CategoriesList = ({ categories }) => (
  <>
    <h2 className="text-center">Список категорий</h2>
    <hr />
    <ButtonCreate to="create">Новая категория</ButtonCreate>
    <ListGroup>
      {
        categories.length
          ? categories.map(({ alias, title }) => (
            <NavLink to={alias} key={alias} className="text-dark">
              <ListGroupItem className="mb-2 list-group-item-action">
                {title}
              </ListGroupItem>
            </NavLink>
          ))
          : <Loader />
      }
    </ListGroup>
  </>
)

export default withCategoriesState(CategoriesList)