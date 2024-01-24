import styled from "styled-components";
import Icon from "./Icon";
import { COLORS } from "../constants";

const MobileMenu = ({ isOpen, onDismiss }) => {


    return !isOpen ? null : (
        <Wrapper>
            <Overlay />
            <MainWrapper>

                <DismissIcon icon={"dismiss-icon"} onClick={onDismiss} size={16} />
                <Navigation>
                    <ActiveLink href="/sale">Sale</ActiveLink>
                    <NavigationLink href="/new">New&nbsp;Releases</NavigationLink>
                    <NavigationLink href="/men">Men</NavigationLink>
                    <NavigationLink href="/women">Women</NavigationLink>
                    <NavigationLink href="/kids">Kids</NavigationLink>
                    <NavigationLink href="/collections">Collections</NavigationLink>
                </Navigation>
                <Footer>
                    <NavigationLink href="/terms">Terms and Conditions</NavigationLink>
                    <NavigationLink href="/privacy">Privacy Policy</NavigationLink>
                    <NavigationLink href="/contact">Contact Us</NavigationLink>
                </Footer>
            </MainWrapper>
        </Wrapper>
    )
}

const Wrapper = styled.div`
/* position: relative; */
`;
const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background-color: rgba(96, 100, 108, 0.80);
`;
const MainWrapper = styled.div`

    background-color: ${COLORS.white};
    min-height: 100dvh;
    min-height: 100dvh;
    padding: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    top: 0;
    right: 0;
    width: 75%;

    
`;
const DismissIcon = styled(Icon)`
    position: absolute;
    top: 16px;
    right: 26px;
    width: 16px;
    height: 16px;
`;
const Navigation = styled.nav`
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 22px;
color: ${COLORS.gray[900]};
`;

const NavigationLink = styled.a`
    color: inherit;
    font-size: ${18 / 16}rem;
    text-decoration: none;
    `;
const ActiveLink = styled(NavigationLink)`
color: ${COLORS.secondary};

`;
const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    gap: 14px;
    color: ${COLORS.gray[700]}
`;
export default MobileMenu;