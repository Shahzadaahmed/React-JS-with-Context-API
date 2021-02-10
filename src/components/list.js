import React, { useContext } from 'react';
import { listContext } from "../App";

const MyList = () => {

    // Contecxt hook...!
    const [data, setData] = useContext(listContext);

    return (
        <React.Fragment>
            {
                data.map((item, index) => {
                    return <h3 key={index}> {`Hi my name is ${item.name}. And my ID is ${item.id} and i am a ${item.title}.`} </h3>
                })
            }
        </React.Fragment>
    );
}

export default MyList;