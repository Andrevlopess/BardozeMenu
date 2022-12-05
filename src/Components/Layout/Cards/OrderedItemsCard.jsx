import { useContext, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import { CartContext } from '../../../Contexts/CartContext';
import LightTheme from '../../Themes/LightTheme';
import { IoIosCloseCircleOutline } from 'react-icons/io'
import toast from 'react-hot-toast';


const TimeLeftSpan = styled.span`
 background-color: #daa583;
 padding: 4px;
 border-radius: 5px;
 margin-left: 5px;
`
const FeedbackPrep = styled.h5`
  color: ${LightTheme.color.order.preparing};
  text-align: center;
  height: 100%;
  background-color: ${LightTheme.color.primary.linkColor};
  padding: 6px;
  border-radius: 5px;
  font-weight: bold;
  width: 100%;
`
const FeedBackConclude = styled.h5`
  color: ${LightTheme.color.order.conclude};
  text-align: center;
  height: 100%;
  background-color: #EDE4E0 ;
  padding: 6px;
  border-radius: 5px;
  font-weight: bold;
  width: 100%;
`
const CloseButton = styled.button`
  border: none;
  background: none;
`
const ToastStyles ={
    style: {
        border: '2px solid #ff3300',
        padding: '12px',
        color: '#111',
      },
      iconTheme: {
        primary: '#ff3300',
        secondary: '#FFFAEE',
      },
}


function OrderedItemCard({ item }) {

    const [timeLeft, setTimeLeft] = useState(item.waitingTime)
    const [itemStatus, setItemStatus] = useState(item.status)
    const { cancelOrderedItem, deliveredFood } = useContext(CartContext)

    // while (timeLeft > 0) {
    //     setInterval(() => {
    //         setTimeLeft(timeLeft - 1);
    //         console.log(timeLeft);
    //     }, 5000)
    // }


    // if (timeLeft == 0) {
    //     item.status = 'delivered'
    //     deliveredFood(item)
    // }

    return (
        <Card style={{ width: '24em', margin: '15px' }}>
            <Card.Header
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}
            >
                <div>
                    {'Seu pedido ficará pronto em'}
                    <TimeLeftSpan>{`${timeLeft} minutos`}</TimeLeftSpan>
                </div>
                {itemStatus == 'delivered' ?
                    <CloseButton
                        onClick={() =>{cancelOrderedItem(item)}}
                    ><IoIosCloseCircleOutline size={30} /></CloseButton>
                    :
                    null
                }

            </Card.Header>
            <Card.Img style={{ borderRadius: 0 }} src={item.image} />
            <Card.Body>
                <Card.Title
                    style={{
                        fontSize: '2em',
                        textAlign: 'center',
                        fontWeight: 'bold'
                    }}
                >{item.title}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item>{`Já estamos preparando ${item.quantity} ${item.title}`}</ListGroup.Item>
                <ListGroup.Item>{`Valor total: R$ ${item.price}`}</ListGroup.Item>
                <ListGroup.Item>

                    {itemStatus == 'Preparando' ?
                        <FeedbackPrep>Preparando</FeedbackPrep>
                        :
                        <FeedBackConclude>Entregue</FeedBackConclude>
                    }
                </ListGroup.Item>

                {itemStatus == 'Preparando' ?
                    <Button variant="primary"
                        style={{
                            margin: '5px',
                            backgroundColor: '#B85C38',
                            border: 'none',

                        }}
                        onClick={() => {
                            cancelOrderedItem(item)
                            toast.success('Pedido cancelado', ToastStyles)
                        }}
                    >Cancelar pedido</Button>
                    :
                    null
                }

            </ListGroup>
        </Card>
    );
}

export default OrderedItemCard;