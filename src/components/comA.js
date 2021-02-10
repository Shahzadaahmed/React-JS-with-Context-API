// Note: component A...!

import React, { useContext } from 'react';
// import ComB from "./comB";
import TodoListApp from "./todo-list";
// import MyList from "./list";
// import ToggleBulb from "./toggleBulb";
// import LearningCookie from "./learning-cookies";

const ComA = () => {

    return (
        <React.Fragment>
            <TodoListApp />
        </React.Fragment>
    );
}

export default ComA;