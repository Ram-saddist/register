import React from 'react'
import axios from "axios"

class Login extends React.Component{
 state={
    username:"",
    password:""
  }
  handleChange=(e)=>{
    this.setState({
       [e.target.name]:e.target.value
    })
  }
  handleWent=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:4005/login",
            {
             username:this.state.username,
             password:this.state.password,
                      }
            ).then((res)=>{
                console.log(res.data)
            })


                this.setState({
            username:"",password:"",
        })
    }
    
  render(){
    return(
            <div>
                <input
                placeholder="Enter username"
                onChange={this.handleChange}
                name="username"
                type="username"
                value={this.state.username}/>

               <p> <input
                placeholder="Enter password"
                onChange={this.handleChange}
                name="password"
                type="password"
                value={this.state.password}/></p>
                <button onClick={this.handleWent}>Submit</button>
            </div>
      )
  }
}
export default Login