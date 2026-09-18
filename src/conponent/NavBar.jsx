import { useEffect, useState } from 'react';
import {Link, Navigate, useNavigate} from 'react-router-dom'
function NavBar(){
    const [login, setLogin]=useState(localStorage.getItem('login'))
     const navigate = useNavigate()
    const logout=()=>{
      localStorage.removeItem('login')
       setLogin(null)   
       setTimeout(() => {
          navigate("/login")
       },0);
    }

    useEffect(()=>{
      const handleStorage=()=>{
         setLogin(localStorage.getItem('login'))
      }

     window.addEventListener('localStorage-change',handleStorage)

     return()=>{
     window.removeEventListener('localStorage-change',handleStorage)
     }
    },[])
    return(   
       <nav className='flex justify-between items-center bg-gray-800 gap-4 p-2 text-white'>
             <div>To-Do List</div>
             

             {
               
                login ?
                (
                    <div className='flex gap-5 '>
             <ul>
                <li><Link to="/">Add Task</Link></li>
             </ul>
             <ul>
                <li>
                    <Link to="/list">List</Link>
                    </li>
             </ul>
             <ul>
                <li>
                    <Link onClick={logout}>LogOut</Link>
                    </li>
             </ul>
              </div>
                )
                :null
             }


                
           
             
        </nav>
        
    )
}

export default NavBar;