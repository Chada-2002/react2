

function Student(props){
    console.log(props)
    return(
<div>

<h1>Student Details</h1>
<p>Name:{props.name}</p>
<p>Roll no:{props.rollno}</p>

</div>





    )
}
export default Student