import { LOGO_URL } from "../utils/constant";


const Header = () =>{
    return(
        <div className="heading">
            <div>
                <img className="logo" src={LOGO_URL} />
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

export default Header;