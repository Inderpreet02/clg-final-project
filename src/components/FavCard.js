import Btn from "./Btn";
import "./FavCard.css"

const FavCard = ( {heading, description, src, Icon, className, func } ) => {
    // const addShow = () =>{
    //     document.querySelector(".favorites__btn1").classList.add("show");
    //     document.querySelector(".favorites__btn1").classList.remove("hide");
    //     document.querySelector(".favorites__btn2").classList.add("show");
    //     document.querySelector(".favorites__btn2").classList.remove("hide");
    // }

    // const addHide = () => {
    //     document.querySelector(".favorites__btn1").classList.remove("show");
    //     document.querySelector(".favorites__btn1").classList.add("hide");
    //     document.querySelector(".favorites__btn2").classList.remove("show");
    //     document.querySelector(".favorites__btn2").classList.add("hide");
    // }
    return (
        <div className={`favCard ${className}`}>
            <img src={src} alt=""/>
            <h2>{heading}</h2>
            <div className="favCard__text">
                <Icon className="icon__padding"/>
                <p>{description}</p>
            </div>
            <div className="favorites__btn2 ">
                <Btn color={true} text={"SHOP MEN"}/>
            </div>
            <div className="favorites__btn1 ">
                <Btn color={true} text={"SHOP WOMEN"}/>
            </div>
        </div>
    );
}
 
export default FavCard;