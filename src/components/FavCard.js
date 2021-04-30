import Btn from "./Btn";
import "./FavCard.css"

const FavCard = ( {heading, description, src, Icon, className, func } ) => {
    const addShow = () =>{
        document.querySelector(`${className}`)?.classList.add("show");
        // document.querySelector(`${className}`).classList.remove("hide"); 
    }

    const addHide = () => {
        document.querySelector(`${className}`)?.classList.remove("show");
        // document.querySelector(".favorites__btn1").classList.add("hide");
        
    }
    return (
        <div className={`favCard`} onMouseEnter={addShow} onMouseLeave={addHide}>
            <img src={src} alt=""/>
            <h2>{heading}</h2>
            <div className="favCard__text">
                <Icon className="icon__padding"/>
                <p>{description}</p>
            </div>
            <div className={`favorites__btn2 ${className}`} >
                <Btn color={true} text={"SHOP MEN"}/>
            </div>
            <div className={`favorites__btn1 ${className}`}>
                <Btn color={true} text={"SHOP WOMEN"}/>
            </div>
        </div>
    );
}
 
export default FavCard;