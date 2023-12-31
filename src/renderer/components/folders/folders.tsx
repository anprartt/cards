import React, { FC, MouseEvent, useContext, useState } from 'react';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import {
    ListTitle,
    StyledExpandLess,
    StyledExpandMore,
    StyledFolder,
    StyledList,
    StyledListButton,
    StyledListItemIcon,
    StyledListItemText,
} from './styles';
import { FolderProps } from './types';
import { SettingsTooltip } from './settings-tooltip';
import { IFolder } from '../../../types';
import { GlobalContext } from '../../context/global-context';

export const Folders: FC<FolderProps> = () => {
    const { folders } = useContext(GlobalContext);

    const [selectedFoldersIds, setSelectedFoldersIds] = React.useState<string[]>([]);
    const [customizingFolder, setCustomizingFolder] = useState<IFolder>();

    const handleSelect = (id: string, depth: number) => () => {
        if (selectedFoldersIds[depth]) {
            const updatedFolders = selectedFoldersIds.slice(0, depth);
            updatedFolders[depth] = id;

            setSelectedFoldersIds(updatedFolders.filter((el) => el));
        } else {
            setSelectedFoldersIds([...selectedFoldersIds.filter((el) => el), id]);
        }
    };

    const handleOpenSettingsTooltip = (folder: IFolder) => (e: MouseEvent) => {
        // handling only right button clicks
        if (e.button !== 2) return;
        setCustomizingFolder(folder);
    };

    const renderList = (folder: IFolder, depth: number) => {
        const isSelected = selectedFoldersIds?.includes(folder.id);
        const isNested = Boolean(+folder.folders?.length);
        const isLastSelected = isSelected && !selectedFoldersIds[depth + 1];

        return (
            <React.Fragment key={folder.id}>
                <SettingsTooltip
                    selectedFoldersIds={selectedFoldersIds}
                    open={customizingFolder?.id === folder.id}
                    customizingFolder={customizingFolder}
                    setCustomizingFolder={setCustomizingFolder}
                >
                    <StyledListButton
                        isLastSelected={isLastSelected}
                        isNested={isNested}
                        depth={depth}
                        onClick={handleSelect(folder.id, depth)}
                        onMouseDown={handleOpenSettingsTooltip(folder)}
                    >
                        {isNested &&
                            (isSelected ? (
                                <StyledExpandLess isLastSelected={isLastSelected} />
                            ) : (
                                <StyledExpandMore isLastSelected={isLastSelected} />
                            ))}
                        <StyledListItemIcon>
                            <StyledFolder isLastSelected={isLastSelected} />
                        </StyledListItemIcon>
                        <StyledListItemText isLastSelected={isLastSelected} primary={folder.name} />
                    </StyledListButton>
                </SettingsTooltip>
                {isNested && (
                    <Collapse in={isSelected} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {folder.folders?.map((childFolder) => renderList(childFolder, depth + 1))}
                        </List>
                    </Collapse>
                )}
            </React.Fragment>
        );
    };

    return (
        <StyledList subheader={<ListTitle>Folders</ListTitle>}>
            {folders.map((folder) => renderList(folder, 0))}
        </StyledList>
    );
};
