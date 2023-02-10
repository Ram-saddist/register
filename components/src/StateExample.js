import React from 'react'

class StateExample extends React.Component{
	render(){
            return(
            	<div>
            	    
            	
            	{
            		this.props.brands.map((e)=>(
                      <div>
                       <p>phone:{e.phone}</p>
                       <p>description:{e.description}</p>
                       <p>price:{e.price}</p>
                       </div>
            			))
            	}
				    
            	</div>
            	
            )
	 }
}
export default StateExample