
import { useContext } from "react"
import styled from "styled-components"
import { FoodContext } from "../../Contexts/FoodContext"
import PagesItemCard from "../Layout/Cards/PagesItemCard"
import LightTheme from "../Themes/LightTheme"
import LateralFoodNav from '../Layout/InsideComponents/LateralNavs/LateralFoodNavigation'


const FoodContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${LightTheme.color.bodyBackground};
`
const PageHeader = styled.div`
 width: 100%;
 height: 20vh;
 background-color: ${LightTheme.color.background};
 color: ${LightTheme.color.primary.contrastText};
 font-size: 3.5em;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 padding: 100px;
 font-family: 'McLaren', cursive;
 text-shadow: -2px 2px 2px ${LightTheme.color.primary.main};
 p{
   font-size: 1.3rem;
   text-shadow: none;
 }
`
const ItemsContainer = styled.div`
 width: 100%;
 background-color: ${LightTheme.color.bodyBackground} ;
 display: flex;
 justify-content: center;
padding: 50px;
`

function Food() {

    const { food } = useContext(FoodContext)

    return (
        <FoodContainer>
            <PageHeader>
                Comidas
                <p>Venha experimentar nossos deliciosos pratos!</p>
            </PageHeader>
            <ItemsContainer>
              <LateralFoodNav/>
            </ItemsContainer>
            
        </FoodContainer>
    )
}
export default Food