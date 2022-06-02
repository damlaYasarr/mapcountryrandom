
  
import React, { useEffect,useState } from 'react'
import axios from 'axios'
export default function Api() {
    const [country, setCountry]=useState([""])
    const [count, setCount]=useState([""])
   const trila =[""]
    useEffect(()=>{
        axios.get("https://travelbriefing.org/countries.json")
        .then(response=>setCountry(response.data))
        .catch(error=>console.log({error}))
    },[])
     const handleClick=(e)=>{
       
        var arr = [];

        while(arr.length < 10){
            var r = Math.floor(Math.random() * country.length) + 1;
            if(arr.indexOf(r) === -1) arr.push(r);
        } 
        for (let index = 0; index < arr.length; index++) {
             if(count.values!==""){
                trila[index]=country[arr[index]].name
             }
             setCount(trila)
         } 
     }
  return <div>
  <button onClick={handleClick}>click it</button>
    {
        count.map((coun,index)=>(
            <div key={index}>{coun}</div>
        ))
    }
  </div>
 
  }
  