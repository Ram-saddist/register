import {Link} from 'react-router-dom'

export default function Navigation(){
	return(
      <div className="navbar">
       <Link to="/">Home</Link>
       <Link to="/login">Login</Link>
       <Link to="/products">Products</Link>
       <Link to="/cart">Cart</Link>
       <Link to="/contact">Contact</Link>
       <Link to="/About">About</Link>
       <Link to="/Registration">Registration</Link>
      </div>
		)
}