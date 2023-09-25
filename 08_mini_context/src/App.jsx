import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    // Fir aap Provider component ka use karte hain, jo context mein data ko set karta hai.
    <UserContextProvider>
      <h1>codehustle here</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
