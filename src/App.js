import{useState} from 'react'
// import Student from  './Student'
// import List from './List'
// import Input from './Input'
// import Cardetails from './Cardetails'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'
import Navigation from './components/Navigation'


function App(){

  const [studentName,setStudentName]=useState('prabhas')
  const [age,setAge]=useState(23)
  return(

<div>
  <BrowserRouter>
  <Navigation/>
  <Routes>
   <Route  path="/" element={<Home/>}/>
   <Route path ="/contacts" element={<Contacts/>}/>
   <Route path="/about" element={<About/>}/>




  </Routes>
  
  
  
  </BrowserRouter>
  {/* <List/>
  <Input/> */}
  {/* <Cardetails/> */}
  {/* <p>Hello Friends</p>
  <p>Name is: {studentName} and his age is : {age}</p>
  <Student  name="Shivani" rollno="424"/>
  <Student name="Manasa" rollno="505"/>
  <Student name="Bhargavi" rollno="437"/>
  <Student name="Swathi" rollno="404"/> */}
  </div>

  )
}

export default App
