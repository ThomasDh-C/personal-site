import React from 'react';

const MarkdownListItem = ({ text }: { text: string }) => {
    const regex = /\[(.*?)\]\((.*?)\)/g;
    const modifiedText = text.replace(regex, '<a href="$2">$1</a>');
    return (
        <li className='my-1 leading-normal' dangerouslySetInnerHTML={{ __html: modifiedText }} />
    );
};

export default MarkdownListItem;
