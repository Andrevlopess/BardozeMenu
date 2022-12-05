import { useContext } from 'react';
import styled from 'styled-components';
import { FoodContext } from '../../../Contexts/FoodContext';
import LightTheme from '../../Themes/LightTheme';

const MainDrinksContainer = styled.div`
 width: 70vw;
 display: flex;
 justify-content: space-between;
 align-items: center;
 margin: 0px auto ;
 margin-top: 10px;
 padding:20px;
 h3{
  font-family: 'McLaren', cursive;
  color: ${LightTheme.color.primary.contrastText};
  font-size: 3em;
 }
 img{
  height: 300px;
  width: 300px;
 }
`
function DrinksMain({ card }) {

  return (
    <MainDrinksContainer>
      <div>
        <h3>{card.title}</h3>
        <p>{card.description}</p>
      </div>
      <img src={card.image} />
    </MainDrinksContainer>
  );
}

export default DrinksMain;