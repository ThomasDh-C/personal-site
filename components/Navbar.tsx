import React from 'react';
const Navbar = () => {
    return (
        <nav className="flex items-center justify-between">
            <div className="prose">
                <a href="/" className="text-4xl font-bold no-underline">Thomas Dhome-Casanova</a>
            </div>
            <div className="flex">
                <a href="/experience" className="underline uppercase mr-4">Experience</a>
                <a href="/researchinterests" className="underline uppercase">Research Interests</a>
            </div>
        </nav>
    );
};

export default Navbar;
