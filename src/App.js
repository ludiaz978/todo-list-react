import './App.css';
import AddTask from './AddTask';
import TaskList from './TaskList';
import { useState } from 'react';

function App() {
const [tasks, setTasks] = useState([
  {id: 1, text: "Learn React"}
])
//update/write functions that does stuff then use set tasks t
const addNewTask =(task) => {
const id = Math.floor(Math.random()* 10000) +1;
const newTask = {id, ...task}
setTasks([...tasks, newTask]);
}
return (
<div className="App">
<h1>My React To Do List</h1>
<AddTask addNewTask={addNewTask}/>
<TaskList tasks={tasks}/>

</div>
);
}  
export default App;
