import { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
 
export default function UpdateTask() {
  const [taskData, setTaskData] = useState({ title: "", description: "" });
  const {id} = useParams();
  const navigate = useNavigate()
   
   useEffect(()=>{
    getTask(id);
  },[])

  const getTask = async(id)=>{
    let task = await fetch('http://localhost:2200/task/'+id)
    task = await task.json()
    if(task.result){
        setTaskData(task.result)
    }
  }

  const UpdateTask =async ()=>{
    console.log("fun called ",taskData);
    let task = await fetch("http://localhost:2200/UpdateTask/" +id ,{
        method :'put',
        body : JSON.stringify(taskData),
        headers:{
            'Content-Type':'application/json'
        }
    })

    task = await task.json()
    if(task){
   navigate("/list")
    }

  }
  

  return (
    <div className="bg-gray-400 flex flex-col justify-center items-center m-5 p-5 ">
      <h1 className="font-bold text-2xl">AddTask New Page</h1>
      <div className=" m-4 gap-4 w-96 mx-auto " >
        <div>
         <label className="font-bold text-lg " htmlFor="title">
          Title
        </label>
        <input value={taskData.title}
          onChange={(event) =>
            setTaskData({ ...taskData, title: event.target.value })
          }
          className="border-2 border-gray-950 p-2 w-full outline-none"
          type="text"
          name="title"
          id="title"
          placeholder="Enter Task Title"
        />
        <label className="font-bold text-lg" htmlFor="description">
          Description
        </label>
        <textarea value={taskData.description}
          onChange={(event) =>
            setTaskData({ ...taskData, description: event.target.value })
          }
          className="border-2 border-gray-950 p-2 w-full outline-none"
          name="description"
          id="description"
          placeholder="Enter Text"
        ></textarea>
        <button
           onClick={UpdateTask}
          className="bg-gray-950 text-white w-full text-center rounded-md p-2"
        >
          UpdateTask
        </button>
        </div>
        
      </div>
    </div>
  );
}
