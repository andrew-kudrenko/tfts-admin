import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

export default ({ to, children }) => (
  <div className="d-flex justify-content-center mb-3">
    <NavLink to={to}>
      <Button variant="info" size="lg">
        {children}
        <FontAwesomeIcon className="ml-2" icon={faPlusCircle} />
      </Button>
    </NavLink>
  </div>
)