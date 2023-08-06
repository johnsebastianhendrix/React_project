import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import { useState } from 'react';
import {signOut} from 'firebase/auth'
import {auth} from "./firebase-config";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname = "/login"; //other way of redirecting (can't use the Navite Function because you can't use it outside the Router Dom)
    })
  }

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        
        {!isAuth ?( <Link to="/login">Login</Link>) :(
        <>
        <Link to="/createpost">CreatePost</Link>
        <button className='logoutBtn' onClick={signUserOut}> Log out</button>
        </>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth}></Home>} ></Route>
        <Route path="/createpost" element={<CreatePost isAuth={isAuth}></CreatePost>}></Route>
        <Route path="/login" element={<Login setIsAuth={setIsAuth}></Login>}></Route>
      </Routes>
    </Router>
    );
}

export default App;
