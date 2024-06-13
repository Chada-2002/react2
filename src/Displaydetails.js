import React from 'react'

export default function Displaydetails(props) {
  return (
    <div>
      {
        props.cars.map((car)=>(
            <div>
                <p>  {car.name}</p>
                <p>  {car.price}</p>
                <p>  {car.discription}</p>
                <img src ={car.picture} alt= {car.name}/>
            
            </div>
        ))
      }
    </div>
  )
}
