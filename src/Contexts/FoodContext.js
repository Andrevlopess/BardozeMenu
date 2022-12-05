import { createContext, useEffect, useState } from "react";

 

export const FoodContext = createContext();

function FoodProvider({children}){

    const [food, setFood] = useState([])
    const [drinks, setDrinks] = useState([])
    const [desserts, setDesserts] = useState([])
    const [foodCategory, setFoodCategory] = useState([])
    const [drinksCategory, setDrinksCategory] = useState([])
    const [dessertsCategory, setDessertsCategory] = useState([])
    const [featuredFoodsMain, setFeaturedFoodsMain] = useState([])
    const [defaultLateralCategory, setDefaultLateralCategory] = useState(["Hamburguer", "Juices", "IceCream"])
    console.log(defaultLateralCategory);

    useEffect(()=>{

        fetch('http://localhost:5000/food?_limit=4', {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(json => setFeaturedFoodsMain(json))
        .catch(err => console.log(err));
        console.log(featuredFoodsMain);

        fetch('http://localhost:5000/food', {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(json => setFood(json))
        .catch(err => console.log(err));

        fetch('http://localhost:5000/drinks', {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(json => setDrinks(json))
        .catch(err => console.log(err));

        fetch('http://localhost:5000/desserts', {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(json => setDesserts(json))
        .catch(err => console.log(err));

        fetch('http://localhost:5000/dessertsCategories', {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(json => setDessertsCategory(json))
        .catch(err => console.log(err));

        fetch('http://localhost:5000/foodCategories', {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(json => setFoodCategory(json))
        .catch(err => console.log(err));

        fetch('http://localhost:5000/drinkCategories', {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(json => setDrinksCategory(json))
        .catch(err => console.log(err));
    }, [])

    const defineDefaultCategory = typeCat => {
        setDefaultLateralCategory(typeCat)
    }
    
    
    const cartSections = [
        {
            id: 1,
            title: 'Cart'
        },
        {
            id: 2,
            title: 'OrderedItems'
        }
    ]
    console.log(defaultLateralCategory);

    return(
        <FoodContext.Provider value={{
         food,
         drinks,
         desserts,
         foodCategory,
         dessertsCategory,
         featuredFoodsMain,
         setDefaultLateralCategory,
         defaultLateralCategory,
         drinksCategory,
         cartSections 
         }}>
            {children}
        </FoodContext.Provider>
    )
}
export default FoodProvider