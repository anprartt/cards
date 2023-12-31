import { Button } from '@mui/material';
import styled from 'styled-components';
import { allColors } from '../../../tokens';

export const Box = styled.div`
    box-sizing: border-box;

    position: absolute;
    left: -18px;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 30px;
    height: 30px;
    padding: 6px;

    border-radius: 33px;
    background: ${allColors.header.backButtonBackground};
`;
