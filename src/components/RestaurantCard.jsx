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

export default ResutarantCard;