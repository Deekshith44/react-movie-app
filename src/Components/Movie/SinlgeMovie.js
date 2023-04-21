import React,{useState,useEffect, Fragment} from 'react'
import { NavLink, useParams } from 'react-router-dom';
import { API_URL } from '../context';


const SinlgeMovie = () => {
    
const {id}=useParams();

const [isLoading,setIsLoading]=useState(true);
const [movie,setMovie]=useState("");

 

const getUser= async(url)=>  {
  setIsLoading(true);
 try{
 const res=await fetch(url);
 const data=await res.json();
 console.log(data);
 if(data.Response==="True")
 {
    setIsLoading(false);
    setMovie(data);
 }
      
} catch(error)
{
    console.log(error);
}

}
useEffect(()=>
{
let timerOut=setTimeout(()=>
{
  getUser(`${API_URL}&i=${id}`);
},500);

return ()=>clearTimeout(timerOut);

},[id]);


if(isLoading) {
  return (
    <div className='movie-section'>
      <div className="loading">Loading...</div>
    </div>
  );
}


  return (   
   
     <section className="movie-section">
      <div className="movie-card">
        <figure>
          <img src={movie.Poster}/>
        </figure>

        <div className="card-content">
          <p className="title">{movie.Title}</p>
          <p className="card-text">{movie.Released}</p>
          <p className="card-text">{movie.Genre}</p>
          <p className="card-text">{movie.imdbRating}</p>
          <p className="card-text">{movie.contry}</p>
          <NavLink to="/">Go Back</NavLink>
        </div>

      </div>

     </section>
    
  );
};

export default SinlgeMovie;