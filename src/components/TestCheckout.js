import { useSelector } from "react-redux";
import { selectBasket } from "../features/userSlice";
import 'react-toastify/dist/ReactToastify.css';
import TestCard from "./TestCard";
import "./TestCheckout.css"
import Total from "./Total";


const TestCheckout = () => {

    const basket = useSelector(selectBasket);

    return (
        <div className="checkout">
            <div className="checkout__left">
                <h1>YOUR BASKET</h1>
                {basket.map((item) => (
                    <div className="disp">
                        <TestCard text={"REMOVE"} title={item.title} price={item.price} src={item.src} id={item.id} remove={true} />
                    </div>
                ))}
            </div>
            <div className="checkout__right">
                <Total/>
            </div>
        </div>
    );
}
 
export default TestCheckout;