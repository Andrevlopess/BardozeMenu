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

function LateralDrinksNav() {


    const { juices, wines, chopps } = useContext(CategoriesContext)
    const {defaultLateralCategory} = useContext(FoodContext)
    
    const [juiceVisible, setjuiceVisible] = useState(defaultLateralCategory === "Juices" ? true : false)
    const [choppsVisible, setchoppsVisible] = useState(defaultLateralCategory === "Chopp" ? true : false)
    const [winesVisible, setwinesVisible] = useState(defaultLateralCategory === "WinesSparklingWines" ? 
    true : false)

    function OpenJuice() {
        setjuiceVisible(true)
        setchoppsVisible(false)
        setwinesVisible(false)      
    }

    function OpenChopps() {
        setjuiceVisible(false)
        setchoppsVisible(true)
        setwinesVisible(false) 
    }

    function OpenWines() {
        setjuiceVisible(false)
        setchoppsVisible(false)
        setwinesVisible(true)
    }

    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey={`${defaultLateralCategory}`} >
            <Row style={{ width: '80%' }}>
                <Col sm={3}>
                    <Nav variant="tabs" className="flex-column" style={NavStyles}>
                        <h4 style={titleStyles}>Categorias</h4>
                        <Nav.Item style={NavCellStyles}>
                            <Nav.Link eventKey="Juices" style={linkStyles}
                                onClick={OpenJuice}>
                               Sucos</Nav.Link>
                        </Nav.Item >
                        <Nav.Item style={NavCellStyles}>
                            <Nav.Link eventKey="Chopp"
                                style={linkStyles}
                                onClick={OpenChopps}
                            >Chopps</Nav.Link>
                        </Nav.Item>
                        <Nav.Item style={NavCellStyles}>
                            <Nav.Link eventKey="WinesSparklingWines"
                                style={linkStyles}
                                onClick={OpenWines}>Vinhos e espumantes</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={6}>
                    <Tab.Content style={{ display: 'flex', width: '60vw'}}>
                        {juiceVisible ?
                            <Tab.Pane eventKey="Juices" style={{ display: 'flex', flexWrap: 'wrap'  }}>
                                {
                                    juices.map((juice) => {
                                        return (
                                            <PagesItemCard item={juice} key={juice.id} />
                                        )
                                    })
                                }
                            </Tab.Pane>
                            :
                            null
                        }
                        {choppsVisible ?
                            <Tab.Pane eventKey="Chopp" style={{ display: 'flex', flexWrap: 'wrap' }}>
                                {chopps &&
                                    chopps.map((chopp) => {
                                        return (
                                            <PagesItemCard item={chopp} key={chopp.id} />
                                        )
                                    })
                                }
                            </Tab.Pane>
                            :
                            null
                        }
                        {winesVisible ?
                           <Tab.Pane eventKey="WinesSparklingWines" style={{ display: 'flex', flexWrap: 'wrap' }}>
                            {wines &&
                                wines.map((wine) => {
                                    return (
                                        <PagesItemCard item={wine} key={wine.id} />
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

export default LateralDrinksNav;