import React, { ReactNode } from 'react';

interface CustomListItemProps {
    imageSrc: string;
    imageAlt: string;
    text: string;
}

const CustomListItem = ({ imageSrc, imageAlt, text }: CustomListItemProps) => {
    return (
        <div className="flex py-1">
            <div className="w-10">
                <img src={imageSrc} alt={imageAlt} className="h-6 mx-auto" />
            </div>
            <p className="text-left prose w-full">{text}</p>
        </div>
    );
};

export default CustomListItem;