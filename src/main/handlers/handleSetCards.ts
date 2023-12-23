import { app, IpcMainInvokeEvent } from 'electron';
import storage from 'electron-json-storage';
import { ICardData } from '../../types/cards';

export const handleSetCards = (event: IpcMainInvokeEvent, data: ICardData) => {
  storage.setDataPath(`${app.getPath('documents')}/cards/storage`);
  storage.set('cardsData', data, (error: Error) => {
    if (error) throw error;
  });
};
