import { useContext } from "react"
import { CartContext } from "../../Contexts/CartContext"
import styled from "styled-components"
import LightTheme from "../Themes/LightTheme"
import OrderedItemCard from "../Layout/Cards/OrderedItemsCard"
import DotsAnimation from "../Layout/Animation/DotsAnimation"

const OrderedContainer = styled.div`
 width: 100%;
 background-color: ${LightTheme.color.bodyBackground};
 display: flex;
 flex-wrap: wrap;
 align-items: baseline;
 justify-content: flex-start;
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

function OrderedItems() {

  const { orderedItems } = useContext(CartContext)

  return (
    <OrderedContainer>
      <PageHeader>
        Pedidos em preparo
      </PageHeader>
      {
        orderedItems.length > 0 ?
        orderedItems.map((item) => {
          return (
            <OrderedItemCard key={item.id} item={item} />
          )
        })
        :
        <EmptyOrder>Ainda não há pedidos para preparar<DotsAnimation/></EmptyOrder>
        
      }
    </OrderedContainer>

  )
}
export default OrderedItems

