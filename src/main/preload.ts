// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import { contextBridge } from 'electron';

const preloadHandler = {
  ipcRenderer: {
  },
};

contextBridge.exposeInMainWorld('electron', preloadHandler);

export type ElectronHandler = typeof preloadHandler;
