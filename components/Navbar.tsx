import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="flex items-center justify-between bg-gray-800 py-4 px-6">
            <div className="text-white font-bold text-lg">Thomas Dhome-Casanova</div>
            <div className="flex items-center space-x-4">
                <a href="#" className="text-white uppercase hover:text-gray-300 underline">Projects</a>
                <a href="#" className="text-white uppercase hover:text-gray-300 underline">Research Interests</a>
            </div>
        </nav>
    );
};

export default Navbar;
