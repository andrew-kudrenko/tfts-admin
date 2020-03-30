import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Layout from './components/Layout'

import TasksList from './pages/TasksList'
import CategoriesList from './pages/CategoriesList'
import EditTask from './pages/EditTask'
import EditCategory from './pages/EditCategory'
import CreateCategory from './pages/CreateCategory'
import CreateTask from './pages/CreateTask'
import Home from './pages/Home'

export const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact
          path="/tasks"
          component={TasksList}
        />
        <Route exact 
          path="/tasks/create"
          component={CreateTask}
        />
        <Route exact
          path="/tasks/:id"
          component={EditTask}
        />
        <Route exact
          path="/categories"
          component={CategoriesList}
        />
        <Route exact
          path="/categories/create"
          component={CreateCategory} 
        />
        <Route exact 
          path="/categories/:alias"
          component={EditCategory}
        />
        <Route exact 
          path="/home"
          component={Home}
        />
        <Redirect to="/home" />
      </Switch>
    </Layout>
  )
}
