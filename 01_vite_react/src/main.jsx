import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";


// it is regular functional component

function MyApp() {
  const name = 'durgesh'
  return <h1>codehustle app{name}</h1>;
}
// it is plan object
// it can not be render because react want element to render and this is plain object 
const ReactElement={
  type:"a",
  props:{
    href:"https://google.com",
    target:"_blank"
  },
  children:"click to visit google.com",
}

// so this ReactElement is not render because it is not a element and react need element to render
// 
// let make a jsx expression that represent a react element
const AnotherElement=(
  <a href="https://google.com" target="_blank">google.com</a>
)

// ise hum element kehte hai 
// aap isse bts bhi keh sakte hai AnotherElement ka
const reactElement=React.createElement(
 "a",
  {
    href:"https://google.com",
    target:"_blank"
  },
 "click to visit google.com",
)


ReactDOM.createRoot(document.getElementById("root")).render(
    // MyApp()
    // <MyApp />
    // ReactElement
    // reactElement,
    // AnotherElement
    <App/>
  );
