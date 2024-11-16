import React, { FC, useEffect, useState, ChangeEvent, KeyboardEvent } from 'react'
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { Divider, ButtonGroup, Button, Box, Typography, InputBase } from '@mui/material';

import { categories } from '../utils/constant';

const Navbar: FC = () => {

    const navigate = useNavigate();
    const [search, setSearch] = useState("")

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }


    const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            event.preventDefault();
            setSearch("");
            navigate(`/search`, { state: { category: `What We Found for "${search}"`, query: search } });
        }
    };

    const handleSearchIconClick = () => {
        setSearch("");
        navigate(`/search`, { state: { category: `What We Found for "${search}"`, query: search } });
    };

    return (
        <Box className="">
            {/* Header Section */}
            <Box className="bg-neutral-900 text-white">
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        width: { sm: '90%', xs: '95%' },
                        mx: 'auto',
                        py: 1,
                        gap: 2,
                    }}
                >
                    {/* Logo Section */}

                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            cursor: 'pointer',
                            fontSize: { md: '1.5rem', sm: '1.25rem', xs: '1rem' },
                        }}
                        onClick={() => navigate('/')}
                    >
                        <Typography variant="h1" sx={{ fontFamily: 'serif', fontWeight: 'bold', fontSize: 'inherit' }}>
                            NEWS
                        </Typography>
                        <Typography variant="h1" sx={{ fontFamily: 'serif', fontWeight: 'light', fontSize: 'inherit' }}>
                            Daily
                        </Typography>
                    </Box>

                    {/* Search Section */}
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            bgcolor: 'black',
                            color: '#c2c2c2',
                            px: { sm: 4, xs: 3 },
                            borderRadius: '999px',
                            gap: 2,
                        }}
                    >
                        <SearchIcon
                            onClick={handleSearchIconClick}
                            className='cursor-pointer'
                        />
                        <Divider orientation="vertical" variant="middle" flexItem sx={{ backgroundColor: "gray" }} />
                        <InputBase
                            value={search}
                            onChange={handleChange}
                            onKeyDown={handleKeyPress}
                            placeholder="Search"
                            sx={{
                                bgcolor: 'black',
                                width: { md: '350px', sm: '300px', xs: '180px' },
                                height: "2.5rem",
                                color: 'white',
                                fontSize: { sm: '1rem', xs: '0.875rem' },
                                fontFamily: 'serif',
                                '&::placeholder': { color: '#646464' },
                            }}
                        />
                    </Box>
                </Box>
            </Box>

            {/* <div className="flex items-center justify-evenly py-1 bg-neutral-800 text-white cursor-pointer">
                {
                    categories.map((item, ind) => (
                        <div key={ind} className="flex w-full hover:underline">

                            <Divider orientation="vertical" flexItem sx={{ backgroundColor: "gray" }} />

                            <h1 className='text-center w-full'> {item}</h1>

                            <Divider orientation="vertical" flexItem sx={{ backgroundColor: "gray" }} />

                        </div>
                    ))
                }
            </div> */}

            <ButtonGroup className='bg-neutral-800 w-full overflow-x-auto text-white rounded-none' variant="outlined" >
                {
                    categories.map((item, ind) => (
                        <Button
                            sx={{ fontSize: { xs: "12px", sm: "13px", md: "16px" }, mr: 1 }}
                            key={ind}
                            onClick={() => navigate('/explore', { state: { category: item } })}
                            className='min-w-fit w-full text-white hover:bg-neutral-900 border-none'
                        // sx={{
                        //     fontSize: { xs: '0.75rem', sm: '0.8125rem', md: '1rem' },
                        //     mr: 1,
                        //     minWidth: 'fit-content',
                        //     width: 'auto',
                        //     color: 'white',
                        //     '&:hover': { bgcolor: 'neutral.900' },
                        //     border: 'none',
                        // }}
                        >
                            {item}
                        </Button>
                    ))
                }
            </ButtonGroup>

        </Box >
    )
}

export default Navbar