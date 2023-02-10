import React from 'react'
import Testing from 'Testing'


class Test2 extends React.Component{
	render(){
		console.log(this.props)
		return(
           <div>
           <h1>Hi i am the child</h1>
           <p>{this.props.name}</p>
               
           </div>
			)
	}
}
export default Test2