import React from 'react'
import { useNavigate } from 'react-router-dom'
function Help() {
    const navigate=useNavigate()

    function forwardHandler(){
        navigate("/Upwaad")
    }
    function BackHandler(){
        navigate("/Contact")
    }
    return (
        <div>
            <div> this is your Help</div>
            <button onClick={forwardHandler}>move Forward</button>
            <button onClick={BackHandler}>Back</button>
        </div>
    )
}

export default Help