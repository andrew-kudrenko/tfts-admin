import React from 'react'
import { NavLink } from 'react-router-dom'
import { ListGroup, ListGroupItem } from 'react-bootstrap'

const MenuItem = ({ to, children }) => (
  <NavLink to={to}>
    <ListGroupItem className="mb-2 text-dark list-group-item-action">{children}</ListGroupItem>
  </NavLink>
)

export default () => (
  <>
    <h2 className="text-center">Домашняя страница</h2>
    <hr/>
    <h5 className="text-info">Задачи</h5>
    <ListGroup className="mb-3">
      <MenuItem to="/tasks/">Все задачи</MenuItem>
      <MenuItem to="/tasks/create">Добавить задачу</MenuItem>
    </ListGroup>

    <h5 className="text-info">Категории</h5>
    <ListGroup>
      <MenuItem to="/categories/">Все категории</MenuItem>
      <MenuItem to="/categories/create">Добавить категорию</MenuItem>
    </ListGroup>
  </>
)