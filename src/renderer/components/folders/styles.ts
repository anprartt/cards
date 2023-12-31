import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, css, styled } from '@mui/material';
import { allColors } from '../../tokens';
import { ExpandLess, ExpandMore, Folder } from '@mui/icons-material';

export const StyledList = styled(List)`
    margin-top: 24px;

    .MuiTooltip-tooltip {
        padding: 8px 0;
        background: #fff;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    }
`;

export const ListTitle = styled(ListItem)`
    font-size: 16px;
    font-weight: 600;
    line-height: 175%;
    color: ${allColors.folders.listTitleColor};
    padding-left: 24px;
`;

export const StyledListButton = styled(ListItemButton)<{ isLastSelected: boolean; isNested: boolean; depth?: number }>`
    display: flex;
    align-items: center;
    margin: 0 12px;
    margin-bottom: 8px;
    &:hover {
        border-radius: 8px;
    }

    ${({ isLastSelected }) =>
        isLastSelected &&
        css`
            border-radius: 8px;
            background: ${allColors.folders.buttonBackground} !important;
            color: ${allColors.folders.buttonColor} !important;
        `}

    padding-left: ${({ isNested, depth }) => (isNested ? 16 + depth * 8 : 16 + 16 + depth * 8)}px;

    span {
        font-family: Inter;
        font-size: 15px;
    }
    height: 36px;

    .MuiListItemIcon-root {
        min-width: 32px;
    }

    svg {
        width: 20px;
        height: 20px;
    }
`;

export const StyledListItemIcon = styled(ListItemIcon)`
    min-width: 24px;
`;

const getIconsStyles = ({ isLastSelected }: { isLastSelected: boolean }) => css`
    width: 16px;
    height: 16px;

    color: ${isLastSelected ? allColors.folders.iconColors.selected : allColors.folders.iconColors.default};
`;

export const StyledExpandLess = styled(ExpandLess)<{ isLastSelected: boolean }>`
    ${getIconsStyles}
`;

export const StyledExpandMore = styled(ExpandMore)<{ isLastSelected: boolean }>`
    ${getIconsStyles}
`;

export const StyledFolder = styled(Folder)<{ isLastSelected: boolean }>`
    ${getIconsStyles}
`;

export const StyledListItemText = styled(ListItemText)<{ isLastSelected: boolean }>`
    color: ${({ isLastSelected }) =>
        isLastSelected ? allColors.folders.listItemText.selected : allColors.folders.listItemText.default};
`;
