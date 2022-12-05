import styled from "styled-components"
import LateralDessertNav from "../Layout/InsideComponents/LateralNavs/LateralDessertNav"
import LateralDrinksNav from "../Layout/InsideComponents/LateralNavs/LateralDrinksNav"
import LightTheme from "../Themes/LightTheme"

const DrinksContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: ${LightTheme.color.bodyBackground};
`
const ItemsContainer = styled.div`
    
width: 100%;
background-color: ${LightTheme.color.bodyBackground} ;
display: flex;
justify-content: center;
padding: 50px;
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
 text-shadow: -2px 2px 2px ${LightTheme.color.primary.main};
 font-family: 'McLaren', cursive;
 p{
    text-shadow: none;
   font-size: 1.3rem;
 }
`

function Desserts() {
    return (
        <DrinksContainer>
            <PageHeader>
                {'Sobremesas'}
                <p>{'As sobremesas mais gostosas!'}</p>
            </PageHeader>
            <ItemsContainer>
                <LateralDessertNav/>
            </ItemsContainer>

        </DrinksContainer>
    )
}
export default Desserts