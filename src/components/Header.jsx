import styled from "styled-components"
import SupperHeader from "./SupperHeader"
import { COLORS, WEIGHTS } from "../constants";
const Header = () => {
    return (
        <>
            <SupperHeader />
            <Wrapper>
                <Logo>
                    <h1>sole&ankle</h1>
                </Logo>
                <Navigation>
                    <ul>
                        <li>sale</li>
                        <li>new releases</li>
                        <li>men</li>
                        <li>women</li>
                        <li>kids</li>
                        <li>collections</li>
                    </ul>
                </Navigation>
            </Wrapper>
        </>
    )
}

const Wrapper = styled.header`
    padding: 21px 32px 24px;
    display: flex;
    gap: 48px;
    border-bottom: 1px solid ${COLORS.gray[300]};
    & h1 {
        font-size: ${24 / 16}rem;
        font-weight: ${WEIGHTS.medium};
    }
`;
const Logo = styled.div`
    flex:1;
    max-width: 370px;
`;
const Navigation = styled.nav`
    & > ul {
        display: flex;
        gap: 48px;
        align-items: baseline;
        color: ${COLORS.gray[900]};
        font-size: ${18 / 16}rem;
        font-weight: ${WEIGHTS.normal};
        text-transform: uppercase;
        & >li:first-of-type {
            color: ${COLORS.secondary};
        }
    }
`;

export default Header