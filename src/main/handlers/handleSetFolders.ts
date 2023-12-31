import { app, IpcMainInvokeEvent } from 'electron';
import storage from 'electron-json-storage';
import { IFolder } from '../../types';

export const handleSetFolders = (event: IpcMainInvokeEvent, data: IFolder[]) => {
    storage.setDataPath(`${app.getPath('documents')}/cards`);
    storage.set('data', data, (error: Error) => {
        if (error) throw error;
    });
};
