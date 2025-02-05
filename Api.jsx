import React, { useEffect, useState } from 'react'

export default function Card() {
    const[state,setState]=useState({
      name:"",
      gender:"",
      image:""
    }); 

   useEffect(()=>{
      fetchApi()
   },[])

   function fetchApi(){
    fetch("https://randomuser.me/api/")
    .then((res)=>{
      return res.json()
    }).then((data)=>{
      console.log(data);
      setState({
        name:data.results[0].name.first,
        image:data.results[0].picture.large,
      })
    })
   }
  return (
    <div>
        <br></br><br></br>
        <img src={state.image} alt="" />
        <p>{state.name}</p>
        <button onClick={fetchApi}>Random User</button>
    </div>
  )
}