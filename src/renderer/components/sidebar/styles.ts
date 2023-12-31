import { styled as muiStyled } from '@mui/material';
import styled from 'styled-components';
import { allColors } from '../../tokens';
import { Folders } from '../folders';

export const Box = styled.nav`
    min-width: 257px;
    background: ${allColors.sidebar.background};
    box-shadow: 0px 10px 30px 0px rgba(17, 38, 146, 0.05);
`;
