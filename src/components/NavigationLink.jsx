import styled from "styled-components"
import { COLORS, WEIGHTS } from "../constants";

const NavigationLink = ({ children, ...delegated }) => {
    return (
        <Wrapper {...delegated}>
            <MainText>{children}</MainText>
            <HoverText hidden-aria="true" > {children} </HoverText>
        </Wrapper>
    )
}


const Wrapper = styled.a`
    display: block;
    position: relative;
    text-decoration: none;
    font-size: ${18 / 16}rem;
    font-weight: ${WEIGHTS.normal};
    text-transform: uppercase;
    cursor: pointer;
    color: inherit;
    /* 
        text slide in animation
    */
    overflow: hidden;
`;

const Text = styled.span`
    display: block;
    transform: translateY(var(--transform-from));
    transition: transform 500ms;
    ${Wrapper}:hover & {
        transform: translateY(var(--transform-to));
        transition: transform 250ms;
    }
`;

const MainText = styled(Text)`
    --transform-from: 0%;
    --transform-to: -100%;
`;
const HoverText = styled(Text)`
--transform-from: 100%;
    --transform-to: 0%;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    font-weight: ${WEIGHTS.bold};
`;

export default NavigationLink;