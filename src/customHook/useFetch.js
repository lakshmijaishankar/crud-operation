import { useEffect, useState } from "react";

function useFetch() 
{
    let[data,setData]=useState(null)
    let[load,setLoad]=useState(true)
    let[mess,setMessage]=useState(null)
    useEffect(()=>
    {
        setTimeout(()=>{
            fetch("http://localhost:4000/food")
            .then((res)=>
            {
                if(res.ok)
                {
                    return res.json()
                }
                throw Error("Data Can't Fetch")
            })
            .then(d=>{setData(d);setLoad(false)})
            .catch(err=>{setMessage(err.message);setLoad(false)})
        },3000)
    },[])
    // data!=null && console.log(data);
    return {data,load,mess}
}

export default useFetch;