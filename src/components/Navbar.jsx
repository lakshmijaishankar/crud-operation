import { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../customHook/useFetch";
import "../style/navbar.css"
const Navbar = () => 
{
    let[search,setSearch]=useState("")
    if(localStorage.getItem("orders")==null)
    {
        localStorage.setItem("orders","[]")
    }
    return (  
         <nav className="navbar p-0" >
            <div className="img d-flex align-items-center justify-content-between">
                <Link to="/"><img src="food.png" alt=""/></Link>
                <div className="input d-flex align-items-center justify-content-center">
                    <Link to={`/searchfood${search}`}><i class="fa-sharp fa-solid fa-magnifying-glass " ></i></Link>
                    <input type="text" className="pt-2 pb-2 ps-3 pe-5" value={search} placeholder="Search for food" onChange={e=>setSearch(e.target.value)}/>
                </div>
            </div>
            <div className="foodorders w-25 orders">
                <ul className="m-0 p-0 d-flex justify-content-around" style={{listStyle:"none"}}>
                    <li>
                        <a  href=""className="text-decoration-none">Add Food</a>
                    </li>
                    <li>
                        |
                    </li>
                    <li>
                        <a  href=""className="text-decoration-none">Orders</a>
                    </li>
                </ul>
            </div>
        </nav>
       
    );
}
 
export default Navbar;