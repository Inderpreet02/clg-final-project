import { useSelector } from "react-redux";
import { selectBasket } from "../features/userSlice";
import 'react-toastify/dist/ReactToastify.css';
import TestCard from "./TestCard";


const TestCheckout = () => {

    const basket = useSelector(selectBasket);

    return (
        <div className="checkout">
            <h1>Hello</h1>
            {basket.map((item) => (
                <div className="disp">
                    <TestCard text={"REMOVE"} title={item.title} price={item.price} src={item.src} id={item.id} remove={true} />
                </div>
            ))}
        </div>
    );
}
 
export default TestCheckout;