import React, { Fragment } from 'react';
import Home from './Components/Home/Home';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import SinlgeMovie from './Components/Movie/SinlgeMovie';
import ErrorPage from './Components/Home/ErrorPage';
import "./App.css";
const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="movie/:id" element={<SinlgeMovie/>}/>
          <Route path="*" element={<ErrorPage/>}/>


        </Routes>
      
      
      </BrowserRouter>
    </Fragment>
  )
}

export default App;