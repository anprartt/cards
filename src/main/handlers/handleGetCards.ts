import { app } from 'electron';
import storage from 'electron-json-storage';
import { ICardData } from '../../types/cards';

export const handleGetCards = () => {
  console.log('aaa');
  return storage.getSync('cardsData', {
    dataPath: `${app.getPath('documents')}/cards/storage`,
  }) as ICardData;
};
