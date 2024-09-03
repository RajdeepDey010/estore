import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import FillCart from "./FillCart";

const Cart = () => {
    const cart = useSelector(state => state.cartReducer)
    
    return (
        <div>
            {
                cart.cartItems.length===0? 
                <EmptyCart/>
                :
                <FillCart/>
            }
        </div>
    )
}

export default Cart;