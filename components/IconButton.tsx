interface IconButtonProps {
    imageSrc: string;
    imageAlt: string;
    buttonUrl: string;

}

const IconButton = ({ imageSrc, imageAlt, buttonUrl }: IconButtonProps) => {
    return (
        <a href={buttonUrl} target="_blank" rel="noopener noreferrer">
            <button className="mr-2 rounded-lg p-2 shadow-md bg-white hover:shadow-lg focus:outline-none focus:ring focus:border-blue-300">
                <img src={imageSrc} alt={imageAlt} className="w-6 h-6" />
            </button>
        </a>
    );
};

export default IconButton;