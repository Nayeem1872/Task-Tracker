import React, { useState, useEffect } from 'react'
import EditTask from './EditTask'

const Todo = ({task, index, taskList,setTaskList }) => {
const [time,setTime] = useState(0);
const [running, setRunning] = useState(false)


  useEffect(()=>{
    let interval;
    if(running){
    interval = setInterval(()=>{
      setTime((prevTime)=>prevTime + 10)
    },10)
  }
    else if(!running){
        clearInterval(interval)
    }
    return ()=>clearInterval(interval)

  },[running])




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
        <div className='w-full flex flex-col items-center justify-center'>
          <div className='text-xl font-semibold py-3'>

              <spna>{("0"+ Math.floor((time/3600000)%24)).slice(-2)}:</spna>

              <spna>{("0"+Math.floor((time/60000)%60)).slice(-2)}:</spna>

              <spna>{("0"+Math.floor((time/1000)%60)).slice(-2)}:</spna>

              <spna>{("0"+Math.floor((time/10)%100)).slice(-2)}</spna>


          </div>
          <div className='py-4 flex flex-row justify-evenly gap-4'>
              {running ? (<button className='border rounded-lg bg-rose-400 py-1 px-3'>
                Stop
              
              </button>):(<button className='border rounded-lg bg-lime-400  py-1 px-3'>
              
              Start
              </button>
                
                )}
                <button className='border rounded-lg py-1 px-3 bg-cyan-400 hover:opacity-90 hover:duration-100'> Reset </button>
              

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