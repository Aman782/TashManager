import { useState } from 'react';
import './App.css'

function App() {
  const [task, setTask] = useState([]);
  const [data, setData] = useState('');
  
  const handleOnclick = ()=>{
    let newTask = [...task, data];
    setTask(newTask);
    setData('');
  }

  const handleOnChange = (e)=>{
    setData(e.target.value);
  }

  const handleOnDelete = (t)=>{
    let arr = task.filter(item => item!==t);
    setTask(arr);
  }

  return (
    <>
      <div className=''>
         <input className='inputBox' placeholder='enter task' onChange={handleOnChange} value={data}></input>
         <button onClick={handleOnclick}>ADD</button>
      </div>

      <div>
        <ol>
          {task.map((t)=> t!='' && <div key={t} className='task'><li><b>Task: </b>{t}</li><button onClick={()=> handleOnDelete(t)}>Delete</button></div>)}
        </ol>
      </div>
    </>
  )
}

export default App
