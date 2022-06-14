import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Read from './pages/Read'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/*Dynamic Routing based on the is of the article */}
          <Route path="/read/:id" element={<Read />} />
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
