import React  from 'react'
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import Home from './component/home/Home'
import MovieDetail from './component/MovieDetails/MovieDetail'
import NoPage from './component/pagenotfound/NoPage'
import Header from './component/header/Header'
import Footer from './component/footer/Footer'

import './App.scss'

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      < Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movie/:id' element={<MovieDetail />}/>
        <Route path='*' element={<NoPage />}/>
      </Routes>
      < Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
