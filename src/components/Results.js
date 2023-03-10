import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const Results = ({ output }) => {
  console.log(output)
  return (
    <main className="main">
      <h1>Hi</h1>
      <Container>
        <Col as="form" xs={{ span: 10, offset: 1 }} sm={{ span: 8, offset: 2 }} md={{ span: 6, offset: 3 }}>
          <Row>
            <h1>{'Results'}</h1>
            <Row>
              {output.length > 0 &&
                <ul>
                  {output.map((word, i) => <li key={i}>{word}</li>)}
                </ul>
              }
            </Row>
            <Row>
              <Link to='/'> AGAIN </Link>
            </Row>
          </Row>
        </Col>
      </Container>
    </main>
  )
}
export default Results




