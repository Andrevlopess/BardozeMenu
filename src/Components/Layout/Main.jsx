import styled from "styled-components"
import LightTheme from "../Themes/LightTheme"
import FeaturedFood from "./Cards/FeaturedFoods"
import ImgSlider from "./InsideComponents/ImgSlider"

const MainContainer = styled.div`
 width: 100%;
 background-color: ${LightTheme.color.bodyBackground};
`
function Main(){
    return(
        <MainContainer>
            <ImgSlider/>
            <FeaturedFood/>
        </MainContainer>

    )
}
export default Main