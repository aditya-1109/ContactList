import { useDispatch, useSelector } from "react-redux";
import { userAction, userSelector } from "./store";
import { useRef } from "react";
import "./design.css";


function Add(){
    const {user}=useSelector(userSelector);

    const dispatch= useDispatch();

    const nameRef= useRef();
    const contactRef= useRef();

    const addUser=(e)=>{
        e.preventDefault();
        const name= nameRef.current.value;
        const phone= contactRef.current.value;
        let id= user.length;
        dispatch(userAction.add({id:id++,name,phone}));
        nameRef.current.value="";
        contactRef.current.value=""
    }
    return(
        <>
        <form className="AddForm" onSubmit={addUser}>
            <label style={{fontSize:"40px"}}>Enter your name </label>
            <input ref= {nameRef} type="text" /><br/>
            <label style={{fontSize:"40px"}}>Enter your contact </label>
            <input ref={contactRef} type="number" /><br/>
            <input style={{fontSize:"20px", margin:"10px 0px"}} type="submit" />
        </form>
        </>
    )
}

export default Add;