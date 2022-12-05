import { createContext, useEffect, useState } from "react";

export const CategoriesContext = createContext();

function CategoriesProvider({children}){

    const [hamburguers, setHamburguers] = useState([])
    const [carnes, setCarnes] = useState([])
    const [massas, setMassas] = useState([])
    const [frangos, setFrangos] = useState([])

    const [chopps, setChopps] = useState([])
    const [juices, setJuices] = useState([])
    const [wines, setWines] = useState([])

    const [iceCreams, setIceCreams] = useState([])
    const [milkShakes, setMilkShakes] = useState([])

    useEffect(() =>{
        //GET ALL CHOPPS

        fetch('http://localhost:5000/drinks?drinkCategories=Chopp', {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(json => setChopps(json))
        .catch(err => console.log(err));
     

        // GET ALL JUICES

        fetch('http://localhost:5000/drinks?drinkCategories=Juices', {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(json => setJuices(json))
        .catch(err => console.log(err));
   

        // GET ALL WINES

        fetch('http://localhost:5000/drinks?drinkCategories=WinesSparklingWines', {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(json => setWines(json))
        .catch(err => console.log(err));
 

        // GET ALL ICECREAMS
        fetch('http://localhost:5000/desserts?dessertCategories=IceCream', {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(json => setIceCreams(json))
        .catch(err => console.log(err));
    


        // GET ALL MILKSHAKES
        fetch('http://localhost:5000/desserts?dessertCategories=MilkShake', {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(json => setMilkShakes(json))
        .catch(err => console.log(err));


        //GET ALL HAMBURGUERS

        fetch('http://localhost:5000/food?foodCategories=Hamburguer', {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(json => setHamburguers(json))
        .catch(err => console.log(err));

        // GET ALL MASSAS

        fetch('http://localhost:5000/food?foodCategories=Massas', {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(json => setMassas(json))
        .catch(err => console.log(err));


        //GET ALL CARNES
        fetch('http://localhost:5000/food?foodCategories=Steaks', {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(json => setCarnes(json))
        .catch(err => console.log(err));

        // GET ALL CHICKENS

        fetch('http://localhost:5000/food?foodCategories=Chicken', {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(json => setFrangos(json))
        .catch(err => console.log(err));
    },[])


    return(
        <CategoriesContext.Provider value={{
            hamburguers, massas, carnes, frangos, 
            juices, wines, chopps,
            iceCreams, milkShakes
        }}
          
        >
            {children}
        </CategoriesContext.Provider>
    )
}
export default CategoriesProvider

