import { useState } from "react";
import Addtask from "./Components/Addtask";
import Todo from "./Components/Todo";



function App() {
  const [taskList,setTaskList]= useState( [ ] );
  // console.log(taskList)
  return (
    <>
      <h1 className="text-2xl font-bold py-4 pl-6">
        Task Tracker
      </h1>
      <div className="flex flex-row items-center">
      <p className="text-xl pl-6 my-2">
       <Addtask taskList={taskList} setTaskList={setTaskList}  />  + ADD NEW
      </p>
      </div>

      <div>
        <h2 className="bg-gray-200 font-semibold max-w-lg ml-6 w-3/4 my-2 px-4 py-2 text-xl">TO DO:</h2>
      {taskList.map((task,i)=>
      <>
      <Todo key={new Date().getTime()} task={task} index={i} taskList={taskList} setTaskList={setTaskList}/>
        


      </>
      
      )}
      </div>
    
    
    
    </>
  );
}

export default App;
