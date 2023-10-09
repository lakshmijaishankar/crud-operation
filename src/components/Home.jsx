import useFetch from "../customHook/useFetch";
import FoodList from "./Foodlist";

const Home = () => 
{
    let{data : items,load,mess}=useFetch()
    return (  
        <home>
            {mess && <h1 className="text-center">{mess}</h1>}
            {load && <h1 className="text-center mt-5">Data is Loading Please wait.......</h1> }
            {items && <FoodList food={items}/>}
        </home>
       
    );
}
 
export default Home;