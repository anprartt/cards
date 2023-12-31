import { MainPage } from './pages/main-page';
import { GlobalContext, useGlobalContext } from './context/global-context';

export const App = () => {
    return (
        <GlobalContext.Provider value={useGlobalContext()}>
            <MainPage />
        </GlobalContext.Provider>
    );
};
