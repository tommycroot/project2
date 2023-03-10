import { useEffect, useState } from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
const Home = () => {
  const [output, setOutput] = useState([])
  const [input, setInput] = useState('')
  const [randomWord, setRandomWord] = useState('')
  // const location = useLocation()
  // useEffect(() => {
  //   console.log(location)
  // },[location])
  const authenticated = axios.create({
    baseURL: 'https://api.api-ninjas.com/v1/',
    headers: {
      'X-Api-Key': 'yUK8DHmGKFjWMJddpFBKUg==v0MU65bUvxHEKp3s',
    },
  })
  const handleChange = (e) => {
    setInput(e.target.value)
  }
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // randomWord && setInput(randomWord.word)
      const { data } = await authenticated.get(`rhyme?word=${input}`)
      setOutput(data)
      // navigate('/results')
    } catch (error) {
      console.log(error)
    }
  }
  // useEffect(() => {
  //   setInput(randomWord)
  // }, [randomWord])
  const submitRandom = async (e) => {
    e.preventDefault()
    try {
      const { data } = await authenticated.get('randomword')
      setInput(data.word)
      console.log(data)
      // setInput(randomWord.word)
    } catch (error) {
      console.log(error)
    }
  }
  console.log('output', output)
  console.log('input', input)
  console.log('randomword', randomWord)
  return (
    <Container>
      <Col as="form" xs={{ span: 10, offset: 1 }} sm={{ span: 8, offset: 2 }} md={{ span: 6, offset: 3 }} onSubmit={handleSubmit}>
        <Row>
          <h1>{'Mom\'s Spaghetti'}</h1>
          <input type="text" name="search" placeholder='Search' value={input} onChange={handleChange} />
          <button className='btn w-100 mb-4'>Submit</button>
          <Row>
            <button id="randomBtn" className='btn w-100 mb-4' onClick={submitRandom}>Random word</button>
            {output.length > 0 &&
              <ul>
                {output.map((word, i) => <li key={i}>{word}</li>)}
              </ul>
            }
          </Row>
        </Row>
      </Col>
    </Container>
  )
}
export default Home