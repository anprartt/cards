import { app } from 'electron';
import storage from 'electron-json-storage';
import { IFolder } from '../../types';

export const handleGetFolders = () => {
    return storage.getSync('data', {
        dataPath: `${app.getPath('documents')}/cards`,
    }) as IFolder[];
};
