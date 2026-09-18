import { useEffect, useState } from "react";
 import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    const [userData,setUserdata]=useState();
    const navigate= useNavigate();

    useEffect(()=>{
      if(localStorage.getItem('login')){
        navigate('/list')
      }
    },[])

    const  handlelogin = async()=>{
        console.log(userData);
    let result = await fetch('http://localhost:2200/login',{
        method:'post',
        credentials:'include',
        body:JSON.stringify(userData),
        headers:{
            'Content-Type':'Application/JSON'
        }
    })
    result =await result.json();
    if(result.success){
      document.cookie="token="+result.token;
        localStorage.setItem('login',userData.email)
        window.dispatchEvent(new Event('localStorage-change'))
       navigate('/list')
    }  
    
  }
   
    return (
    <div className="bg-gray-400 flex flex-col justify-center items-center m-5 p-5 ">
      <h1 className="font-bold text-2xl">Login Form</h1>
      <div className=" m-4 gap-4 w-96 mx-auto " >
        <div>

        <label className="font-bold text-lg " htmlFor="email">
          Email
        </label>
        <input
         onChange={(event)=>setUserdata({... userData, email:event.target.value})}

          className="border-2 border-gray-950 p-2 w-full outline-none"
          type="text"
          name="email"
          id="email"
          autoComplete="name"
          placeholder="Enter your email"
        />

        <label className="font-bold text-lg " htmlFor="password">
          Password
        </label>
        <input
          onChange={(event)=>setUserdata({... userData, password:event.target.value})}

          className="border-2 border-gray-950 p-2 w-full outline-none"
          type="password"
          name="password"
          id="password"
          autoComplete="name"
          placeholder="Enter your password"
        />
        <button
         onClick={handlelogin}
          className="bg-gray-950 text-white w-full text-center rounded-md p-2 mt-6"
        >
          Login
        </button>
        <Link className="text-blue-700 underline mt-3" to="/signup" >SignUp</Link>
        </div>
        
      </div>
    </div>
  );
  };
  
