import ResutarantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";






const Body = function(){

    const [resListed, setResListed] = useState(resList);

    return (
        <div className="body">
            <div className="filter"  >
                <button className="filter_btn"
                 onClick={() => {
                    let filterList = resListed.filter((res)=> res.resRating > 4)
                    console.log(filterList)
                    setResListed(filterList);
                 }}
                 >
                    Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                    // no using key (not acceptable) <<<< index as key <<<<<<<< unique key (bext practice)
                    resListed.map( (e,idx) => <ResutarantCard key={idx} resData={e}/>)
                }
            </div>
        </div>
    )
}

export default Body;