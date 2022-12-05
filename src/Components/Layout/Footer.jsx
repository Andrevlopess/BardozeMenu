import { useContext } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { FoodContext } from "../../Contexts/FoodContext"
import LightTheme from '../Themes/LightTheme'

const FooterContainer = styled.footer`
width: 100%;
height: fit-content;
background-color: ${LightTheme.color.footerBackground};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-top: 8px solid ${LightTheme.color.primary.main};
` 

const FooterList = styled.ul`
 list-style: none;
 color: ${LightTheme.color.primary.contrastText};
 font-size: 20px;
 margin-left: 20px;

a{
  color: ${LightTheme.color.primary.linkColor};
  font-size: 15px;
  
}
a:hover{
    color: white;
  }
`
const FooterListContainer = styled.div`
display: flex;
align-items: baseline;
justify-content: center;
width: 100%;
margin-top: 30px;
`


function Footer(){

    const {
        foodCategory,
        dessertsCategory,
        drinksCategory,
        setDefaultLateralCategory,
        defaultLateralCategory
    } = useContext(FoodContext);

    return(
        <div>
            <FooterContainer>
            <FooterListContainer>

               <FooterList>
                Comidas
                {
                    foodCategory.map((cat)=>{
                        return(
                            <li  key={cat.id} onClick={() =>{setDefaultLateralCategory(cat.title)}}>
                               <Link to={`/food`} >{cat.title}</Link>
                            </li>
                        )
                    })
                }
                
               </FooterList>
               <FooterList>
                Bebidas
                {
                    drinksCategory.map((cat)=>{
                        return(
                            <li  key={cat.id} onClick={() =>{setDefaultLateralCategory(cat.title)}}>
                               <Link to={`/drinks`}>{cat.title}</Link>
                            </li>
                        )
                    })
                }
               </FooterList>
               <FooterList>
                Sobremesas
                {
                    dessertsCategory.map((cat)=>{
                        return(
                            <li key={cat.id} onClick={() =>{setDefaultLateralCategory(cat.title)}}>
                               <Link to={`/desserts`}>{cat.title}</Link>
                            </li>
                        )
                    })
                }
               </FooterList>
                </FooterListContainer>
              <code style={{marginBottom: '20px', fontSize: '1rem'}}>andrevlopes</code>
            </FooterContainer>   
                
        </div>

    )
}
export default Footer