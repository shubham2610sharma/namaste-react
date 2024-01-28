import React from "react";
import ReactDom from "react-dom/client";
import "./index.css";

/**
 * Header
 * - Logo    
 * - navlist
 * 
 * Body
 * - Seacrh
 * - RestaurantsContainer
 *   -ReastaurantCard
 *      -img
 *      -rating, cuisine, delery tie
 * 
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact 
 */

const Header = () =>{
    return(
        <div className="heading">
            <div>
                <img className="logo" src="https://www.designmantic.com/logo-images/166328.png?company=Company%20Name&slogan=&verify=1" />
            </div>
            <div className="navList">
                <ul>
                    <li>Home</li>
                    <li>About us </li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

// const styleCard = {
//     backgroundColor:"#f0f0f0"
// }

const resList = [
    {
        "resName":"Hr 26 Zika",
        "resLogo":"https://thumbs.dreamstime.com/b/heart-shape-various-vegetables-fruits-healthy-food-concept-isolated-white-background-140287808.jpg",
        "resRating":4.1,
        "resTime": 36,
        "resCuisine":["Burger","Pizza", "French Fries"]
    }
]

const ResutarantCard = (props) =>{
    // const {resdata} = props
    // console.log(props);
    const { resLogo, resName, resCuisine, resRating, resTime } = props?.resData;
    
    return(
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img src={resLogo} className="res-logo"/>
            <h3>{resName} </h3>
            <h4>{resCuisine.join(", ")}</h4>
            <h5>{resRating} star</h5>
            <h5>{resTime} minute</h5>
        </div>
        
    )
}

const Body = function(){
    // let arr = []
    // resList.forEach(element => {
    //     arr.push(<ResutarantCard props={element}/>)
    //   })
    return (
        <div className="body">
            <div className="search" >
                search
            </div>
            <div className="res-container">
                {

                    // no using key (not acceptable) <<<< index as key <<<<<<<< unique key (bext practice)
                    resList.map( (e,idx) => <ResutarantCard key={idx} resData={e}/>)
                }
            </div>
        </div>
    )
}

const AppLayout = () =>{
    return(
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}



const root = ReactDom.createRoot(document.getElementById("root"))

root.render(<AppLayout />);
