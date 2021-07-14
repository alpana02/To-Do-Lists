import React, { useState } from "react";
import "./index.css";
import ToDoLists from "./ToDoList";


const App = () => { 

    const [inputList, setInputList] = useState("");
    const [Items, setItems] = useState([]); //using sq bracket insde the usestate mens we are declaring an array
    /* int map function - curr val, index of curr val, arr, this*/
    const itemEvent = (event) =>{
        setInputList(event.target.value);
    };
    const listOfItems = () =>{
        setItems((oldItems) => {
            return [...oldItems,inputList] 
        });
        setInputList(""); //SETiNPUTlIST is reset so that the initial placeholder will be displayed
    }
    const deleteItems = (id) =>{
        console.log("deleted");
        setItems((oldItems)=>{
            return oldItems.filter((arrElem, index)=>{
                return index !== id;
            });
        });
    };

    return (
    <>
        <div className="main_div">
            <div className ="center_div">
                <br/>
                <h1>ToDo List</h1>
                <br/>
                <input type="text" placeholder="Add a Items" 
                value = {inputList} onChange={itemEvent}/>
                <button onClick={listOfItems}> + </button>
                <ol>
                    {Items.map((itemval, index)=>{
                        return <ToDoLists 
                            key={index} 
                            id={index}
                            text = {itemval}
                            onSelect = {deleteItems}
                        />;
                    })} 
                </ol>
            </div>
        </div>
    </>
    );
};
export default App;
