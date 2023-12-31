import { allColors } from '../../tokens';
import styled from 'styled-components';

export const Box = styled.div`
    position: relative;
    display: flex;
    box-sizing: border-box;
    // TODO it should be 76px
    height: 67px;
    width: 100%;
    padding: 16px 32px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    background: ${allColors.header.background};
    backdrop-filter: blur(32px);

    z-index: 1;
`;
