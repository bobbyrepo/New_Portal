import React from 'react';
import { useNavigate } from "react-router-dom";

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Typography, Button } from '@mui/material';

interface HeaderSectionProps {
    title: string;
    children: React.ReactNode;
}

function HeaderSection({ title, children }: HeaderSectionProps) {
    const navigate = useNavigate();

    return (
        <Box sx={{ mt: { lg: 4, md: 3, xs: 2 } }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography
                    variant="h1"
                    onClick={() => navigate('/explore', { state: { category: title } })}
                    sx={{
                        fontSize: { md: '2.25rem', xs: '1.5rem' },
                        fontFamily: 'serif',
                        cursor: 'pointer',
                    }}
                >
                    {title}
                </Typography>
                {/* <button className="flex gap-1 items-center md:text-lg text-md hover:underline underline-offset-2"
                    onClick={() => navigate('/explore', { state: { category: title } })}
                >
                    See All
                    <ArrowForwardIcon className="md:text-xl text-lg" />
                </button> */}
                <Button
                    variant="text"
                    onClick={() => navigate('/explore', { state: { category: title } })}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        fontSize: {
                            lg: '1rem',
                            md: '0.875rem',
                            xs: '0.8rem',
                        },
                        color: 'black', // Text color set to black
                        '&:hover': {
                            textDecoration: 'underline',
                            textUnderlineOffset: '2px',
                        },
                    }}
                >
                    See All
                    <ArrowForwardIcon sx={{ fontSize: { md: '1.25rem', xs: '1rem' } }} />
                </Button>
            </Box>
            {children}
        </Box>
    );
}

export default HeaderSection;