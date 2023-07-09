import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
 
const RestaurantMenu = () => {

  const {resId} = useParams();

  const {res, setRes} = useState();
  
  useEffect(() => {
    getRestuarantInfo();
  }, [])

  async function getRestuarantInfo(){
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=103810");
    const json = await data.json();
    console.log(json);
  }

  const {id} = useParams();
    return (
        <div className="nav-items">
          <ul>
            <li>This is restaurant menu id: {id}</li>
          </ul>
        </div>
    );
  };

  export default RestaurantMenu;
