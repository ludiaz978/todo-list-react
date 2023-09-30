import { useState } from "react";

//w/ destructuring
const AddTask = ({addNewTask}) => {
 const [text, setText] = useState('');


const onSubmit = (e) => {
    e.preventDefault ();
    addNewTask({text});
    setText('');
}
return(
<div>
<h2>Add Task</h2>

<form onSubmit={onSubmit}>
<input type="text" placeholder="Enter a new task" value={text} onChange={(e) => setText(e.target.value)}/>
<button type="submit">save Task</button>
</form>

</div>
)
}
export default AddTask;

// w/out destructuring props
// const AddTask = (props) => 


//     return(
//     <>
//     <h2>Add Task</h2>
    
//     <p>{JSON.stringify(props.tasks)}</p>
//     <p>{example}</p>
//     </>
//     )
//     }