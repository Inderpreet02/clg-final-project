import Btn from "./Btn";
import "./FavCard.css"

const FavCard = ( {heading, description, src, Icon, className, func, btn__class } ) => {
    const addShow = () =>{
        setTimeout(() => {
            document.querySelectorAll(`.${className}`).forEach((div) => {
                div.classList.add("show");
            })
            // document.querySelector(`.${btn__class}`).classList.add("grey")
        }, 100)
    }


    const addHide = () => {
        setTimeout(() => {
            document.querySelectorAll(`.${className}`).forEach((div) => {
                div.classList.remove("show");
            })
            // document.querySelector(`.${btn__class}`).classList.remove("grey")
        }, 100)
    }


    return (
        <div className={`favCard`} onMouseEnter={addShow} onMouseLeave={addHide}>
            <img className={`${btn__class}`} src={src} alt=""/>
            <h2>{heading}</h2>
            <div className="favCard__text">
                <Icon className="icon__padding"/>
                <p>{description}</p>
            </div>
            <div className={`favorites__btn1 ${className}`} >
                <Btn color={true} text={"SHOP MEN"}/>
            </div>
            <div className={`favorites__btn2 ${className}`}>
                <Btn color={true} text={"SHOP WOMEN"}/>
            </div>
        </div>
    );
}
 
export default FavCard;