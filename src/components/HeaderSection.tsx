import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

interface HeaderSectionProps {
    title: string;
    children: React.ReactNode;
}

function HeaderSection({ title, children }: HeaderSectionProps) {
    return (
        <div className="mt-10">
            <div className="flex mb-2 justify-between">
                <h1 className="text-3xl font-serif cursor-pointer">{title}</h1>
                <button className="flex gap-1 items-center hover:underline underline-offset-2">
                    See All
                    <ArrowForwardIcon className="text-xl" />
                </button>
            </div>
            {children}
        </div>
    );
}

export default HeaderSection;