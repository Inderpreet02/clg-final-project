import "./Header.css";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LOGOUT, selectBasket, selectUser } from "../features/userSlice";
import logo from "./logo2.png"

const Header=()=>{

    const basket = useSelector(selectBasket);
    const items = basket.length;
    const dispatch = useDispatch();
    const ToLogout = () => {
        dispatch(LOGOUT());
    }

    const user = useSelector(selectUser);

    return(
        <div className="header">
            <div className="header__container">
                <div className="header__left">
                    <h3>MEN</h3>
                    <h3>WOMEN</h3>
                </div>
                
               <Link to="/">
                   <div className="header__mid">
                       <img src={logo} alt=""/>
                   </div>
               </Link>

               <div className="header__right">
                   <span className="logout__span" onClick={ToLogout}>LOGOUT
                        <PermIdentityIcon className="logout__styles"/>
                   </span>
                   <HelpOutlineIcon/>
                   <Link to="/checkout" className="link">
                       <ShoppingCartIcon/>
                       <span>{items}</span>
                   </Link>
               </div>
            </div>
        </div>
    )
}

export default Header;