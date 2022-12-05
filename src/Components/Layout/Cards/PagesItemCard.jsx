import { useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { CartContext } from '../../../Contexts/CartContext';
import LightTheme from '../../Themes/LightTheme';
import CartItemCard from './CartItemCard';

const Distact = styled.span`
 background-color: #daa583;
 padding: 4px;
 font-size: .6rem;
 border-radius: 5px;
 margin-left: 5px;
`



export default function PagesItemCard({ item }) {

    const { addCartItems } = useContext(CartContext)
    return (
        <Card style={{
            width: '16rem',
            margin: '5px',
        }}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body style={{ display: 'grid', placeItems: 'center' }}>
                <Card.Title style={{ fontWeight: 'bold', fontSize: '1.2rem' }}>{item.title}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush" >
                <ListGroup.Item>
                    <Accordion flush >
                        <Accordion.Item eventKey="0" style={{ fontSize: '.9rem' }}>
                            <Accordion.Header>Ver descrição</Accordion.Header>
                            <Accordion.Body>
                                {item.description}
                                <br />
                                {`Tempo de espera: `}
                                <br/>
                                <Distact>{`${item.waitingTime} minutos`}</Distact>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </ListGroup.Item>
            </ListGroup>


            <Link to="/Cart" style={{padding: '5px'}}>
                <Button variant="primary"
                    style={{
                        backgroundColor: `${LightTheme.color.primary.cardColor.background}`,
                        border: 'none',
                        fontSize: '.8rem',
                        width: '100%',
                        boxShadow: `-2px 2px 5px ${LightTheme.color.footerBackground}`
                    }}
                    onClick={() => { addCartItems(item) }}
                >{`Pedir por R$ ${item.price}`}</Button>
            </Link>


        </Card>
    )
}
