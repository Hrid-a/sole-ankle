import styled from "styled-components"
import { formatPrice, isNewShoe, pluralize } from "../utils";
import { COLORS, WEIGHTS } from "../constants";

const ShoeCard = ({ slug, name, imageSrc, price, salePrice, releaseDate, numOfColors }) => {
    const variant = typeof salePrice === 'number'
        ? 'on-sale'
        : isNewShoe(releaseDate)
            ? 'new-release'
            : 'default'

    const VARIANTS = {
        "on-sale": {
            text: "sale",
            'bg': COLORS.primary

        },
        "new-release": {
            text: "just released",
            'bg': COLORS.secondary
        },
        default: {

            'bg': "transparent"
        }
    }
    const component = VARIANTS[variant];
    return (
        <Link href={slug}>
            <Wrapper>
                <ImgaeWrapper>
                    <Variant style={{ '--bg-color': component.bg }} >{component.text}</Variant>
                    <Image src={imageSrc} />
                </ImgaeWrapper>
                <Row>
                    <Name>{name}</Name>

                    <Price style={{ '--decoration': salePrice && "line-through" }} >{formatPrice(price)}</Price>

                </Row>
                <Row>
                    <ColorInfo>{pluralize("color", numOfColors)}</ColorInfo>
                    {salePrice && <SalePrice>{formatPrice(salePrice)}</SalePrice>}
                </Row>
            </Wrapper>
        </Link>
    )
}

const Link = styled.a`
    text-decoration: none;
    color: inherit;
    flex:1;
    min-width: 300px;
    border-radius: 8px;
`;

const Wrapper = styled.article`
    border-radius: 8px;
    /* overflow: hidden; */
    `;
const ImgaeWrapper = styled.div`
    margin-bottom: 10px;
    position: relative;
    `;
const Variant = styled.span`
    position: absolute;
    top: 12px;
    right: -4px;
    padding: 7px 11px 9px;
    font-size: ${14 / 16}rem;
    font-weight: ${WEIGHTS.medium};
    color: ${COLORS.white};
    background-color: var(--bg-color);
    text-transform: capitalize;
    border-radius: 2px;
    `;
const Image = styled.img`
border-radius: 8px 8px 0px 0px;
    width:100%
`;
const Row = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Name = styled.p`
    font-size: ${18 / 16} rem;
    font-weight: ${WEIGHTS.medium};
`;
const Price = styled.span`
    text-decoration: var(--decoration);
`;
const ColorInfo = styled.span`
    color: ${COLORS.gray[700]}
`;
const SalePrice = styled.span`
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.primary};
`;
export default ShoeCard