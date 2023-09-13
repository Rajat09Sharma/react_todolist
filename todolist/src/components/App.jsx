import React, { useEffect, useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";
import axios from "axios";

function App() {
  const [items, setItems] = useState([]);

  useEffect(()=>{
    async function fectData(){
      const response= await axios.get("http://localhost:3001");
      try{
        setItems(response.data);
      }catch(err){
        console.log(err.message);
      }
    }
    fectData();
  },[items])

  async function addItem(inputText) {
      try{
        const response = await axios.post("http://localhost:3001/post",{text:inputText}, { headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }});
        console.log(response.data);
  
      }catch(err){
        console.log(err);
      }
  }

  async function deleteItem(id) {
    // console.log(id);
    try{
    const response = await axios.delete("http://localhost:3001/delete/"+id);
    console.log(response.statusText);
    }catch(err){
      console.log(err);
    }
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea addButtonFunction={addItem} />
      <div>
        <ul>
        {items.length===0 ? <h1>No record in Database!!</h1>: 
          items.map((todoItem, index) => (
            <ToDoItem
              key={index}
              id={todoItem._id}
              text={todoItem.item}
              deleteItem={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
