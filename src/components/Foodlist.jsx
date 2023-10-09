import axios from 'axios';
import { Link } from 'react-router-dom';
import '../style/foodlist.css'
const FoodList = ({food}) =>
 {
    let addFood=(itemid)=>
    {
        console.log(itemid);
        axios.get(" http://localhost:4000/food/"+itemid)
        .then(res=>
            {
                let order=localStorage.getItem("orders")
                order=JSON.parse(order)
                order.push(res.data)
                order=JSON.stringify(order)
                localStorage.setItem("orders",order)
                alert("Food As Been Added To Our Local Storage")
            })
    }
    return ( 
        <section >
            <h1 className="text-center m-0 mt-3 mb-3">All Food</h1>
            <div className="food">
                {
                food.map(value=>{return(
                    <div className="cards" key={value.id} >
                        <Link to={`/foodDetails${value.id}`} className='text-decoration-none'>
                        <div className="foodlist">
                        <div className="foodimg">
                        <img src={value.pic} alt="food" className='rounded-3'/>
                        </div>
                        <h1 className='fs-4 text-center p-1 m-0 text-dark'style={{textTransform:"capitalize"}}>{value.foodName}</h1>
                        <div className="price d-flex justify-content-center mt-3 bg-dark align-items-center w-75 m-auto rounded-2">
                        <i class="fa-sharp fa-solid fa-indian-rupee-sign text-white pe-2 "></i>
                        <h3 className='fs-5 m-0 text-white'>{value.price}</h3>
                        </div> 
                    </div></Link>
                    <div className="button d-flex justify-content-center mt-1">
                    <button className='mt-2 btn btn-outline-warning fs-6' onClick={()=>addFood(value.id)}>AddFood</button>
                    </div>
                    </div>
                )})
            }
            </div>
        </section>

     );
}
 
export default FoodList;