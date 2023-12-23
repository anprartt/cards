// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import { contextBridge, ipcRenderer } from 'electron';
import { ICardData } from '../types';
import { SET_CARDS, GET_CARDS } from './constants';

const handler = {
    ipcRenderer: {
        setCards: (data: ICardData) => ipcRenderer.invoke(SET_CARDS, data) as Promise<undefined>,
        getCards: () => ipcRenderer.invoke(GET_CARDS) as Promise<ICardData>,
    },
};

contextBridge.exposeInMainWorld('electron', handler);

export type PreloadHandler = typeof handler;
