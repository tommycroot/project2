import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const Home = ( { output,setOutput,authenticated }  ) => {
  const [input, setInput] = useState('')
  const handleChange = (e) => {
    setInput(e.target.value)
  }
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await authenticated.get(`rhyme?word=${input}`)
      setOutput(data)
      navigate('/results')
    } catch (error) {
      console.log(error)
    }
  }
  const submitRandom = async (e) => {
    e.preventDefault()
    try {
      const { data } = await authenticated.get('randomword')
      setInput(data.word)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  console.log('output', output)
  console.log('input', input)
  return (
    <Container>
      <Col as="form" xs={{ span: 10, offset: 1 }} sm={{ span: 8, offset: 2 }} md={{ span: 6, offset: 3 }} onSubmit={handleSubmit}>
        <Row>
          <h1>{'Mom\'s Spaghetti'}</h1>
          <input type="text" name="search" placeholder='Search' value={input} onChange={handleChange} />
          {/* <Link to= '/results'className='btn btn-danger'>Submit</Link> */}
          <button className='btn btn-danger'>Submit</button>
          <Row>
            <button id="randomBtn" className='btn w-100 mb-4' onClick={submitRandom}>Random word</button>
          </Row>
        </Row>
      </Col>
    </Container>
  )
}
export default Home