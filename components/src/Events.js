import React,{Component} from 'react'

{/*class Events extends React.Component{
	state={
		username:"",
		passcode:""
	}
	save=(e)=>{
        console.log(e.target.value)
        this.setState({
        	username:e.target.value
        })
	}
	password=(e)=>{
         console.log(e.target.value)
         this.setState({
         	passcode:e.target.value
         })	
	}
	render(){
		return(
            <div>
                <input placeholder="Enter username" onChange={this.save}/>
                <input placeholder="Enter password" onChange={this.password}/>
                <p>{this.state.username}</p>
                <p>{this.state.passcode}</p>
            </div>
			)
	}
}*/}
class Events extends React.Component{
 state={
		username:"",
		passcode:""
	}
	handleChange=(e)=>{
		this.setState({
			 [e.target.name]:e.target.value
		})
	}
	handleClick=()=>{
		console.log(this.state.username,this.state.passcode)
	}
	render(){
		return(
            <div>
                <input 
                name="username" 
                type="text" 
                placeholder="Enter username" 
                onChange={this.handleChange}/>
                <input 
                name="passcode"
                 type="password" 
                 placeholder="Enter password" onChange={this.handleChange}/>
                <p>username:{this.state.username}</p>
                <p>password:{this.state.passcode}</p>
                <button onClick={this.handleClick}>Submit</button>
            </div>
			)
	}
}
export default Events