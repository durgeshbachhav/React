import { useState, useCallback, useEffect,useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [Password, setPassword] = useState("");
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllow) str += "0123456789";
    if (charAllow) str += "!@#$%^&*()_-+=~|{}";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllow, charAllow, setPassword]);
  
  const copyPass =useCallback(()=>{
    // how to copy on clickboard
    window.navigator.clipboard.writeText(Password)
    // using passRef
    passwordRef.current?.select();
    // kitna range select kare
    // passwordRef.current?.setSelectionRange(0,20) 
  },[Password])
  useEffect(()=>{
    passwordGenerator();
  },[length, numAllow, charAllow, setPassword])

  
  return (
    <>
    <h1 className="text-3xl text-center  py-4">
      Password Generator
    </h1>
    <div className="w-full max-w-md mx-auto p-4 my-8 bg-gray-500 rounded-lg shadow-md">
      <div className="flex items-center rounded-lg border border-gray-400">
        <input
          type="text"
          value={Password}
          className="flex-1 p-2 outline-none"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          className="p-2 text-white bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          onClick={copyPass}
        >
          Copy
        </button>
      </div>
      <div className="mt-4 flex items-center space-x-4">
        <div>
          <input
            type="range"
            name=""
            id=""
            min={6}
            max={20}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
            className="w-full"
          />
          <label className="block">Length: {length}</label>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="numberInput"
            defaultChecked={numAllow}
            onChange={() => {
              setNumAllow((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
          <input
            type="checkbox"
            id="charInput"
            defaultChecked={charAllow}
            onChange={() => {
              setCharAllow((prev) => !prev);
            }}
          />
          <label htmlFor="charInput">Characters</label>
        </div>
      </div>
    </div>
  </>
  
  );
}

export default App;
