import React from 'react';
import { useNavigate } from "react-router-dom";

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface HeaderSectionProps {
    title: string;
    children: React.ReactNode;
}

function HeaderSection({ title, children }: HeaderSectionProps) {
    const navigate = useNavigate();

    return (
        <div className="lg:mt-10 md:mt-6 mt-4">
            <div className="flex mb-2 justify-between">
                <h1 className="md:text-3xl sm:text-2xl text-2xl font-serif cursor-pointer">{title}</h1>
                <button className="flex gap-1 items-center md:text-lg text-md hover:underline underline-offset-2"
                    onClick={() => navigate('/explore', { state: { category: title } })}
                >
                    See All
                    <ArrowForwardIcon className="md:text-xl text-lg" />
                </button>
            </div>
            {children}
        </div >
    );
}

export default HeaderSection;