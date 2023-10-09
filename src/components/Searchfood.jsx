import { useParams } from "react-router-dom";
import useFetch from "../customHook/useFetch";
import FoodList from "./Foodlist";

const Searchfood = () => {
   let { name } = useParams()
   // console.log(name)
   let { data: items, load, mess : err } = useFetch("http://localhost:4000/food");
   // let food=items && items.filter((value)=>{return value.foodName.toLowerCase()=="Chicken Burger".toLowerCase()})
   // console.log(food)
   return (
      <div>
         {err && <h1 className="text-center">{err}</h1>}
         {load && <h1 className="text-center mt-5">Data is Loading Please wait.......</h1>}
         {items && <FoodList food={items.filter(({foodName})=>foodName.toLowerCase().includes(name.toLowerCase()))}/>}
      </div>
   );
}

export default Searchfood;