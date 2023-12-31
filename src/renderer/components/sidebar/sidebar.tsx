import { FC } from 'react';
import { Box } from './styles';
import { Logo } from './logo';
import { Folders } from '../folders';

export const Sidebar: FC = () => {
    return (
        <Box>
            <Logo />
            <Folders />
        </Box>
    );
};
