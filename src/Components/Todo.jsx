import React, { useState, useEffect } from 'react'
import EditTask from './EditTask'

const Todo = ({task, index, taskList,setTaskList }) => {
const [time,setTime] = useState(0);

  const handleDelete =(itemID)=>{
    let removeIndex = taskList.indexOf(task)
    taskList.splice(removeIndex,1 )
    setTaskList ((currentTasks => currentTasks.filter
    (todo => todo.id!==itemID)))
  }



  return (
    <>
    <div className='flex flex-col items-start justify-start bg-gray-200 my-4 ml-6 py-4 px-6 w-3/4 max-w-lg shadow-lg rounded-lg'>
        <div className='w-full flex flex-row justify-between'>
<p className='font-semibold text-xl'>{task.projectName}</p>
<EditTask task={task} index={index} taskList={taskList} setTaskList={setTaskList}/>

</div>
        <p className='text-lg py-2'>{task.taskDescription}</p>
        <div>
          <div>

              <spna>{("0"+ Math.floor((time/3600000)%24)).slice(-2)}:</spna>

              <spna>{("0"+Math.floor((time/60000)%60)).slice(-2)}:</spna>

              <spna>{("0"+Math.floor((time/1000)%60)).slice(-2)}:</spna>

              <spna>{("0"+Math.floor((time/10)%100)).slice(-2)}</spna>


          </div>
          <div>



          </div>



        </div>



        <div className='w-full flex justify-center'>

        <button className='bg-red-400 text-white rounded uppercase font-semibold py-2 px-3' onClick={handleDelete}>Delete</button>


        </div>


    </div>
    </>
  )
}

export default Todo