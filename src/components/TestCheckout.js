import { useDispatch, useSelector } from "react-redux";
import { REMOVE_FROM_CART, selectBasket } from "../features/userSlice";
import Btn from "./Btn";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TestCard from "../components/TestCard"


const TestCheckout = () => {

    const basket = useSelector(selectBasket);
    const dispatch = useDispatch();

   

    return (
        <div className="checkout">
            <h1>Hello</h1>
            {basket.map((item) => (
                <div className="disp" >
                   <TestCard text={"REMOVE"} title={item.title} price={item.price} src={item.src} id={item.id} remove={true} add={"Remove"} />
                </div>
            ))}
            <ToastContainer />
        </div>
    );
}
 
export default TestCheckout;