import Btn from "./Btn";
import "./Main.css";

const Main=()=>{
    return(
        <div className="main">
            <div className="main__img">
                <img src="https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/heroSlide/en-US/images/5yOWgMPt2Dwlu872fG26Am/2" alt=""/>
                <div className="main__content">
                    <h1>Light On Your Feet. Light On Your Planet</h1>
                    <div className="mainbtn__1">
                         <Btn id="btn1" color={false} text={"SHOP MEN"}/>
                         <Btn id="btn2" color={false} text={"SHOP WOMEN"}/>
                    </div>
                   
                    
                   
                    
                </div>
            </div>
        </div>

    )
}

export default Main;