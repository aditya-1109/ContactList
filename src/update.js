import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { userAction, userSelector } from "./store";
import "./design.css"

function Update(){
    const {user}=useSelector(userSelector);

    const {id}=useParams();
    const dispatch= useDispatch();

    const nameRef= useRef();
    const contactRef= useRef();


    const addUser=(e)=>{
        e.preventDefault();
        const name= nameRef.current.value;
        const phone= contactRef.current.value;
        dispatch(userAction.update({id,name,phone}));
        nameRef.current.value="";
        contactRef.current.value=""
    }
    return(
        <>
        <form className="AddForm" onSubmit={addUser}>
            <label style={{fontSize:"40px"}}>Enter your name </label>
            <input ref= {nameRef} type="text"placeholder={user[id].name} /><br/>
            <label style={{fontSize:"40px"}}>Enter your contact </label>
            <input ref={contactRef} type="text"placeholder={user[id].phone} /><br/>
            <input style={{fontSize:"20px", margin:"10px 0px"}} type="submit" />
        </form>
        </>
    )
}

export default Update;