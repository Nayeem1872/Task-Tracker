import React, { useState, useEffect } from 'react'

const EditTask = ({task,index,taskList,setTaskList}) => {
    const [editModal,setEditModal] = useState(false);
    const [projectName,setProjectName]= useState("")
const [taskDescription,setTaskDescription] = useState("");

useEffect(() => {

    setProjectName(task.projectName)
    setTaskDescription(task.taskDescription)

},[task])



const handleInput=(e)=>{
//  const name = e.target.name;
//  const value = e.target.value

//  i can put those 2 line into one 
const { name,value }= e.target;
if (name==="projectName") setProjectName(value)
if(name==="taskDescription") setTaskDescription(value)


}



const handleUpdate = e =>{
    e.preventDefault();
    let taskIndex = taskList.indexOf(task);
    taskList.splice(taskIndex, 1) 



    setEditModal(false)
    setTaskList([...taskList, {projectName, taskDescription}]);
    setProjectName("");
    setTaskDescription("");
    // console.log(taskList)
}


  return (
    <>
    
    
    <button className='font-semibold' onClick={()=>setEditModal(true)}>Edit</button>
    {editModal ?(
        <>
            <div className='flex items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-100'>
            <div className='w-6/12 border max-w-lg hover:opacity-500 hover:duration-600  rounded-lg  shadow-lg'>
            <div className='flex flex-row  p-5 hover:duration-500 justify-between  border-b'>
                <h3 >Edit TASK</h3>
            
            <button  className='px-1 text-black font-semibold block leading-none float-right' onClick={()=>setEditModal(false)}>

                X

            </button>


                </div>
                <form className='p-6'>
                    <div>
                    <label className='track-wide uppercase text-xs font-semibold' htmlFor='project-description'>Project Name</label>
                    <input className='w-full text-gray-400 py-3 px-4 mb-5 leading-tight focus:outline-none focus:bg-white rounded hover:duration-200 bg-gray-100' id="project-name" type="text" placeholder='Project Name' required name='projectName' value={projectName} onChange={handleInput} />
                    </div>
                    <div>
                    <label className='track-wide uppercase text-xs font-semibold' htmlFor='project-description'>Project Description</label>
                        <textarea className='w-full text-gray-400 py-3 px-4 mb-5 leading-tight focus:outline-none rounded focus:bg-white hover:duration-200 bg-gray-100' id='task-description' row='3' placeholder='Task Description' name='taskDescription' value={taskDescription} onChange={handleInput} />



                    </div>


                </form>
                <div className='flex justify-end p-6 border-t'>
                    <button className='bg-blue-500 text-black rounded uppercase text-sm px-4 py-4 font-semibold hover:opacity-70' onClick={handleUpdate}>Edit Task</button>


                </div>
                </div>
            </div>
        
        
        
        
        
        
        
        
        </>
        // here :null make sure that it reture false here
    ):null} 





    </>
  )
}

export default EditTask