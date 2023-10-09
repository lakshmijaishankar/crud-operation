import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import '../style/foodlist.css'
const Fooddetails = () => 
{
    let history=useHistory()
    let[details,setDetails]=useState(null)
    let{id}=useParams()
    useEffect(()=>
    {
        axios.get("http://localhost:4000/food/"+id)//axios.get()->return promise response
        .then(res=>setDetails(res.data))
    },[])
    const removeFood=()=>
    {
        axios.delete("http://localhost:4000/food/"+id)
        .then(()=>
        {
            alert("Food Data Remove From DataBase")
            history.push("/")
        })
    }
    return ( 
        <section style={{margin:"auto"}}>
            <div className="food">
            <div>
            {details && <div className="cards" key={details.id} >
        <div className="foodlist">
                    <div className="foodimg">
                    <img src={details.pic} alt="food" className='rounded-3'/>
                    </div>
                    <h1 className='fs-4 text-center p-1 m-0 text-dark'style={{textTransform:"capitalize"}}>{details.foodName}</h1>
                    <div className="price d-flex justify-content-center mt-3 bg-dark align-items-center w-75 m-auto rounded-2">
                    <i class="fa-sharp fa-solid fa-indian-rupee-sign text-white pe-2 "></i>
                    <h3 className='fs-5 m-0 text-white'>{details.price}</h3>
                    </div> 
        </div>
                <div className="card bg-transparent rounded-0 border-0 mt-1 align-items-center">
                <button className='mt-2 btn btn-outline-dark fs-6' onClick={removeFood}>Remove Food</button>
                <Link className="text-decoration-none mt-2 btn btn-outline-dark">Update Food</Link>
                </div>
        </div>
        }
        </div>
            </div>
        </section>
     );
}
 
export default Fooddetails;