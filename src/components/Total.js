import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { EMPTY_BASKET, selectBasket, selectUser } from "../features/userSlice";
import "./Total.css"

const Total = () => {
    const totalitems = useSelector(selectBasket);
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const [amount, setAmount] = useState(0);

    useEffect(() =>{
        var temp = 0;
        totalitems.forEach(item => {
            temp += item.price;
        });
        setAmount(temp);
        // console.log(temp);
    },[totalitems])

    const placeOrder = (e) => {
        e.preventDefault();

        alert("YAY!!!!! YOUR ORDER HAS BEEN PlACED")

        dispatch(EMPTY_BASKET());

        alert("THANK YOU FOR SHOPPING!!!")
    }
    return (
        <div className="total">
            <div className="total__text">
                <h2>Your Total</h2>
                <h3>Total Items In The Basket: {totalitems.length}</h3>
                <p>Total Price: ${amount}</p>
            </div>
            <button className="total__btn" onClick={placeOrder}>
                Place Order
            </button>
        </div>
    );
}
 
export default Total;