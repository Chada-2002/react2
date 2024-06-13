import React,{useState} from 'react'


export default function Home() {
  const [userName,setuserName] = useState('')
  const [password,setpassword] = useState('')
  function submit(){
    console.log(userName,password)
    setuserName('')
    setpassword('')
    
   
  }
  return (
    <div>
      <h1>This is Home page</h1>
    <p>  <input  value={userName} type="name" placeholder="enter your name" onChange={(e)=>{setuserName(e.target.value)}}/></p>
     <p> <input value={password} type="password" placeholder="enter your password" onChange={(e)=>{setpassword(e.target.value)}}/></p>
      <button onClick={submit}>Submit</button>
    </div>
  )
}
