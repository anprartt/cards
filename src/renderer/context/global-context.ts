import { createContext, useEffect, useMemo, useState } from 'react';
import { IFolder } from '../../types';
import { useElectronHandler } from '../hooks';

export interface IGlobalContext {
    folders: IFolder[];
    updateFolders: (folders: IFolder[]) => void;
}

export const GlobalContext = createContext<IGlobalContext>({
    folders: [],
    updateFolders: (folders: IFolder[]) => null,
});

export const useGlobalContext = () => {
    const main = {
        setFolders: useElectronHandler(window.electron.ipcRenderer.setFolders),
        getFolders: useElectronHandler(window.electron.ipcRenderer.getFolders),
    };

    const [folders, setFolders] = useState<IFolder[]>([]);

    useEffect(() => main.getFolders.call(), []);

    useEffect(() => {
        if (!main.getFolders.isLoading && main.getFolders.data) {
            setFolders(main.getFolders.data);
        }
    }, [main.getFolders.isLoading]);

    const updateFolders = (folders: IFolder[]) => {
        main.setFolders.call(folders);
        setFolders(folders);
    };

    return useMemo(() => ({ folders, updateFolders }), [folders]);
};
