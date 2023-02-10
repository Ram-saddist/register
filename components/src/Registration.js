import React from "react"
import axios from "axios"

class Registration extends React.Component{

	constructor(){
		super();
		this.state={
			name:"",
			emailid:"",
			password:"",
			number:"",

		}
	}
	handleChange=(e)=>{
		this.setState({
			[e.target.name]:e.target.value
		})
	}
	handleWent=(e)=>{
		e.preventDefault()
        axios.post("http://localhost:4005/add",
            {name:this.state.name,
             passcode:this.state.passcode,
             email:this.state.email,
             number:this.state.number,
         }
            ).then((res)=>{
                console.log(res.data)
            })


                this.setState({
            name:"",passcode:"",email:"",number:""
        })
    }
	
	render(){
        return(
        	<div>
        	   <form onSubmit={this.handleWent}>
        	  <input
                placeholder="Enter Name"
                onChange={this.handleChange}
                name="name"
                type="name"
                value={this.state.name}/>

               <p> <input
                placeholder="Enter email"
                onChange={this.handleChange}
                name="email"
                type="email"
                value={this.state.email}/></p>

                <p>
                <input 
                placeholder="Enter Passcode"
                name="passcode"
                onChange={this.handleChange}
                type="passcode"
                value={this.state.passcode}/></p>
                 
                <p> 
                <input
                placeholder="Enter Number"
                onChange={this.handleChange}
                name="number"
                type="number"
                value={this.state.number}/></p>

                <p><button>Submit</button></p>

        	   </form>
        	</div>
        	)
	}

        
		
}
export default Registration