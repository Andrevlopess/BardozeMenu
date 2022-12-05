import { Link } from 'react-router-dom'
import styled from 'styled-components'
import LightTheme from '../Themes/LightTheme'
import { BsInstagram, BsFacebook, BsTwitter } from 'react-icons/bs'
import { RxDividerVertical } from 'react-icons/rx'
import { useContext, useState } from 'react'
import OverView from './InsideComponents/HeaderOverview'
import { FoodContext } from '../../Contexts/FoodContext'

const HeaderContainer = styled.div`
width: 100%;
height: 130px;
display: flex;
align-items: center;
background-color: ${LightTheme.color.background};
justify-content: space-around;
border-bottom: 10px solid ${LightTheme.color.primary.main};
position: sticky;

`
const Logo = styled.h1`
   font-size: 2.6em;
   text-shadow: -3px 2px 0 ${LightTheme.color.primary.main},-10px 7px 10px ${LightTheme.color.footerBackground};
   width: 20%;
   font-family: 'McLaren', cursive;
   color: ${LightTheme.color.primary.contrastText};
   a{
        text-decoration: none;
        color: inherit;
        font-family: inherit;
    }
`

const HeaderMenu = styled.ul`
    display: flex;
    align-items: center;
    width: 45%;
    height: 100%;
    list-style: none;
    justify-content: space-evenly; 
    color: ${LightTheme.color.primary.contrastText};
    li {
        color: inherit;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    li:hover{
        color: ${LightTheme.color.primary.main};
    }
    a{
        text-decoration: none;
        color: inherit;
    }
`
function Header() {


    const [previewCart, setPreviewCart] = useState(false)

    const {
        foodCategory,
        dessertsCategory,
        drinksCategory,
        cartSections
    } = useContext(FoodContext);

    return (
        <HeaderContainer>
            <Logo>
                <Link to="/">Bar do zé</Link>
            </Logo>

            <HeaderMenu>
                <li>
                    <Link to="/food">Comidas</Link>
                </li>
                <li>
                    <Link to="/drinks">Bebidas</Link>
                </li>
                <li>
                    <Link to="/desserts">Sobremesas</Link>
                </li>

                <RxDividerVertical size={25} />
                
                    <li
                     onMouseOver={() => { setPreviewCart(true) }}
                     onMouseOut={() => { setPreviewCart(false) }}>
                        {
                            previewCart &&
                              <OverView category={cartSections} />
                        }
                        
                        <Link to={'/Cart'}>Meus pedidos</Link>
                    </li>
               

                <RxDividerVertical size={25} />

                <BsInstagram size={22} style={{ marginRight: '10px' }} />
                <BsFacebook size={22} style={{ marginRight: '10px' }} />
                <BsTwitter size={24} />

            </HeaderMenu>
        </HeaderContainer>
    )
}
export default Header