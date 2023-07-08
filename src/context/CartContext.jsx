import { useState, createContext } from "react";

export const CartContext = createContext();

const inicialState = [];

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState(inicialState);
    const [cartCantItems, setCartCantItems] = useState(0);

    function sumarCantidadItem(){

    }

    function restarCantidadItem(){

    }

    const clearCart = () => {
        setCartItems(inicialState);
        setCartCantItems(0);
    }

    const eliminarItem = (id) => {
        if(cartItems.length === 1){
            setCartItems(inicialState);
        } else{
            let i = -1;
            let itemAux = cartItems;
            cartItems.forEach((game, index) => {
                if(game.id === id)
                    i = index;
            }); 
            if(i !== -1){
                itemAux.splice(i, 1);
            }
        }
        verificarCantidadItems();
        /* let itemAux = cartItems;
        itemAux.splice(index, 1);
        setCartItems(itemAux); */
    }

    const verificarCantidadItems = () => {
        if(cartItems.length !== 0){
            let cant = 0;
            cartItems.forEach((game) => {
                cant += game.cant;
            });
            setCartCantItems(cant);
        }
    }

    return (
        <CartContext.Provider value={{cartItems, setCartItems, verificarCantidadItems, cartCantItems, clearCart, eliminarItem}}>
            {children}
        </CartContext.Provider>
    );
};