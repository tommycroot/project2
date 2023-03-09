import { useEffect, useState } from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


const App = () => {

  const [ output, setOutput ] = useState('')
  const [ input, setInput ] = useState('')

  const authenticated = axios.create({
    baseURL: 'https://api.api-ninjas.com/v1/',
    headers: {
      'X-Api-Key': 'yUK8DHmGKFjWMJddpFBKUg==v0MU65bUvxHEKp3s',
    },
  })


  const handleChange = (e) => {
    setInput(e.target.value)
    console.log(input)
  } 
  
  useEffect(() => {
    const getData = async () => {
      const data = await authenticated.get('rhyme?word=' + 'input') 
       
      setOutput(data)
      console.log(output)
    }
    getData()
  }, [])

  return (  
    <Container>
      <Col as="form" xs={{ span: 10, offset: 1 }} sm={{ span: 8, offset: 2 }} md={{ span: 6, offset: 3 }}>
        <Row> 
          <h1>Moms Spaghetti</h1>
          <input type="text" name="search" placeholder='Search...' value={input} onChange={handleChange} />
        </Row>
      </Col>
    </Container>
  )
}
export default App

