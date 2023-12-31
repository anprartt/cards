import { Typography } from '@mui/material';
import { Box } from './styles';

export const Logo = () => {
    return (
        <Box>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <rect
                    x="-0.757812"
                    y="19.2422"
                    width="28"
                    height="4"
                    rx="2"
                    transform="rotate(-45 -0.757812 19.2422)"
                    fill="#3A57E8"
                />
                <rect
                    x="7.72656"
                    y="27.7266"
                    width="28"
                    height="4"
                    rx="2"
                    transform="rotate(-45 7.72656 27.7266)"
                    fill="#3A57E8"
                />
                <rect
                    x="10.5352"
                    y="16.3945"
                    width="16"
                    height="4"
                    rx="2"
                    transform="rotate(45 10.5352 16.3945)"
                    fill="#3A57E8"
                />
                <rect
                    x="10.5566"
                    y="-0.554688"
                    width="28"
                    height="4"
                    rx="2"
                    transform="rotate(45 10.5566 -0.554688)"
                    fill="#3A57E8"
                />
            </svg>
            <Typography fontWeight={500} fontFamily={'Inter'} variant="h4">
                Cards
            </Typography>
        </Box>
    );
};
