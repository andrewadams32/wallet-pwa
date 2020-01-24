import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const HomeScreen: React.FC = (props) => {
  console.log('in home screen', props)
  return (
    <Container className="h-100">
      <Row className="h-100" style={{margin: "auto", justifyContent: 'center'}}>
        <Col xs="12" className="h-100">
          <Form onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" autoFocus={false} />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" autoFocus={false} />
            </Form.Group>
            <Button type="submit" variant="outline-primary">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default HomeScreen