import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMsg from "./components/WelcomeMsg";

function App() {
  // const initialTodoItems = [
  //   {
  //     name: "Buy Milk",
  //     dueDate: "4/10/2023",
  //   },
  //   {
  //     name: "Go to College",
  //     dueDate: "4/10/2023",
  //   },
  //   {
  //     name: "Like this video",
  //     dueDate: "right now",
  //   },
  // ];

const [todoItems, setItems] = useState([])

// ye main h yahan input se aaya h

const handleNewItem = (itemName, itemDueDate) => {
  // console.log(`New Item Added: ${itemName} Date: ${itemDueDate}`);


  const newTodoItems = [
    ...todoItems,
    { name: itemName, dueDate: itemDueDate },
  ];
  setItems(newTodoItems);
};

// item ko delete karne k liye filter method k use karte h

// filter method m jabtak true return hoga wo new array m add hoga false m drop ho jayega
const handleDeleteItem =(todoItem)=>{
  const newTodoItems = todoItems.filter(item => item.name !== todoItem);

  setItems(newTodoItems);

  // console.log(`Item Deleted:${todoItem}`)



};


  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem}/>
      
      {todoItems.length === 0 && <WelcomeMsg></WelcomeMsg>}<TodoItems onDeleteClick={handleDeleteItem}   todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
