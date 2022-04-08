import { createContext, useState } from "react";
const CartContext = createContext();

function CartState (props) {
    const [quantity, setQuantity] = useState(7);

    const updateQuantity = (value) => [
        setQuantity(value)
    ]

    return (
        <CartContext.Provider value={{quantity, updateQuantity}}>
            {props.children}
        </CartContext.Provider>
    )
};

export {CartState, CartContext} ;