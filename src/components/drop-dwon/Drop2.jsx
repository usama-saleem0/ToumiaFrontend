import React, { useState } from "react";


const Drop2 = () => {

    const [selectedOption, setSelectedOption] = useState('John Smith');
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
    };


    return (
        <>
    <div className="select-station-drop">


    <div onClick={() => setIsOpen(!isOpen)} className="dropdwon-1-list">
                {selectedOption}
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="9" viewBox="0 0 14 9" fill="none">
                    <path
                        d="M7.0195 6.47768C7.7762 5.59611 8.51481 4.73692 9.25281 3.87773C10.2339 2.73567 11.2162 1.59423 12.1961 0.45092C12.4398 0.166803 12.7371 0.00764727 13.1161 0.0561399C13.5013 0.105254 13.7786 0.314146 13.9232 0.676597C14.0716 1.04962 14.0012 1.39466 13.7444 1.69681C13.232 2.30048 12.714 2.89918 12.1979 3.49974C10.7519 5.18393 9.30392 6.86687 7.86096 8.55416C7.57611 8.88677 7.23703 9.0882 6.79947 8.962C6.59503 8.90294 6.37749 8.77673 6.23974 8.61696C4.23394 6.29801 2.23874 3.96974 0.245405 1.64023C-0.121722 1.21126 -0.0687418 0.598262 0.349497 0.243271C0.785189 -0.126641 1.3898 -0.0706875 1.77999 0.383776C3.46977 2.34959 5.15831 4.31727 6.84684 6.28433C6.89671 6.34277 6.94907 6.39873 7.0195 6.47768Z"
                        fill="white"
                    />
                </svg>
            </div>
                            
                                    {isOpen && (
                                        <ul className="options-list" >
                                            <li onClick={() => handleOptionClick('Option1')} className="select-option">
                                             Option1
                                            </li>
                                            <li onClick={() => handleOptionClick('Option2')} className="select-option">
                                            Option2
                                            </li>
                                            <li onClick={() => handleOptionClick('Option3')} className="select-option">
                                            Option3
                                            </li>
                                            <li onClick={() => handleOptionClick('Option4')} className="select-option">
                                            Option4
                                            </li>
                                            <li onClick={() => handleOptionClick('Option5')} className="select-option">
                                            Option5
                                            </li>
                                        </ul>
                                    )}
                                </div>
        </>
    )



}


export default Drop2