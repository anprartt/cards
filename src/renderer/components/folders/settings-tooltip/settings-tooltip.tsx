import { Tooltip } from '@mui/material';
import { FC, ReactElement, useContext, useEffect, useRef } from 'react';
import { StyledButton, TooltipContentBox } from './styles';
import { GlobalContext } from '../../../context/global-context';
import { IFolder } from '../../../../types';
import { generateId } from '../../../utils';

export const SettingsTooltip: FC<{
    children: ReactElement;
    selectedFoldersIds: string[];
    open: boolean;
    setCustomizingFolder: (folder: IFolder | undefined) => void;
    customizingFolder: IFolder | undefined;
}> = ({ children, setCustomizingFolder, open, selectedFoldersIds, customizingFolder }) => {
    const { folders, updateFolders } = useContext(GlobalContext);
    const tooltipRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onClose = (e: globalThis.MouseEvent) => {
            if (tooltipRef.current !== e.target && !tooltipRef.current?.contains(e.target as any)) {
                setCustomizingFolder(undefined);
            }
        };

        window.addEventListener('click', onClose);
        return () => window.removeEventListener('click', onClose);
    }, []);

    const handleCreateFolder = () => {
        customizingFolder.folders.push({
            id: generateId(),
            name: 'New Folder',
            cards: [],
            folders: [],
        });
        updateFolders(folders);
    };

    const handleCreateCard = () => {
        const date = new Date();

        customizingFolder.cards.push({
            id: generateId(),
            front: '',
            back: '',
            created: new Date(date.setHours(date.getHours() - 3)).toString(),
            history: [],
        });
        updateFolders(folders);
    };

    return (
        <Tooltip
            open={open}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            title={
                <TooltipContentBox>
                    <StyledButton size="small" onClick={handleCreateFolder}>
                        Create folder
                    </StyledButton>
                    <StyledButton disabled size="small">
                        Rename folder
                    </StyledButton>
                    <StyledButton disabled size="small">
                        Remove folder
                    </StyledButton>
                    <StyledButton size="small" onClick={handleCreateCard}>
                        Create card
                    </StyledButton>
                </TooltipContentBox>
            }
            slotProps={{
                popper: {
                    ref: tooltipRef,
                    modifiers: [{ name: 'offset', options: { offset: [0, -90] } }],
                },
            }}
            placement="right-start"
            PopperProps={{
                disablePortal: true,
            }}
        >
            {children}
        </Tooltip>
    );
};
