import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
 
export default function List (){
    const [listData, setListData]=useState([]);
     useEffect(()=>{
        gettDataList();
    },[])

    const gettDataList= async()=>{
        let data = await fetch("http://localhost:2200/task",{
            credentials:"include"
        })
        data = await data.json()
        if(data.success){
            setListData(data.result)
        }

    }
  
     const deleteTask= async(id)=>{
            let item = await fetch("http://localhost:2200/delete/"+id,{method:'delete',credentials:"include",})
        item = await item.json()
        if(item.success){
             gettDataList()
            
         }
        }

    return(
        <div>
            <h1>To-D0 List</h1>
             <ul className=" w-full text-left">
                <div className="flex">
               <li className="border border-gray-600 p-2 w-[4%] font-bold bg-gray-600">S.No</li>
                <li className="border border-gray-600 p-2  w-[32%] font-bold bg-gray-600">Title</li>
                <li className="border border-gray-600 p-2  flex-1 font-bold bg-gray-600">Description</li>
                <li className="border border-gray-600 p-2  flex-1 font-bold bg-gray-600">Action</li>

            </div>
                
                {
                   listData && listData.map((item,index)=>(
                    <div className="flex">
                    <li className="border border-gray-600 p-2  w-[4%] bg-gray-400">{index+1}</li>
                    <li className="border border-gray-600 p-2  w-[32%] bg-gray-200">{item.title}</li>
                    <li className="border border-gray-600 p-2  flex-1 bg-gray-200">{item.description}</li> 
                    <li className="border border-gray-600 p-2  flex-1 bg-sky-500"> <button onClick={()=>{deleteTask(item._id)}}>Delete</button>
                    <Link to={"/update/"+item._id} className="border border-gray-600 p-2  flex-1 bg-green-400">UpdateTask</Link>
                    </li> 

                    </div> 
                    ))
                }
            </ul> 

            
        </div>
    )
}