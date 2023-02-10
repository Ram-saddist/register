import React, { Component } from 'react'


export default class Contact extends Component {
	state={
		data:[
			{id:1,name:"jack"},
			{id:2,name:"ambica"},
			{id:3,name:"ajju"},
			{id:4,name:"saranya"},
			{id:5,name:"Balaji"},
			{id:6,name:"Inaya"}
	],
	text:""
	}
	handleSave=(e)=>{
		this.setState({
			[e.target.name]:e.target.value
		})
	}
  render() {
	//CONVERTING the data into lowercase 
	let pair=this.state.text.toString().trim().toLowerCase();
	//variable for string matched data (COMPARING)
	let duplicateData=[];
	// logic
	if(pair && pair.length>0){
		duplicateData=this.state.data.filter((i)=>{
			//gives the data which matches with pair information by converting into lowercase
			return i.name.toLowerCase().match(pair)
		})
	}
	return (
	  <div>
		<input name="text" placeholder='Enter a search' onChange={this.handleSave}/>
		{duplicateData.map((i)=>(
			<p key={i.id}>{i.name}</p>
		))
		}
	  </div>
	)
  }
}


