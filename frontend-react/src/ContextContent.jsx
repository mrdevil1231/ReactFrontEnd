import {createContext, useState} from "react";

const CartContext = createContext();

function CardProvide({children}){

    const [cartItems,setCartItems] = useState([])

    function addToCart(items){



        setCartItems((prevState)=>{
            const safePrev = Array.isArray(prevState) ? prevState : [];

            const existing = safePrev.find((value)=>{return value.id === items.id})

            if(existing)
            {
                return ( safePrev.map(item => item.id === items.id? {...item,qty:item.qty+1}:item ))
            }

            else{
                return [...safePrev,items];
            }


        })
    }
    function removefromCart(idx){

        setCartItems((prevState) =>{
            const safePrev = Array.isArray(prevState) ? prevState : [];
            return (safePrev.filter((value,index)=>{
                return value.id !== idx;
            }))
        })

    }

    return (
            <CartContext.Provider value={{cartItems, addToCart,removefromCart }}>
                {children}
            </CartContext.Provider>
    );

}

export  {CardProvide,CartContext};