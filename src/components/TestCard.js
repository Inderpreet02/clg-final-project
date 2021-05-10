import { useDispatch } from "react-redux"
import { ADD_TO_CART } from "../features/userSlice";
import Btn from "./Btn"
import "./TestCard.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TestCard = ( {src, title, price} ) => {

    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(ADD_TO_CART({
            id: 1,
            title: title,
            src: src,
            price: price,
        }))

        toast.dark("An Item has been added!!", {
            position: "bottom-right",
            autoClose: 1200,
        });
    }


    return (
        <div className="testCard">
            <img src={src} alt=""/>
            <div className="card__text">
                <h5>{title}</h5>
                <p>${price}</p>
                <Btn text={"Buy Now"} color={!true} onClick={addToCart}/>
                <ToastContainer />
            </div>
        </div>
    );
}
 
export default TestCard;