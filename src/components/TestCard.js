import { useDispatch } from "react-redux"
import { ADD_TO_CART, REMOVE_FROM_CART } from "../features/userSlice";
import Btn from "./Btn"
import "./TestCard.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TestCard = ( {src, title, price, id, remove, text} ) => {

    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(ADD_TO_CART({
            id: id,
            title: title,
            src: src,
            price: price,
        }))

        toast.dark("An Item has been added!!", {
            position: "bottom-right",
            autoClose: 1200,
        });
    }

    const removeFormCart = () =>{
        dispatch(REMOVE_FROM_CART({
            id: id,
        }))

        toast.dark("An Item has been removed!!", {
            position: "bottom-right",
            autoClose: 1200,
        });
    }


    return (
        <div className={remove ? "testCard horizontal" : "testCard"}>
            <img src={src} alt=""/>
            <div className="card__text">
                <div className="card__price">
                    <h3>{title}</h3>
                    <strong>${price}</strong>
                </div>
                <Btn text={text} color={!true} onClick={ remove ? removeFormCart : addToCart}/>
                <ToastContainer />
            </div>
        </div>
    );
}
 
export default TestCard;