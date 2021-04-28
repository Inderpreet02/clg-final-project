import "./Header.css";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const Header=()=>{
    return(
        <div className="header">
            <div className="header__container">
                <div className="header__left">
                    <h3>MEN</h3>
                    <h3>WOMEN</h3>
                </div>
                
               <div className="header__mid">
               <img src="https://cdn.allbirds.com/image/upload/v1571355713/icons/allbirds-logo.svg" alt=""/>
               </div>

               <div className="header__right">
                   <PermIdentityIcon/>
                   <HelpOutlineIcon/>
                   <ShoppingCartIcon/>
               </div>
            </div>
        </div>
    )
}

export default Header;