import { useElectronHandler } from "./hooks";

export const App = () => {
    // const setCards = useElectronHandler(window.electron.ipcRenderer.setCards, true, mockCards);
    const getCards = useElectronHandler(window.electron.ipcRenderer.getCards, true);
    console.log(getCards.data);
    
    return (
        <div>
            <h1>test</h1>
        </div>
    );
}