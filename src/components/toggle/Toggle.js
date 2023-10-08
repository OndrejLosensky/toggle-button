import React from "react";


const Toggle = () => {

    
    return(
        <div className="shadow-xl">
            <label htmlFor="toggle-button">
                <input type="checkbox" id="toggle-button" className="cursor-pointer h-32 w-64 rounded-full appearance-none 
                bg-whenNotChecked bg-opacity-75 border-textColor border-3 checked:bg-whenChecked transition duration-300 relative"/>
            </label>
        </div>
    )
}

export default Toggle