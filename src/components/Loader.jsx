import React from 'react'
import { Spinner } from 'react-bootstrap'

export default () => (
  <div className="d-flex justify-content-center">
    <Spinner animation="grow" variant="danger" className="mx-2" />
    <Spinner animation="grow" variant="dark" className="mx-2" />
    <Spinner animation="grow" variant="warning" className="mx-2" />
  </div>
)