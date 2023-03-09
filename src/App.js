import { useEffect, useState } from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const App = () => {

  const [ output, setOutput ] = useState([])
  const [ input, setInput ] = useState('')

  const authenticated = axios.create({
    baseURL: 'https://api.api-ninjas.com/v1/',
    headers: {
      'X-Api-Key': 'yUK8DHmGKFjWMJddpFBKUg==v0MU65bUvxHEKp3s',
    },
  })


  const handleChange = (e) => {
    setInput(e.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const getData = async () => {
      try {
        const { data } = await authenticated.get(`rhyme?word=${input}`) 
        setOutput(data)
      } catch (error) {
        console.log(error)
      } 
    }
    getData()

  } 

  console.log(output)

  
  return (  
    <Container>
      <Col as="form" xs={{ span: 10, offset: 1 }} sm={{ span: 8, offset: 2 }} md={{ span: 6, offset: 3 }} onSubmit={handleSubmit}>
        <Row> 
          <h1>Moms Spaghetti</h1>
          <input type="text" name="search" placeholder='Search...' value={input} onChange={handleChange} />
          <button className='btn w-100 mb-4'>Submit</button>
          { output.length > 0 && 
            <ul>
              {output.map(word => <li key={word}>{word}</li>)}
            </ul>  
          }
        </Row>
      </Col>
    </Container>
  )
}
export default App

