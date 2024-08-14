import { NavLink, Outlet } from "react-router-dom";
import  "./design.css"


function Navbar(){
    return(
        <>
        <div style={{backgroundColor:"aqua"}}>
        <NavLink to={"/"} className="Nav" >Home</NavLink>
        <NavLink to={"/add"} className="Nav" >Add</NavLink>
        <Outlet />
        </div>
        </>
    )
}

export default Navbar;