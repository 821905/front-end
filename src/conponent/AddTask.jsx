import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddTask() {
  const [taskData, setTaskData] = useState();
  const navigate = useNavigate();
  const handleAddTask = async () => {
    console.log(taskData);
    let result = await fetch('http://localhost:2200/add-task',{
        method:'post',
        body:JSON.stringify(taskData),
        credentials:"include",
        headers:{
            'Content-Type':'Application/JSON'
        }
    })
    result =await result.json();
    if(result.success){
      navigate("/list")
        console.log("new task added");
    } else{
       console.log("try after sometimes")
    }
    
    
  };
  return (
    <div className="bg-gray-400 flex flex-col justify-center items-center m-5 p-5 ">
      <h1 className="font-bold text-2xl">AddTask New Page</h1>
      <div className=" m-4 gap-4 w-96 mx-auto " >
        <div>
         <label className="font-bold text-lg " htmlFor="title">
          Title
        </label>
        <input
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
        <textarea
          onChange={(event) =>
            setTaskData({ ...taskData, description: event.target.value })
          }
          className="border-2 border-gray-950 p-2 w-full outline-none"
          name="description"
          id="description"
          placeholder="Enter Text"
        ></textarea>
        <button
          onClick={handleAddTask}
          className="bg-gray-950 text-white w-full text-center rounded-md p-2"
        >
          Submit
        </button>
        </div>
        
      </div>
    </div>
  );
}
