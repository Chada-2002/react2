import React,{useState} from 'react'

export default function About() {
  const [newUser,setnewUser] =useState({
name:'',
email:'',
password:'',

})
function handleUser(e){
const {name,value}=e.target
console.log(name,value)
setnewUser((prevUser)=>({
...prevUser,[name]:value


}))
}
function submit(){
  console.log(newUser);
  setnewUser({name:'',email:'',password:''})
}


//const handleUser=()=>{}
  return (
    <div>
      <h1>This is About </h1>
    <p> <input  
      placeholder="enter your name" name="name" value={newUser.name} onChange={handleUser}
      
      /></p> 
      <p> <input  
      placeholder="enter your email" name="email" value={newUser.email} onChange={handleUser}
      
      /></p>
      <p> <input  
      placeholder="enter your password" name="password" value={newUser.password} onChange={handleUser}
      
      /></p> 
      <button onClick={submit}>Submit</button>

      

    </div>
  )
}
