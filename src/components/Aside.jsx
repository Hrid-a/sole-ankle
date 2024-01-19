import styled from "styled-components";
import { COLORS } from "../constants";
const Aside = () => {
    return (
        <Wrapper>
            <Link href="#">life style</Link>
            <Link href="#">jordan</Link>
            <ActiveLink href="#">running</ActiveLink>
            <Link href="#">basket ball</Link>
            <Link href="#">training & gym</Link>
            <Link href="#">football</Link>
            <Link href="#">basket ball</Link>
            <Link href="#">training & gym</Link>
            <Link href="#">football</Link>
            <Link href="#">basket ball</Link>
            <Link href="#">football</Link>
        </Wrapper>
    )
}

const Wrapper = styled.aside`
    padding-top: 35px; 
    color: ${COLORS.gray[900]}
`;
const Link = styled.a`
    display: block;
    color: inherit;
    font-size: ${16 / 18}rem;
    text-decoration: none;
    text-transform: capitalize;
    &:not(:last-of-type){
        margin-bottom: 10px;
    }

`;
const ActiveLink = styled(Link)`
color: ${COLORS.primary};
`;
export default Aside