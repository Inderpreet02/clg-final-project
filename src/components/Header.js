import "./Header.css";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectBasket } from "../features/userSlice";

const Header=()=>{

    const basket = useSelector(selectBasket);
    const items = basket.length;

    return(
        <div className="header">
            <div className="header__container">
                <div className="header__left">
                    <h3>MEN</h3>
                    <h3>WOMEN</h3>
                </div>
                
               <Link to="/">
                   <div className="header__mid">
                       <img src="https://cdn.allbirds.com/image/upload/v1571355713/icons/allbirds-logo.svg" alt=""/>
                   </div>
               </Link>

               <div className="header__right">
                   <PermIdentityIcon/>
                   <HelpOutlineIcon/>
                   <Link to="/checkout"className="link">
                       <ShoppingCartIcon/>
                       <span>{items}</span>
                   </Link>
               </div>
            </div>
        </div>
    )
}

export default Header;