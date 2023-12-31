import { IconButton } from '@mui/material';
import { Box } from './styles';

export const BackButton = () => {
    return (
        <Box>
            <IconButton size={'small'}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Iconly/Light/Arrow - Left">
                        <g id="Arrow - Left">
                            <path
                                id="Stroke 1"
                                d="M3.1875 9.20703L14.4375 9.20703"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                            <path
                                id="Stroke 3"
                                d="M7.72461 13.7243L3.18711 9.20625L7.72461 4.6875"
                                stroke="white"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </g>
                    </g>
                </svg>
            </IconButton>
        </Box>
    );
};
