import Btn from "./Btn";
import "./FavCard.css"

const FavCard = ( {heading, description, src, Icon, } ) => {
    return (
        <div className="favCard">
            <img src={src} alt=""/>
            <h2>{heading}</h2>
            <div className="favCard__text">
                <Icon className="icon__padding"/>
                <p>{description}</p>
            </div>
            <div className="favorites__btn1">
                <Btn color={false} text={"SHOP MEN"}/>
            </div>
            <div className="favorites__btn2">
                <Btn color={false} text={"SHOP WOMEN"}/>
            </div>
        </div>
    );
}
 
export default FavCard;