import React, { useState } from "react";
import "./style.css"

const Toggle = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [emoji, setEmoji] = useState("☀️"); 
    const [isEmojiVisible, setIsEmojiVisible] = useState(true);

    const toggleHandler = () => {
        setIsChecked(!isChecked);
        setIsEmojiVisible(false); 

       
        setTimeout(() => {
            setEmoji(isChecked ? "☀️":"🌙");
            setIsEmojiVisible(true); 
        }, 100); 
    };

    return (
        <div className="relative">
            <label htmlFor="toggle-button">
                <input
                    type="checkbox"
                    id="toggle-button"
                    className="cursor-pointer shadow-xl h-24 w-60 rounded-full appearance-none bg-whenNotChecked bg-opacity-75 border-textColor border-3 checked:bg-whenChecked transition duration-300 relative"
                    onChange={toggleHandler}
                    checked={isChecked}
                />
            </label>
            <div
                className={`absolute top-0 bottom-0 ${
                    isChecked ? "left-8" : "right-8"
                } flex items-center`}
                style={{ fontSize: "32px", visibility: isEmojiVisible ? "visible" : "hidden" }}
            >
                {emoji}
            </div>
        </div>
    );
};

export default Toggle;
