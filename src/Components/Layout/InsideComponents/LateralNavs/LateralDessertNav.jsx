import { useContext, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { CategoriesContext } from '../../../../Contexts/CategoriesContext';
import { FoodContext } from '../../../../Contexts/FoodContext';
import LightTheme from '../../../Themes/LightTheme';
import PagesItemCard from '../../Cards/PagesItemCard';



const NavStyles = {
    backgroundColor: `${LightTheme.color.primary.contrastText}`,
    height: '100%',
    display: 'flex',
    color: `${LightTheme.color.primary.main}`,
    borderTop: `6px solid ${LightTheme.color.primary.main}`,
    boxShadow: `0px 0px 5px ${LightTheme.color.footerBackground}`,
    paddingTop: '5px',
}

const NavCellStyles = {
    color: `${LightTheme.color.primary.main}`,
    borderRadius: 0,
    height: '55px',
}


const linkStyles = {
    color: 'currentcolor',
    borderRadius: 0,
}
const titleStyles = {
    textAlign: 'center',
    fontWeight: 'bold',
    margin: '10px',
    backgroundColor: `${LightTheme.color.primary.linkColor}`,
    padding: '10px',
    borderRadius: '4px'
}

function LateralDessertNav() {


    const { iceCreams, milkShakes } = useContext(CategoriesContext)
    const {defaultLateralCategory}= useContext(FoodContext)
    
    const [iceCreamVisible, seticeCreamVisible] = useState(defaultLateralCategory === "IceCream" ? true : false)
    const [milkShakesVisible, setmilkShakesVisible] = useState(defaultLateralCategory === "MilkShake" ? true : false)

    function OpenIceCream() {
        seticeCreamVisible(true)
        setmilkShakesVisible(false)     
    }

    function OpenMilkShakes() {
        seticeCreamVisible(false)
        setmilkShakesVisible(true)
    }


    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey={`${defaultLateralCategory}`} >
            <Row style={{ width: '80%' }}>
                <Col sm={3}>
                    <Nav variant="tabs" className="flex-column" style={NavStyles}>
                        <h4 style={titleStyles}>Categorias</h4>
                        <Nav.Item style={NavCellStyles}>
                            <Nav.Link eventKey="IceCream" style={linkStyles}
                                onClick={OpenIceCream}>
                               Sorvetes</Nav.Link>
                        </Nav.Item >
                        <Nav.Item style={NavCellStyles}>
                            <Nav.Link eventKey="MilkShake"
                                style={linkStyles}
                                onClick={OpenMilkShakes}
                            >Milk Shakes</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={6}>
                    <Tab.Content style={{ display: 'flex', width: '60vw'}}>
                        {iceCreamVisible ?
                            <Tab.Pane eventKey="IceCream" style={{ display: 'flex', flexWrap: 'wrap'  }}>
                                {
                                    iceCreams.map((iceCream) => {
                                        return (
                                            <PagesItemCard item={iceCream} key={iceCream.id} />
                                        )
                                    })
                                }
                            </Tab.Pane>
                            :
                            null
                        }
                        {milkShakesVisible ?
                            <Tab.Pane eventKey="MilkShake" style={{ display: 'flex', flexWrap: 'wrap' }}>
                                {milkShakes &&
                                    milkShakes.map((milkão) => {
                                        return (
                                            <PagesItemCard item={milkão} key={milkão.id} />
                                        )
                                    })
                                }
                            </Tab.Pane>
                            :
                            null
                        }
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
}

export default LateralDessertNav;