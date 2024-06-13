

import React,{useState} from 'react'
import './List.css'

export default function List() {

    const[employees,setEmployees]=useState([
        {
            name:"Niharika",
            age:20,
            id:123,
            gender:"female",
        },
        {
            name:"Sahasra",
            age:20,
            id:340,
            gender:"female",
        },
        {
          name:"Sahasra",
            age:20,
            id:345,
            gender:"female",
        },
        {
          name:"Niharika",
          age:20,
          id:129,
          gender:"female",
        }
    ])
  return (
    <div className='employee-container'>
      {
        employees.map((emp)=>(
          <div key={emp.id} className='employee'>
             <p>Name: {emp.name}</p>
             <p>Age : {emp.age}</p>
             <p> Gender : {emp.gender}</p>
             <p> ID: {emp.id}</p>

          </div>
        ))
      }
      
    </div>
  )
}
