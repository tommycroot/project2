import { useState } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Results from './components/Results'
import Home from './components/Home'
const App = () => {
  const [output, setOutput] = useState([])
  const authenticated = axios.create({
    baseURL: 'https://api.api-ninjas.com/v1/',
    headers: {
      'X-Api-Key': 'yUK8DHmGKFjWMJddpFBKUg==v0MU65bUvxHEKp3s',
    },
  })
  return (
    <main className="main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home
            output={output}
            setOutput={setOutput}
            authenticated={authenticated}
          />} />
          <Route path="/results" element={<Results output={output} />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}
export default App