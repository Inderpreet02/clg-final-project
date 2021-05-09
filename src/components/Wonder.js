import Btn from "./Btn";
import "./Wonder.css";

const Wonder=()=>{
    return(
        <div className="wonder">
            <div className="wonder__img">
                <img src="https://cdn.allbirds.com/image/upload/f_auto,q_auto/v1/production/pageSectionSecondaryPromoHero/en-US/images/1cRHg63d4UHUueFrqYwImu/1" alt=""/>
                <div className="wonder__content">
                    <h1>Supernatural Wonders</h1>
                    <p>
                        How did we create a super soft tee shirt that also
                        happens to reduce odor and keep you cool? With
                        nature,naturally.
                    </p>
                    <div className="wonder__btnContainer">
                        <Btn text={"SHOP MEN"} color={!true}/>
                        <Btn text={"SHOP WOMEN"} color={!true}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Wonder;