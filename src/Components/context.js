import React, { useContext, useEffect, useState } from "react";

//create context
//provider
//consumer (useContext)

//create context

const AppContext=React.createContext();

export const API_URL="http://www.omdbapi.com/?apikey=727bbdc1";



//create provider
const AppProvider=({children})=>
{
    const [isLoading,setIsLoading]=useState(true);
    const [movie,setMovie]=useState([]);
    const [isError,setIsError]=useState({show:"false",msg:""});
     
    
    //new state for search bar
     const [query,setQuery]=useState("Titanic");

   const getUser= async(url)=>  {
    setIsLoading(true);
     try{
     const res=await fetch(url);
     const data=await res.json();
     console.log(data);
     if(data.Response==="True")
     {
        setIsLoading("False");
        setIsError({
          show:"False",
          msg:""   //if we get the result than error msg should not be displayed
      });
        setMovie(data.Search);
     }
     else {
        setIsError({
            show:"True",
            msg:data.Error
        });
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
      getUser(`${API_URL}&s=${query}`);
    },500);

    return ()=>clearTimeout(timerOut);
   
  },[query]);

   
    return <AppContext.Provider value={{isLoading,isError,movie,setQuery}}>
        {children}
    </AppContext.Provider>

};

//use custom hook

/*const usegobalContext=()=>
{
   return useContext(AppContext);
};  */

export {AppContext , AppProvider};
