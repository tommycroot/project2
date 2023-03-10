import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const ResultsTwo = ({ output }) => {
  console.log(output)
  return (
    <main className="main results">
      <Container>
        <Col as="form" xs={{ span: 10, offset: 1 }} sm={{ span: 8, offset: 2 }} md={{ span: 6, offset: 3 }}>
          <Row>
            <Row className='results-text'>
              <div className='header-again'>
                <h1>Results</h1>
                <Link to='/'> AGAIN? </Link>
              </div>
              {output.length > 0 &&
                <ul>
                  {output.map((word, i) => (i > 200 && i < 300) && <li key={i}>{word}</li>)}
                </ul>
              }
              {output.length > 0 &&
                <ul>
                  {output.map((word, i) => (i > 300 && i < 400) && <li key={i}>{word}</li>)}
                </ul>
              }
              {/* { output.length > 200 && <Link to='results2'> Next Page </Link>} */}
            </Row>
          </Row>
        </Col>
      </Container>
    </main>
  )
}
export default ResultsTwo