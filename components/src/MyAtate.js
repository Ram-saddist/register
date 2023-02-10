import React from 'react'


class MyAtate extends React.Component{
	state={
		name:"JavaScript",
		number:123456789

	}
	render(){
		//console.log(this.state.name)
		setInterval(()=>{
			this.setState({
				name:"Nishanth"
			})
		},3000)
		return(
            <div>
            Name:ReactJS
            <p>name:{this.state.name}</p>
            <p>number:{this.state.number}</p>
            
           
           {console.log(this.state.number)}
            </div>
			)
	}

}
export default MyAtate