
import './App.css'
import useFetch from './hooks/useFetch'
import useToggle from './hooks/useToggle'

function App() {
  // usetogglehook  
  // const [isToggle, setIsToggle]=useToggle(false)

  // return (
  //  <>
  //  <h1>{isToggle? "toggle on":"toggle off"}</h1>
  //  <button onClick={setIsToggle}>toggle btn</button>
  //  </>
  // )


  // ===================

  // useFetchhook

  const [sqdata] = useFetch("https://jsonplaceholder.typicode.com/todos")
  const data = useFetch("https://jsonplaceholder.typicode.com/todos")
  console.log(sqdata);
  console.log(data);

  return(
    <>
    <h1>fetch hook</h1>
    {
      sqdata && sqdata.map((index)=>{
        return <p>{index.title}</p>
      })
    }
    </>

  )
}

export default App
