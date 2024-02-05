import React from 'react';
const Skill = ({skill}: {skill: string}) => {
    return (
        <div className='border border-gray-300 rounded-lg px-2'>
            <p className='text-xs my-0'>{skill}</p>
        </div>
    );
};

export default Skill;
