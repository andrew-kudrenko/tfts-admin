import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Navbar from './Navbar'

export default ({ children }) => (
  <>
    <Navbar />
    <Container>
      <Row className="py-3">
        <Col sm="10" lg="8" xl="7" className="mx-auto">
          {children}
        </Col>
      </Row> 
    </Container>
  </>
)