import { createContext, useEffect, useState } from "react";
export const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState([])
    const [orderedItems, setOrderedItems] = useState([])
    const [currentItem, setCurrentItem] = useState()
    const [infos, setInfos] = useState([])

    const addOrderedItems = food => {
        fetch('http://localhost:5000/OrderedItems', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: food
                
        })

        setCurrentItem(food)

    }

    const addCartItems = food => {
        fetch('http://localhost:5000/cartItems', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:
                JSON.stringify(food)
        })

        setCurrentItem(food)
    }

    const cancelOrderedItem = food => {
        console.log(food.id);
        fetch(`http://localhost:5000/orderedItems/${food.id}`, {
            method: 'DELETE',
        })
            .catch(err => console.log(err));
    
            setCurrentItem(food)
    }

    const removeCartItem = food => {
        console.log(food.id);
        fetch(`http://localhost:5000/cartItems/${food.id}`, {
            method: 'DELETE',
        })
            .catch(err => console.log(err));
    
            setCurrentItem(food)
    }

    const deliveredFood = food => {
        fetch(`http://localhost:5000/Ordereditems/${food.id}`, {
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(food)
        })
            .catch(err => console.log(err));
    
            setCurrentItem(food)
    }



    useEffect(() => {
        fetch('http://localhost:5000/cartItems', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(json => setCartItems(json))
            .catch(err => console.log(err));

        fetch('http://localhost:5000/orderedItems', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(json => setOrderedItems(json))
            .catch(err => console.log(err));

    }, [currentItem])


    return (
        <CartContext.Provider value={{
            addOrderedItems,
            addCartItems,
            cancelOrderedItem,
            removeCartItem,
            deliveredFood,
            cartItems,
            orderedItems,
            setInfos
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider