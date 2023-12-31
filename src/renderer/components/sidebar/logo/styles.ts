import styled from 'styled-components';
import { allColors } from '../../../tokens';

export const Box = styled.div`
    box-sizing: border-box;

    display: flex;
    align-items: center;

    padding-left: 32px;
    gap: 8px;

    width: 100%;
    height: 68px;

    border-bottom: 1px solid ${allColors.sidebar.logoBorderBottom};
`;
