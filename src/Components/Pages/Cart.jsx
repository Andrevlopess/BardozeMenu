import { useContext } from "react"
import { CartContext } from "../../Contexts/CartContext"
import styled from "styled-components"
import LightTheme from "../Themes/LightTheme"
import CartItemCard from "../Layout/Cards/CartItemCard"
import DotsAnimation from "../Layout/Animation/DotsAnimation"

const CartContainer = styled.div`
 width: 100%;
 background-color: ${LightTheme.color.bodyBackground};
 display: flex;
 flex-wrap: wrap;
`
const EmptyOrder = styled.div`
 width: 100%;
 height: 60vh;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 color: ${LightTheme.color.primary.contrastText};
 font-size: 2.3em;
`
const PageHeader = styled.div`
 width: 100%;
 height: 20vh;
 background-color: ${LightTheme.color.background};
 color: ${LightTheme.color.primary.contrastText};
 font-size: 3.5em;
 display: flex;
 justify-content: center;
 align-items: center;
 font-family: 'McLaren', cursive;
`

function Cart(){

    const {cartItems} = useContext(CartContext)

    return(
        <CartContainer>
            <PageHeader>
                Carrinho
            </PageHeader>
            {cartItems.length > 0 ?
                cartItems.map((item) =>{
                    return(
                       <CartItemCard item={item} key={item.id}/> 
                    )    
                })
                :
                <EmptyOrder>Seu carrinho está vazio<DotsAnimation/></EmptyOrder>
            }
        </CartContainer>

    )
}
export default Cart