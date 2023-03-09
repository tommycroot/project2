import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState } from 'react'

const Results = ({ handleSubmit, output }) => {
  return (
    <main className="main">
      <h1>Hi</h1>
      <Container>
        <Col as="form" xs={{ span: 10, offset: 1 }} sm={{ span: 8, offset: 2 }} md={{ span: 6, offset: 3 }} onSubmit={handleSubmit}>
          <Row> 
            <h1>{'Results'}</h1>
            <Row>
              { output.length > 0 && 
              <ul>
                {output.map((word, i) => <li key={i}>{word}</li>)}
              </ul>  
              }
            </Row>
          </Row>
        </Col>
      </Container>
    </main>
  )
 
}

export default Results