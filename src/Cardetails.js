import React,{useState} from 'react'
import Displaydetails from './Displaydetails'

export default function Cardetails() {

    const [carDetails,setcarDetails] = useState([
           {
                name:"suzuki",
                price:800000,
                description:"high speed",
                picture:"https://mediaservice.audi.com/media/live/50900/fly1400x601n1/8wc/2023.png?wid=850",
           },
           {
            name:"Benz",
            price:1000000,
            description:"good milage"
,            picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbgjKCXw8DS9-uJN4y9lE14WLsHV-SwRA4sQ&s",
           },
           {
            name:"Alto",
            price:800000,
            description:"good structure",
            picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNnHHHLsqjLSt_NIDcADcjVfbUEhaS3iFZXg&s",
           },
{
           name:"kia",
            price:800000,
            description:"High speed",
            picture:"https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/178537/c-class-right-side-view.jpeg?isig=0&q=80",
}
    ])
  return (
    <div>
      <Displaydetails cars={carDetails}/>
    </div>
  )
}
