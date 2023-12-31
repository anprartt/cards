// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import { contextBridge, ipcRenderer } from 'electron';
import { IFolder } from '../types';
import { SET_FOLDERS, GET_FOLDERS } from './constants';

const handler = {
    ipcRenderer: {
        setFolders: (folders: IFolder[]) => ipcRenderer.invoke(SET_FOLDERS, folders) as Promise<undefined>,
        getFolders: () => ipcRenderer.invoke(GET_FOLDERS) as Promise<IFolder[]>,
    },
};

contextBridge.exposeInMainWorld('electron', handler);

export type PreloadHandler = typeof handler;
