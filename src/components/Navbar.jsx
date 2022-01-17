import {Link} from "react-router-dom"
export const Navbar = () =>{
return (
    <>
    <div style={{margin:"10px"}}>
    <Link to ="/" style={{margin:"10px"}} >Home</Link>
    <Link to ="/login" style={{margin:"10px"}}>Admin Login</Link> 
    <Link to ="/admin" style={{margin:"10px"}}>Admin page</Link> 
    <Link to="/userlogin" style={{margin:"10px"}}>userlogin</Link> 
    <Link to="/jobs" style={{margin:"10px"}}>Jobs</Link> 
    </div>
    </>
)
}