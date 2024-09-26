import { useState } from "react"

function Button({text, onClick, visibility}){

    return (
        <>
            <button className={`bg-black ${visibility} text-white rounded-2xl m-4 px-6 py-1 w-fit`} type="button" onClick={onClick}>{text}</button>        
        </>
    )
}

export default Button