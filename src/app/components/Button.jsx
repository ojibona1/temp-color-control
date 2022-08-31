import React from "react";
import './assets/button.css'




const Button =(props)=> {

    return(
        <>
        <button  onClick={props.onClick} className={props.className}>{props.name}</button>
        </>
    )
}

export default Button