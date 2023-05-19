import { useState, useEffect } from "react";
import { RestaurantCard } from "../config.js";
import Shimmer from "../components/shimmer.js";


function  filterData( searchInput, allRestaurants){
 return allRestaurants.filter((allRestaurants) => allRestaurants.data.name.toLowerCase().includes(searchInput.toLowerCase()));
}
const Body = () => {
  
  // const [ constant, setConstantValue ] = useState("false");
  const [ allRestaurants, setAllRestaurant ] = useState([]);
  const [ filteredRestaurants, setFilteredRestaurant ] = useState([]);
  const [ searchInput, setSearchInput ] = useState(""); //returns variable name and function to be updated in search
  console.log("render()");

  //call this use effect whenever the dependency is changed ( In our case search input)
  useEffect(()=>{
    //Api call will be here
    getRestaurants();
  }, []);

  async function getRestaurants(){
    const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }

  //Checking if search box is not empty and filtered restaurant has data or not 
  if((filteredRestaurants?.length === 0) && (searchInput.length!=0)) return <h3>No restaurant match your search...</h3>;

    return ( ( allRestaurants.length === 0) ? <Shimmer />: 
      <>
      <div className="search">
        <input type="text" 
          className="search-input" 
          placeholder="search" 
          value={searchInput}
          onChange ={(e)=> {
            setSearchInput(e.target.value);
          }}
        />

        <button 
        onClick = {() =>{ 
          // if( constant === "true"){
          //   setConstantValue("false"); 
          // }
          // else{
          //   setConstantValue("true"); 
          // }
          //need to filter the data
          const data = filterData( searchInput, allRestaurants ); // what to search and from where to search
          console.log(data);
          setFilteredRestaurant(data);  //update the restaurant variable
        
        }}>search 
        </button>
      </div>

      <div className="restaurant-list">
          { filteredRestaurants.map((restaurant)=>{
              return <RestaurantCard {...restaurant.data} key = {restaurant.data.id}/>
          }) }
      </div>
      </>
    );
  };

  export default Body;