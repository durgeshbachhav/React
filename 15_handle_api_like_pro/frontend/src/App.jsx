import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import axios from "axios";

function App() {
  // const [products, error, loading] = customReactQuery("/api/products");

  const [products, setproducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [search, setsearch]=useState('')

  useEffect(() => {
    const controller = new AbortController();
    ;(async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get(`/api/products?search=${search}`,{
          signal:controller.signal
        });
        console.log("response", response.data);
        setproducts(response.data);
        setLoading(false);
      } catch (error) {
        if(axios.isCancel(error)){
          console.log('request cancelled', error.message);
          return
        }
        setError(true);
        console.log(error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    })();

    // cleanup code
    return ()=>{
      controller.abort();
    }
  }, [search]);

  // if (error) {
  //   return <h2>something went wrong</h2>;
  // }
  // if (loading) {
  //   return <h2>loading....</h2>;
  // }

  return (
    <div>
      <h1>number of products are : {products.length}</h1>
      <input type="text" value={search} onChange={(e)=> setsearch(e.target.value)}/>
      {
        loading && <h1>loading...</h1>
      }{
        error && <h1>error something went wrong </h1>
      }{
        
      }
    </div>
  )
}

export default App;

// const customReactQuery = (urlpath) => {
  

//   return [products,  error,loading];
// };
