import { useDispatch } from "react-redux";
import { userAction } from "./store";
import { useParams } from "react-router-dom";
import "./design.css";
import { useState } from "react";


function Delete(){

    const dispatch= useDispatch();
    const {id}= useParams();
    
    const [toggle, setToggle]= useState(false);
    const Deleteuser=()=>{
        dispatch(userAction.delete(id));
        setToggle(true);
    }
    return(
        <>
        <div className="DeleteContainer">
        <button className="delete" disabled={toggle} onClick={Deleteuser}>Delete</button>
        </div>
        </>
    )
}

export default Delete;