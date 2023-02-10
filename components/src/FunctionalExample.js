function FunctionalExample(props){
	return(
       <div>
	       {
	       	props.employees.map((emp)=>(
	       		<div>
		            <p>{emp.name}</p>
		            <p>{emp.age}</p>
	            </div>
	       	))
	       }
       </div>
	)
}

export default FunctionalExample