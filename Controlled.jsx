import React, { useState } from 'react'

export default function Controlled() {
    const[state,setState]=useState("")
    const[text,setText]=useState([])
    const[comment,setComment]=useState({})
    const[reveiw,setReview]=useState({})

    function addText(e){
        setState(e.target.value)
    }

    function submitForm(e){
        e.preventDefault()
        setText([...text,state])
        setState("")
    }

    function deleteData(i){
        var NewData=[...text];
        NewData.splice(i,1);
        setText(NewData)
    }

    function updateData(i){
        var NewValue=prompt("update the name",text[i])
        if(NewValue!== null){
            var updateData=[...text]
            updateData[i]=NewValue
            setText(updateData)
        }
    }

    function addComment(i){
        const newComment=prompt("enter comment to user name :)")
        if(newComment!=null){
            setComment({...comment,[i]:newComment})
        }
    }
    function reviewItem(i) {
        const newReview=prompt("please Give your reveiw to :  (1 to 10) 10 is Highest And 1 is Lowest :) ")
        if(newReview!=null){
            setReview({...reveiw,[i]:newReview})
        }

    }
    
  return (
    <div>
        <h1>Controlled</h1>
            <form onSubmit={submitForm}>
            <input type="text" placeholder='enter name' value={state} onChange={addText} />
            <input type="submit" />
            </form>

        {
            text.map((el,i)=>{
                return(
                <ul><li>{el}</li>
                    <li>Comment Is:{comment[i]}</li>
                    <li>Review Is : {reveiw[i]} </li>
                    <li><button onClick={()=>deleteData(i)}>Delete</button></li>
                    <li><button onClick={()=>updateData(i)}>update</button></li>
                    <li><button onClick={()=>addComment(i)}>comment</button></li>
                    <li><button onClick={()=>reviewItem(i)}>Review</button></li>
                </ul>)
                
            })
        }
    </div>
  )
}
