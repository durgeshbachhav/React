
import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'

function App() {
  const [recipe, setRecipes]=useState([])
  const [search,setSearch]=useState("")
  const [loading ,setLoading]=useState(false)
  

  const fetchfood = async()=>{
    try {
      setLoading(true)
      const res = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=b3972793&app_key=91d4d909be31b7f05b7997fb6f2380b0`)
    const data = await res.json();
    setRecipes(data.hits)
    setLoading(false)

    } catch (error) {
      console.log(error);
      setLoading(false)
    }
    
  }

  return (
    <div className='min-h-full'>
      <Navbar />
      <Hero search={search} setSearch={setSearch} fetchfood={fetchfood}/>
      <ProductCard recipe={recipe} loading={loading}/>
      <Footer />
    </div>
  )
}

export default App
