import React from "react";


const Toggle = () => {

    
    return(
        <div>
            <label htmlFor="toggle-button">
                <input type="checkbox" id="toggle-button" className="cursor-pointer h-32 w-64 rounded-full appearance-none 
                bg-whenNotChecked bg-opacity-75 border-textColor border-3 checked:bg-whenChecked transition duration-500 relative"/>
            </label>
        </div>
    )
}

export default Toggle