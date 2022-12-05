import styled from "styled-components"
import LightTheme from "../../Themes/LightTheme"
import { Link } from "react-router-dom"

const OverviewContainer = styled.div`
  width: fit-content;
  position: absolute;
  margin-top: 80px;
  border-radius: 10px;
  background-color:${LightTheme.color.primary.back};
  padding: 5px;
  ul{
    display: flex;
    align-items: center;
    list-style: none;
    padding: 6px;
    color: ${LightTheme.color.primary.contrastText};
    z-index: 99;

    & li:nth-last-child(1)::after{
    content: none !important;
    }
    & li:nth-child(even)::after{
    content:  "|";
   }
    & li:nth-child(odd)::after{
    content: " | ";
    }
  }
`

const CatList = styled.li`
 & li:nth-last-child()::after{
    background-color: red;
 }
 & li:nth-child()::after{
    content: "|";
 }
 
`

function OverView({ category }) {
    return (
        <OverviewContainer>
            <ul>
                {
                    category.map((cat) => {
                        return (
                            <CatList key={cat.id}>
                                <Link to={`/${cat.title}`}>{` ${cat.title}`}</Link>
                            </CatList>

                        )
                    })
                }
            </ul>
        </OverviewContainer>
    )
}
export default OverView