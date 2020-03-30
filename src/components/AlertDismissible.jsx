import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'

export default ({ variant = 'danger', title, children }) => {
  const [show, setShow] = useState(true)

  return (
    <Alert variant={variant} 
      onClose={() => setShow(false)} 
      show={show}
      className="mx-auto"
      dismissible
    >
      <Alert.Heading>{title}</Alert.Heading>
      <p>{children}</p>
    </Alert>
  )
}