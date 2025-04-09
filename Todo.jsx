import React, { useState } from 'react'

export default function Todo() {
    const [state,setState]=useState('')
    const [arr,setArr]=useState([])
    
    function AddText(e){
        e.preventDefault()
        setState(e.target.value)
    }

    function add(e){
        e.preventDefault()
        setArr([...arr,state])
    }

    function editData(index){
        const addData = prompt("Edit the your Data :)" ,arr[index]);
        const editData = [...arr];
        editData[index] = addData;
        setArr(editData);
    };

    function deleteData(index){
        const newData = [...arr];
        newData.splice(index,1);
        setArr(newData);
    }
    return (
    <div>
        <h1>Todo</h1>
        <form onSubmit={add}>
        <input type="text" placeholder='Enter Name :-' onChange={AddText} />
        <input type="submit" />
        </form>

        {
            arr.map((el,i)=>{
                return <li>{el}
                <button onClick={()=>{editData(i)}}>Edit</button>
                <button onClick={()=>{deleteData(i)}}>Delete</button>
                </li>
            })
        }
    </div>
  )
}
