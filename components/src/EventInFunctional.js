function EventInFunction(){

	return(
         <div>
            <button onClick={dummyCall}>Call me</button>
         </div>
		)
}
function dummyCall(){
		alert("from dummy call")
		
	}
export default EventInFunction