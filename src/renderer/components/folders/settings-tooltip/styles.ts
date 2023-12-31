import { Box, Button, styled } from '@mui/material';
import { allColors } from '../../../tokens';

export const TooltipContentBox = styled(Box)`
    display: flex;
    flex-direction: column;
    width: 150px;
`;

export const StyledButton = styled(Button)`
    font-family: Inter;
    font-size: 15px;
    text-transform: none;

    display: flex;
    justify-content: left;

    padding-left: 8px;
    width: 100%;

    color: ${allColors.folders.settingsTooltip.buttonColor};
    &:hover {
        background-color: ${allColors.folders.settingsTooltip.backgroundColor};
    }
`;
