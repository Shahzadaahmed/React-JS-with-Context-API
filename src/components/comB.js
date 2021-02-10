// Note: component B...!

import React, { useContext } from 'react';
import { FirstName } from "../App";

const ComB = () => {

    const [fName, setFName] = useContext(FirstName);

    // Function to update name...!
    const updateUserName = () => {
        setFName("Shaheen");
    }

    return (
        <React.Fragment>
            <h1> Update Name using React JS with Context </h1>
            <h2> {fName} </h2>
            <button onClick={updateUserName}> Update Name </button>
        </React.Fragment>
    );
}

export default ComB;