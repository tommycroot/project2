import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const Results = ({ output }) => {
 
  console.log(output)
  return (
    <main className="main results">
      <Container>
        <Col as="form" xs={{ span: 10, offset: 1 }} sm={{ span: 8, offset: 2 }} md={{ span: 6, offset: 3 }}>
          <Row className='results-row'>
            {output.length ?
              <Row className='results-text'>
                <div className='header-again'>
                  <h1>Results</h1>
                  <Link to='/'> AGAIN? </Link>
                </div>
                {output.length > 0 &&
                  <ul>
                    {output.map((word, i) => i < 100 && <li key={i}>{word}</li>)}
                  </ul>
                }
                {output.length > 0 &&
                  <ul>
                    {output.map((word, i) => (i > 100 && i < 200) && <li key={i}>{word}</li>)}
                  </ul>
                }
                {output.length > 200 && <Link to='/results2'> Next Page </Link>}
              </Row>
              :
              <div className= 'empty'>
                <h1> No Rhymes found! </h1>
                <p>ª–ª It feels so empty without me ª≠ª </p>
                <Link to='/'>Home /ºº\</Link>
                <img src='https://media3.giphy.com/media/RuKGrhME7zewM/200w.webp?cid=ecf05e4762kg57hcabotmub1m3yvw08bdwuwmvhfuled2yt7&rid=200w.webp&ct=g'/>
              </div>
            }
          </Row>
        </Col>
      </Container>
    </main>
  )
}
export default Results