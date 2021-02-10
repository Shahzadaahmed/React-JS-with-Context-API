// Note: Main app component...!

import React, { createContext, useState } from 'react';
import ComA from "./components/comA";

export const FirstName = createContext();
export const ListContext = createContext();
export const TodoContext = createContext();
export const bulbContext = createContext();

let arrOfObj = [
  { name: "Ahmed", id: "1", title: "Front-End Developer" },
  { name: "Kashan", id: "2", title: "Accountant" },
  { name: "Mehran", id: "3", title: "Senior Sales Men" },
  { name: "Shahzaib", id: "4", title: "Sales Men" },
  { name: "Khurram", id: "5", title: "Photographer" }
]

const App = () => {

  const [stateList, setStateList] = useState(arrOfObj);
  const [todoList, setTodoList] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [updateFirstName, setUpdateFirstName] = useState("Ahmed");

  return (
    <React.Fragment>
      {/* <FirstName.Provider value={[updateFirstName, setUpdateFirstName]}>
        <ComA />
      </FirstName.Provider> */}

      {/* <ListContext.Provider value={[stateList, setStateList]}>
        <ComA></ComA>
      </ListContext.Provider> */}

      <TodoContext.Provider value={[todoList, setTodoList]}>
        <ComA />
      </TodoContext.Provider>

      {/* <bulbContext.Provider value={[toggle, setToggle]}>
        <ComA />
      </bulbContext.Provider> */}

      {/* <ComA /> */}
    </React.Fragment>
  );
}

export default App;