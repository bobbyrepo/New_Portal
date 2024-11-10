import React, { useEffect, useState, ChangeEvent, KeyboardEvent } from 'react'
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { Divider, ButtonGroup, Button } from '@mui/material';

import { categories } from '../utils/constant';

function Navbar() {
    const navigate = useNavigate();
    const [search, setSearch] = useState("")

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }


    const handleKeyPress = (
        event: KeyboardEvent<HTMLInputElement> | React.MouseEvent<SVGSVGElement>
    ) => {
        // Check if the event is a KeyboardEvent
        if ("key" in event) {
            if (event.key === "Enter") {
                (event?.target as HTMLInputElement).blur();
                setSearch("")
                navigate(`/search`, { state: { category: `What We Found for "${search}"`, query: search } });
            }
        }
        // Check if the event is a MouseEvent
        else if ("buttons" in event) {
            navigate(`/search`, { state: { category: `What We Found for "${search}"`, query: search } });
        }

    };
    return (
        <div className="">

            <div className="bg-neutral-900 text-white">
                <div className='sm:w-[90%] w-[95%] mx-auto flex gap-2 items-center justify-between py-3'>
                    <div
                        onClick={() => navigate('/')}
                        className="flex md:text-2xl sm:text-xl text-lg cursor-pointer"
                    >
                        <h1 className='font-semibold'>NEWS</h1>
                        <h1 className='font-thin'>Daily</h1>
                    </div>
                    <div className="">

                        <div className="flex gap-2 items-center bg-black text-[#c2c2c2] 
                       sm:px-4 px-3 rounded-full"
                        >
                            <SearchIcon
                                onClick={handleKeyPress}
                                className='cursor-pointer'
                            />
                            <Divider orientation="vertical" variant="middle" flexItem sx={{ backgroundColor: "gray" }} />
                            <input
                                value={search}
                                placeholder="search"
                                className='bg-black md:w-[350px] sm:w-[300px] w-[180px] 
                            h-10  sm:text-lg text-md
                            placeholder:text-[#646464] outline-none'
                                onChange={handleChange}
                                // onClick={() => toggleShow(true)}
                                onKeyDown={handleKeyPress}
                                type="text" />
                        </div>
                    </div>
                </div>
            </div>

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
                        >
                            {item}
                        </Button>
                    ))
                }
            </ButtonGroup>

        </div>
    )
}

export default Navbar