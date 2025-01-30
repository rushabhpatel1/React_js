import React , { useState } from 'react'

export default function Todolist() {
    
    const [state , setState] = useState("")
    const [data , setData] = useState([])

    function addData(){
        setData([...data,state])
        setState("")
    }

    function Delete(index){
        const newdata = [...data]
        newdata.splice(index , 1)
        setData(newdata)
    }

    function Edit(index){
        const edit = prompt("enter your data", data[index])
        const newdata = [...data]
        newdata[index] = edit
        setData(newdata)    
    }

  return (
    <div>
        <h4>Simple Todolist</h4>
        <input type="text" name="" id="" value={state} placeholder='eneter txet'  onChange={(e)=>setState(e.target.value)}/>
        <button onClick={addData}>Add Data</button>

        {
            data.map((e,i)=>{
                return <li>
                    {e}
                    <button onClick={()=>Delete(i)}>Delete</button> 
                    <button onClick={()=>Edit(i)}>Edit</button>
                </li>
            })
        }
    </div>
  )
}
