import {  useDispatch, useSelector } from "react-redux";
import {  getInitialState, userSelector } from "./store";
import { NavLink, Outlet } from "react-router-dom";
import { useEffect } from "react";
import "./design.css";


function Home(){

    const {user}= useSelector(userSelector);
    const dispatch=useDispatch();

    useEffect(() => {
        dispatch(getInitialState());
      });
    let i=0;
    
    return(
        <>
        <ol className="List">
            {user.map((use)=>(
                <li key={use.id} className="ListItem">
                    <p className="contact">{use.name} &nbsp;  &nbsp;- &nbsp; &nbsp; {use.phone} </p>
                    <div className="ButtonDiv">
                <NavLink to={`/delete/${i}`} className="button">Delete</NavLink>
                <NavLink to={`/update/${i}`} className="button">Update</NavLink>
                <span style={{visibility:"hidden"}}>{i++}</span>
                <Outlet />
                </div>
                </li>
            ))}
        </ol>
        </>
    )
}

export default Home;