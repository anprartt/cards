import { FC } from 'react';
import { Sidebar } from '../../components/sidebar';
import { Header } from '../../components/header';
import { Box, MainBox, ContentBox } from './styles';

export const MainPage: FC = () => {
    return (
        <MainBox>
            <Sidebar />
            <Box>
                <Header />
                <ContentBox>Content</ContentBox>
            </Box>
        </MainBox>
    );
};
