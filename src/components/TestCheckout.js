import { useDispatch, useSelector } from "react-redux";
import { REMOVE_FROM_CART, selectBasket } from "../features/userSlice";
import Btn from "./Btn";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const TestCheckout = () => {

    const basket = useSelector(selectBasket);
    const dispatch = useDispatch();

    const removeFormCart = () =>{
        dispatch(REMOVE_FROM_CART({
            id: 1,
        }))

        toast("An Item has been removed!!", {
            position: "top-right",
            autoClose: 1200,
        });
    }

    return (
        <div className="checkout">
            <h1>Hello</h1>
            {basket.map((item) => (
                <div className="disp">
                    <img src={item.src} alt=""/>
                    <h1>{item.title}</h1>
                    <p>${item.price}</p>
                    <Btn text={"Remove Product"} color={false} onClick={removeFormCart}/>
                </div>
            ))}
            <ToastContainer />
        </div>
    );
}
 
export default TestCheckout;