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

function LateralFoodNav() {


    const { hamburguers, massas, frangos, carnes } = useContext(CategoriesContext)
    const { defaultLateralCategory } = useContext(FoodContext)
    
    const [hamVisible, setHamVisible] = useState(defaultLateralCategory === "Hamburguer" ? true : false)
    const [massasVisible, setMassasVisible] = useState(defaultLateralCategory === "Massas" ? true : false)
    const [carnesVisible, setCarnesVisible] = useState(defaultLateralCategory === "Steaks" ? true : false)
    const [frangosVisible, setFrangosVisible] = useState(defaultLateralCategory === "Chicken" ? true : false)

    function OpenHam() {
        setHamVisible(true)
        setMassasVisible(false)
        setCarnesVisible(false)
        setFrangosVisible(false)
    }

    function OpenMassas() {
        setHamVisible(false)
        setMassasVisible(true)
        setCarnesVisible(false)
        setFrangosVisible(false)
    }

    function OpenCarnes() {
        setHamVisible(false)
        setMassasVisible(false)
        setCarnesVisible(true)
        setFrangosVisible(false)
    }

    function OpenFrango() {
        setHamVisible(false)
        setMassasVisible(false)
        setCarnesVisible(false)
        setFrangosVisible(true)
    }
    console.log(defaultLateralCategory[0]);

    return (
        <Tab.Container id="left-tabs-example"
         defaultActiveKey={ defaultLateralCategory ? `${defaultLateralCategory}` : "Hamburguer"}>
            <Row style={{ width: '80%' }}>
                <Col sm={3}>
                    <Nav variant="tabs" className="flex-column" style={NavStyles}>
                        <h4 style={titleStyles}>Categorias</h4>
                        <Nav.Item style={NavCellStyles}>
                            <Nav.Link eventKey="Hamburguer" style={linkStyles}
                                onClick={OpenHam}>
                                Hamburguers</Nav.Link>
                        </Nav.Item >
                        <Nav.Item style={NavCellStyles}>
                            <Nav.Link eventKey="Massas"
                                style={linkStyles}
                                onClick={OpenMassas}
                            >Massas</Nav.Link>
                        </Nav.Item>
                        <Nav.Item style={NavCellStyles}>
                            <Nav.Link eventKey="Steaks"
                                style={linkStyles}
                                onClick={OpenCarnes}>Churrasco</Nav.Link>
                        </Nav.Item>
                        <Nav.Item style={NavCellStyles}>
                            <Nav.Link eventKey="Chicken"
                                style={linkStyles}
                                onClick={OpenFrango}>Frangos</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Col>
                <Col sm={6}>
                    <Tab.Content style={{ display: 'flex', width: '60vw'}}>
                        {hamVisible ?
                            <Tab.Pane eventKey="Hamburguer" style={{ display: 'flex', flexWrap: 'wrap'  }}>
                                {
                                    hamburguers.map((hamburguer) => {
                                        return (
                                            <PagesItemCard item={hamburguer} key={hamburguer.id} />
                                        )
                                    })
                                }
                            </Tab.Pane>
                            :
                            null
                        }
                        {massasVisible ?
                            <Tab.Pane eventKey="Massas" style={{ display: 'flex', flexWrap: 'wrap' }}>
                                {massas &&
                                    massas.map((massa) => {
                                        return (
                                            <PagesItemCard item={massa} key={massa.id} />
                                        )
                                    })
                                }
                            </Tab.Pane>
                            :
                            null
                        }
                        {carnesVisible ?
                           <Tab.Pane eventKey="Steaks" style={{ display: 'flex', flexWrap: 'wrap' }}>
                            {carnes &&
                                carnes.map((carne) => {
                                    return (
                                        <PagesItemCard item={carne} key={carne.id} />
                                    )
                                })
                            }
                        </Tab.Pane>  
                        : 
                        null
                        }
                       {frangosVisible ?
                        <Tab.Pane eventKey="Chicken" style={{ display: 'flex', flexWrap: 'wrap'}}>
                            {frangos &&
                                frangos.map((frango) => {
                                    return (
                                        <PagesItemCard item={frango} key={frango.id} />
                                    )
                                })
                            }
                        </Tab.Pane>
                        : null
                       }
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
    );
}

export default LateralFoodNav;