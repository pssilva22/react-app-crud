import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Home = styled.div`
    padding: 1em;
`;

export const StyledLink = styled(Link)`
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: #000;
    }
`;