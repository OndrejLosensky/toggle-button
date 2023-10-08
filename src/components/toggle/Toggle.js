import React from "react";


const Toggle = () => {

    
    return(
        <div>
            <label htmlFor="toggle-button">
                <input type="checkbox" id="toggle-button" className="cursor-pointer h-32 w-64 rounded-full appearance-none 
                bg-slate-50 bg-opacity-5 border-textColor border-3 checked:bg-slate-400 transition duration-300 relative"/>
            </label>
        </div>
    )
}

export default Toggle