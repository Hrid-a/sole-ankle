import { Search, ShoppingBag, ChevronDown } from 'react-feather';
import styled from 'styled-components';

const ICONS = {
    search: Search,
    'shopping-bag': ShoppingBag,
    'chevron-down': ChevronDown,
}
const Icon = ({ icon, size, strokeWidth, color, ...delegated }) => {

    const Component = ICONS[icon]
    return (
        <Wrapper strokeWidth={strokeWidth} {...delegated}>
            <Component color={color} size={size} />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    & > svg {
        stroke-width: ${p => p.strokeWidth}px;
        display: block;
    }
`;
export default Icon