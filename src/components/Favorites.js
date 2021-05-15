import FavCard from "./FavCard";
import "./Favorites.css"
import WavesIcon from '@material-ui/icons/Waves';
// import CloudIcon from '@material-ui/icons/Cloud';
import EmojiNatureIcon from '@material-ui/icons/EmojiNature';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { LOGIN, selectUser } from "../features/userSlice";


const Favorites = () => {

    const shoes = [
        {
            id: 1,
            className : "test__1",
            btn__class : "c_btn1",
            heading : "Tree Dasher",
            description : "Dail Running Shoe",
            Icon : WavesIcon,
            src : "https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/categoryCarouselCard/en-US/images/6zakQ3mbPCXQU23h5vsEe3/2",
        },{
            id: 2,
            className : "test__2",
            btn__class : "c_btn2",
            heading : "Tree Runner",
            description : "Light and Breezy Sneaker",
            Icon : WavesIcon,
            src : "https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/categoryCarouselCard/en-US/images/5OndhAGrtVvJanLRyuqHcm/2",
        },{
            id: 3,
            className : "test__3",
            btn__class : "c_btn3",
            heading : "Wool Runner",
            Icon : WavesIcon,
            description : "Cozy Sneaker",
            src : "https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/categoryCarouselCard/en-US/images/3SIs1eQwd7uJHonZHJX4gA/2",
        }
    ]

    const apparel = [
        {
            id: 1,
            className : "test__1",
            btn__class : "c_btn1",
            heading : "Long Sleeve Tee",
            Icon : EmojiNatureIcon,
            description : "Soft And Fresh Basics",
            src : "https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/categoryCarouselCard/en-US/images/4uT05s4ZabFfWAErMTBKYo/1",
        },{
            id: 2,
            className : "test__2",
            heading : "Tee",
            btn__class : "c_btn2",
            Icon : EmojiNatureIcon,
            description : "Naturally Soft Tee",
            src : "https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/categoryCarouselCard/en-US/images/798cAV2hqBT0QBO9LdtH16/1",
        },{
            id: 3,
            className : "test__3",
            btn__class : "c_btn3",
            Icon : AcUnitIcon,
            heading : "Wool Hoodie",
            description : "Cozy Double Knit Hoodie",
            src : "https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/categoryCarouselCard/en-US/images/2UykjbxmUa680bTQnow36J/2",
        }
    ]

    const basics = [
        {
            id: 1,
            className : "test__1",
            btn__class : "c_btn1",
            heading : "Socks",
            Icon : AcUnitIcon,
            description : "Breezy Ankle Sock",
            src : "https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/categoryCarouselCard/en-US/images/54RKtCME01Cnj0WrpaNCgH/2",
        },{
            id: 2,
            className : "test__2",
            btn__class : "c_btn2",
            heading : "Socks",
            Icon : AcUnitIcon,
            description : "Breezy Ankle Sock",
            src : "https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/categoryCarouselCard/en-US/images/54RKtCME01Cnj0WrpaNCgH/2",
        },{
            id: 3,
            className : "test__3",
            btn__class : "c_btn3",
            heading : "Socks",
            Icon : AcUnitIcon,
            description : "Breezy Ankle Sock",
            src : "https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/categoryCarouselCard/en-US/images/54RKtCME01Cnj0WrpaNCgH/2",
        }
    ]

    const [currData, setCurrData] = useState(shoes);
    // console.log(shoes)

    // document.querySelector('.menu-btn').addEventListener('click', () => document.querySelector('.main-menu').classList.toggle('show'));

    const change1 = () => {
        const selectCurrGenra1 = () =>{
            document.querySelector(".op1").classList.add("bold");
            document.querySelector(".op2").classList.remove("bold");
            document.querySelector(".op3").classList.remove("bold"); 
        }

        setCurrData(shoes);
        selectCurrGenra1();
    }

    const change2 = () => {
        const selectCurrGenra2 = () =>{
            document.querySelector(".op1").classList.remove("bold");
            document.querySelector(".op1").classList.remove("bold");
            document.querySelector(".op2").classList.add("bold");
            document.querySelector(".op3").classList.remove("bold"); 
        }

        setCurrData(apparel);
        selectCurrGenra2();
    }

    const change3 = () => {
        const selectCurrGenra3 = () =>{
            document.querySelector(".op1").classList.remove("bold");
            document.querySelector(".op1").classList.remove("bold");
            document.querySelector(".op2").classList.remove("bold");
            document.querySelector(".op3").classList.add("bold");
        }

        setCurrData(basics);
        selectCurrGenra3();
    }

    return (
        <div className="favorites">
            <div className="favorites__container">
                <h1>Our Favorites</h1>
                <div className="favorite__containerOptions">
                    <h3 className="op1 bold" onClick={change1}>SHOES</h3>
                    <h3 className="op2" onClick={change2}>APPAREL</h3>
                    <h3 className="op3" onClick={change3}>BASICS</h3>
                </div>
                <div className="favorites__main">
                    {currData.map((item) =>(
                        <FavCard key={item.id} btn__class={item.btn__class} func={false} className={item.className} heading={item.heading} description={item.description} src={item.src} Icon={item.Icon}/>
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default Favorites;