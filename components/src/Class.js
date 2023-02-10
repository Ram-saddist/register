import React from 'react'
import StateExample from './StateExample'
import FunctionalExample from './FunctionalExample'

class Class extends React.Component{
	state={
		students:[
            {name:"ambica",age:"22"},
            {name:"thrivikram",age:"22"},
            {name:"saranya",age:"21"},
            {name:"balaji",age:"23"},
            {name:"vasu",age:"25"},
            {name:"anita",age:"23"},
			]
	}
	render(){
		return(
             <div>
             <p>this is class component {this.props.demo}</p>
             <StateExample employees={this.state.students}/>
             <FunctionalExample employees={this.state.students}/>
             </div>
			)
	}
}
export default Class