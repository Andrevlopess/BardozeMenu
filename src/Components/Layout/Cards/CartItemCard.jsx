import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../Contexts/CartContext';
import toast from 'react-hot-toast';

function CartItemCard({ item }) {

    const [quantity, setQuantity] = useState(1)
    const [waitingTime, setWaitingTime] = useState(0)
    const [totalValue, setTotalValue] = useState(0)
    const { addOrderedItems, setInfos, removeCartItem } = useContext(CartContext)

    function handleAddOrderedItem(e) {
        setQuantity(e.target.value)
    }


    useEffect(() => {
        setWaitingTime(item.waitingTime * quantity)
        setTotalValue(Math.round(item.price * quantity).toFixed(2))
    }, [quantity])


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




    return (
        <>
            <Card style={{ width: '22%', minWidth: '16rem', margin: '20px' }} className="text-center">
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>

                        {item.waitingTime ?
                            `O tempo estimado de espera é de ${waitingTime} minutos.`
                            :
                            `Já traremos seu pedido!`
                        }
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">

                    <ListGroup.Item style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center'
                    }}>
                        Quantidade:

                        <Form.Select aria-label="Default select example" style={{ width: '100px' }}
                            onChange={handleAddOrderedItem}
                        >
                            <option value="1" defaultValue={1}>1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </Form.Select>

                    </ListGroup.Item>
                    <ListGroup.Item style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>

                        {`Valor total: R$${totalValue}`}</ListGroup.Item>

                    <ListGroup.Item>
                        <Link to="/OrderedItems">
                            <Button variant="secondary" style={{
                                width: '100%',
                                backgroundColor: '#B85C38',
                                border: '1px solid #E0C097 '
                            }}

                                onClick={() => {
                                    setInfos([waitingTime, totalValue])
                                    item.price = totalValue
                                    item.waitingTime = waitingTime
                                    item.quantity = quantity
                                    item.status = 'Preparando'
                                    addOrderedItems(JSON.stringify(item))
                                    toast.success('Seu pedido foi confirmado!',{duration: 5000})
                                }}
                            >Finaizar Pedido</Button>
                        </Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Button
                            style={{
                                backgroundColor: '#e0bdaf',
                                border: 'none',
                                color: '#333',
                                width: '100%',
                            }}
                            onClick={() => {
                                removeCartItem(item)
                                toast.success('Removido com sucesso', ToastStyles)
                            }}
                        >Remover do Carrinho</Button>
                    </ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Link to={`/food`} style={{ color: 'inherit' }}>{`Ver mais de ${item.foodCategories}`}</Link>
                </Card.Body>
            </Card>
        </>
    );
}

export default CartItemCard;