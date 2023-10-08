import React from "react";


const Toggle = () => {

    
    return(
        <div>
            <label htmlFor="toggle-button">
                <input type="checkbox" id="toggle-button" className="cursor-pointer h-32 w-64 rounded-full appearance-none 
                bg-borderColor bg-opacity-5 border-textColor border-3 checked:bg-foreColor transition duration-300 relative"/>
            </label>
        </div>
    )
}

export default Toggle