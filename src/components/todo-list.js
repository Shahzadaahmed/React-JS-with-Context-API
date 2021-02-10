import React, { useState, useContext } from 'react';
import { TodoContext } from "../App";
let targetIndex;

const TodoListApp = () => {

    // Contecxt hook...!
    const [myTodoList, setMyTodoList] = useContext(TodoContext);

    // Handeling states here...!
    const [todoInput, setTodoInput] = useState("");
    const [isEditing, setIsEditing] = useState(false);

    /***** FUCNTIONS *****/

    // Note: Function to add item...!
    const addItem = () => {
        let todoListClone = myTodoList;
        if (todoInput != 0) {
            todoListClone.push(todoInput);
            setMyTodoList(todoListClone);
            setTodoInput("");
        }

        else {
            alert("You need to fill all the fields accurately!");
            setTodoInput("");
        }
    }

    // Note: Function to delete item...!
    const deleteItem = (indexKey) => {
        let todoListClone = myTodoList.slice(0);
        todoListClone.splice(indexKey, 1);
        setMyTodoList(todoListClone);
    }

    // Function to edit item...!
    const editItem = (indexKey) => {
        setIsEditing(true);
        setTodoInput(myTodoList[indexKey]);
        targetIndex = indexKey;
    }

    // Function to update item...!
    const updateItem = () => {
        if (todoInput != 0) {
            let todoListClone = myTodoList.slice(0);
            todoListClone.splice(targetIndex, 1, todoInput);
            setMyTodoList(todoListClone);
            setTodoInput("");
            setIsEditing(false);
        }

        else {
            alert("You need to fill all the fields accurately!");
            setTodoInput("");
        }
    }

    // Function to cancel item...!
    const cancel = () => {
        setIsEditing(false);
        setTodoInput("");
    }

    // Function to delete all...!
    const deleteAllItems = () => {
        let todoListClone = myTodoList.slice(0);
        todoListClone.splice(0, todoListClone.length);
        setMyTodoList(todoListClone);
        alert("All Items Deleted Successfully!");
    }

    return (
        <React.Fragment>
            <h2> Todo List App using React-JS with Context! </h2>
            <input
                type="text"
                value={todoInput}
                onChange={(event) => { setTodoInput(event.target.value) }}
            />
            {
                (isEditing)
                    ?
                    (
                        <div>
                            <button onClick={updateItem}> Update Item </button>
                            <button onClick={cancel}> Cancel </button>
                        </div>
                    )
                    :
                    (
                        <div>
                            <button onClick={addItem}> Add Item </button>
                            <button onClick={deleteAllItems}> Delete All </button>
                        </div>
                    )
            }

            <div>
                {
                    myTodoList.map((item, index) => {
                        return (
                            <li key={index}>
                                {item}
                                <button onClick={() => { deleteItem(index) }}> Delete Item </button>
                                <button onClick={() => { editItem(index) }}> Edit Item </button>
                            </li>
                        );
                    })
                }
            </div>
        </React.Fragment>
    );
}

export default TodoListApp;