import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Home = () => {

  const [ output, setOutput ] = useState([])
  const [ input, setInput ] = useState('')
  const [ randomWord, setRandomWord ] = useState('')

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
      console.log('input', input)
      try {
        randomWord.word && setInput(randomWord.word)
        const { data } = await authenticated.get(`rhyme?word=${input}`) 
        setOutput(data)
      } catch (error) {
        console.log(error)
      } 
    }
    getData()
  } 


  const submitRandom = (e) => {
    e.preventDefault()
    const getWord = async () => {
      try {
        const { data } = await authenticated.get('randomword') 
        setRandomWord(data)
        setInput(randomWord.word)
        console.log(input)
      } catch (error) {
        console.log(error)
      } 
    }
    getWord()
  } 

  console.log(output)
  console.log(input)
  return (
    <Container>
      <Col as="form" xs={{ span: 10, offset: 1 }} sm={{ span: 8, offset: 2 }} md={{ span: 6, offset: 3 }} onSubmit={handleSubmit}>
        <Row> 
          <h1>{'Mom\'s Spaghetti'}</h1>
          <input type="text" name="search" placeholder={!randomWord ? 'Search' : randomWord.word} value={!randomWord ? input : randomWord.word } onChange={handleChange} />
          <button className='btn w-100 mb-4'>Submit</button>
          <Row>
            <button id="randomBtn" className='btn w-100 mb-4' onClick={submitRandom}>Random word</button>
            { output.length > 0 && 
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