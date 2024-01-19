import styled from "styled-components"
import { COLORS, WEIGHTS } from "../constants";

const BreadCrumbs = ({ children }) => {
    return (
        <Wrapper>{children}</Wrapper>
    )
};

BreadCrumbs.Crumb = ({ children, href }) => {

    return (
        <CrumbWrapper>
            <CrumbLink href={href}>{children}</CrumbLink>
        </CrumbWrapper>
    );
}



const Wrapper = styled.nav`
    display: flex;
    gap: 12px;
`;
const CrumbWrapper = styled.div`
        color: ${COLORS.gray[300]};
    &:not(:last-of-type){
        &::after {
            content: "/";
            color: inherit;
            margin-inline: 10px;
            opacity: 0.25;
        }
    }
`;
const CrumbLink = styled.a`
    font-size: ${14 / 16} rem;
    font-weight: ${WEIGHTS.normal};
    text-transform: uppercase;
    text-decoration: none;
    color: inherit;
    
`;
export default BreadCrumbs;