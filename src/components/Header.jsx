import styled from "styled-components"
import SupperHeader from "./SupperHeader"
import { COLORS, Quiries, WEIGHTS } from "../constants";
import Icon from "./Icon";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import { createPortal } from "react-dom";
import NavigationLink from "./NavigationLink";
const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <>
            <SupperHeader />
            <Wrapper>
                <Logo>
                    <h1>sole&ankle</h1>
                </Logo>
                <Navigation>
                    <ul>
                        <li>
                            <NavigationLink href="">

                                sale
                            </NavigationLink>
                        </li>
                        <li>
                            <NavigationLink href="">
                                new releases
                            </NavigationLink>
                        </li>
                        <li>
                            <NavigationLink href="">
                                men
                            </NavigationLink>
                        </li>
                        <li>
                            <NavigationLink href="">
                                women
                            </NavigationLink>
                        </li>
                        <li>
                            <NavigationLink href="">
                                kids
                            </NavigationLink>
                        </li>
                        <li>
                            <NavigationLink href="">
                                collections
                            </NavigationLink>
                        </li>
                    </ul>
                </Navigation>
                <IconsWrapper >
                    <Icon icon="search" strokeWidth={1} />
                    <Icon icon="shopping-bag" strokeWidth={1} />
                    <Icon icon="menu" strokeWidth={1} onClick={() => setShowMenu(prev => !prev)} />
                </IconsWrapper>
            </Wrapper>
            {createPortal(

                <MobileMenu isOpen={showMenu} onDismiss={() => setShowMenu(false)} />,
                document.body
            )}
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
    @media ${Quiries["laptop-and-down"]} {
        border-top: 4px solid ${COLORS.gray[900]};
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
        & li:first-of-type {
        color: ${COLORS.secondary};
        }
        
    }
    @media ${Quiries["laptop-and-down"]} {
        display: none;
    }
`;



const IconsWrapper = styled.div`
    display: none;
    @media ${Quiries["laptop-and-down"]}{
        display: flex;
        gap: 32px;
        align-items: center;
        justify-content: flex-end;
        flex: 1;
    }
`;

export default Header