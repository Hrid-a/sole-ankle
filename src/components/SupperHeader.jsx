import styled from "styled-components"
import { COLORS, Quiries, WEIGHTS } from "../constants";
import VisuallyHidden from "./VisuallyHidden";
import Icon from "./Icon";
const SupperHeader = () => {

    return (
        <Wrapper>
            Free shipping on domestic orders over $75!
            <Label>
                <VisuallyHidden>search input</VisuallyHidden>
                <Input type="text" placeholder="Search" />
                <SearchIcon icon="search" strokeWidth={1} size={16} />
            </Label>
            <HelpLink>help</HelpLink>
            <Icon icon="shopping-bag" strokeWidth={1} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 12px 32px;
    display: flex;
    gap:24px;
    align-items: center;
    background-color: ${COLORS.gray[900]};
    color: ${COLORS.white};
    font-size: ${14 / 16}rem;
    @media ${Quiries["laptop-and-down"]} {
        display: none;
    }
`;

const Label = styled.label`
    margin-left:auto;
    position: relative;
`;

const HelpLink = styled.a`
    color: ${COLORS.gray[500]};
    font-size: ${14 / 16}rem;
    font-weight: ${WEIGHTS.normal};
    text-transform: capitalize;
    letter-spacing:2px;
`;

const Input = styled.input`
    border:none;
    border-bottom: 2px solid ${COLORS.white};
    background-color: transparent ;
    color: ${COLORS.gray[500]};
    padding: 6px 24px;
    position: relative;
    &::placeholder {
        color: ${COLORS.gray[500]};
    } 

    &:focus {
        outline-offset: 4px;
    }
`;

const SearchIcon = styled(Icon)`
    position: absolute;
    top: 0;
    left: 0;
    bottom:0;
    margin: auto !important;
    width: 16px;
    height: 16px;
`;


export default SupperHeader