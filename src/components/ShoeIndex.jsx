import styled from "styled-components"
import Aside from "./Aside";
import BreadCrumbs from "./BreadCrumbs";
import SelectMenu from "./Select";
import { Quiries, WEIGHTS } from "../constants";
import ShoeGrid from "./ShoeGrid";
const ShoeIndex = ({ sortId, setSortId }) => {

    return (
        <Wrapper>
            <MainColumn >
                <Header>
                    <Title>Runing</Title>
                    <SelectMenu
                        label="sort"
                        value={sortId}
                        onChange={(ev) => setSortId(ev.target.value)}
                    >
                        <option value="newest">Newest Releases</option>
                        <option value="price">Price</option>
                    </SelectMenu>
                </Header>
                <ShoeGrid />
            </MainColumn>
            <LeftColumn>
                <BreadCrumbs>
                    <BreadCrumbs.Crumb href="home">home</BreadCrumbs.Crumb>
                    <BreadCrumbs.Crumb href="home">sale</BreadCrumbs.Crumb>
                    <BreadCrumbs.Crumb href="home">shoes</BreadCrumbs.Crumb>
                </BreadCrumbs>
                <Aside />
            </LeftColumn>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    gap: 32px;
    flex-direction: row-reverse;
    position: relative;
`;
const MainColumn = styled.article`
    flex: 3;
`
const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
`;
const Title = styled.span`
    font-size: ${24 / 16}rem;
    font-weight: ${WEIGHTS.medium};
`;
const LeftColumn = styled.article`
    flex:1;
    @media ${Quiries["tablet-and-down"]}{
        position: absolute;
        left: 0;
        top: -16px;
    }
`;
export default ShoeIndex