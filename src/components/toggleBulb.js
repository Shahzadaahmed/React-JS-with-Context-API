import React, { useContext } from 'react'
import { bulbContext } from "../App";
import lightOff from "../Images/Img1.gif";
import lightOn from "../Images/Img2.gif";

const ToggleBulb = () => {

    // Contecxt hook...!
    const [cloneToggle, setCloneToggle] = useContext(bulbContext);

    // Function to toggle bulb...!
    const toggleFunc = () => {
        setCloneToggle(!cloneToggle);
    }

    return (
        <React.Fragment>
            <h2> Toggle Bulb using React JS with Context! </h2>
            <h3> Light {(cloneToggle) ? ('On') : ('Off')} </h3>
            <img
                alt="Bulb"
                src={(cloneToggle) ? (lightOn) : (lightOff)}
            />
            <br />
            <button onClick={toggleFunc}> {(cloneToggle) ? ('Off') : ('On')} </button>
        </React.Fragment>
    );
}

export default ToggleBulb;