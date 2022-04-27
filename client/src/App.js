import React from "react";
import { BrowserRouter as Router, Route , Routes} from "react-router-dom";

import {Main, Login, Signup} from './pages/index'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element = {<Login></Login>}/>
        <Route exact path='/signup' element = {<Signup></Signup>}/>
        <Route exact path='/home' element = {<Main></Main>}/>
      </Routes>
    </Router>
  )
}

export default App;