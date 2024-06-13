import React,{useState} from 'react'


export default function Input() {
    const [username,setuserName]=useState('')
    const [password,setpassword]=useState('')
    function handleUserName(e){
        setuserName(e.target.value)
    }
    function submit(){
        console.log(username,password)
    }
  return (
    <div>
        <p>
            <input placeholder='Enter name' onChange={handleUserName}/>
            
            
        </p>
        <p>
        <input placeholder='email id' type="email"  onChange={(e)=>{setpassword(e.target.value)}}/>
        </p>
        <button onClick={submit}>Submit</button>
    </div>
  )
}