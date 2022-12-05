import { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FoodContext } from '../../../Contexts/FoodContext';
import styled from 'styled-components'
import DrinksMain from '../InsideComponents/DrinkMain';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import { CartContext } from '../../../Contexts/CartContext';


const FeaturedFoodContainer = styled.div`
    margin: 20px 20px 0 20px;
`
const FeaturedDrinksContainer = styled.div`
  margin-top: 50px;
  & div:nth-child(odd){
    flex-direction: row-reverse;
  }
`
const containerStyle = {
    display: 'flex', 
    alignItems: 'stretch',
    margin: '100px',
    marginTop: 0
}

function FeaturedFood() {

    const { featuredFoodsMain, drinks } = useContext(FoodContext)
    const { addCartItems } = useContext(CartContext)


    return (
        <FeaturedFoodContainer>
            <Row xs={1} md={2} className="g-3" style={containerStyle}>
                {featuredFoodsMain.map((food) => (
                    <Col key={food.id}>
                        <Card style={{
                            backgroundColor: "#a84e2b",
                            height: '100%',
                            display: 'grid',
                        }}>
                            <Card.Img variant="top" src={food.image} />
                            <Card.Body>
                                <Card.Title style={{ fontWeight: 'bold', color: '#faecda' }}>{food.title}</Card.Title>
                                <Card.Text style={{ color: '#dbcab4' }}>
                                    {food.description}
                                </Card.Text>
                                <Link to={`/Cart`}>
                                     <Button variant="primary" style={{
                                    backgroundColor: '#472D2D',
                                    border: 'none',
                                    width: '100%',
                                    color: '#ffffff'
                                }}
                                 onClick={() => {addCartItems(food)}}
                                >{`Peça já por apenas R$${food.price}`}</Button>
                                </Link>
                               
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <FeaturedDrinksContainer>
                {
                    drinks.map((drinks) => {
                        return (
                            <DrinksMain card={drinks} key={drinks.id} />
                        )
                    })
                }
            </FeaturedDrinksContainer>

        </FeaturedFoodContainer>

    );
}

export default FeaturedFood;