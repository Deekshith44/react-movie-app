import React, { Fragment } from "react";
import  Search  from "../Search/Search";
import Movies from "../Movie/Movies";



const Home= ()=>
{
   
    return (
        <Fragment>
          <Search/>
          <Movies/>
       </Fragment>
    );
}

export default Home;