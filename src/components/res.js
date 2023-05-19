import {useParams} from "react-router-dom";
 
const RestaurantMenu = () => {

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