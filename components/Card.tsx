interface CardProps {
    imageSrc: string;
    imageAlt: string;
    logo1Src: string;
    logo1Alt: string;
    logo2Src: string;
    logo2Alt: string;
    title: string;
    text: string;
}

const Card = ({ imageSrc, imageAlt, logo1Src, logo1Alt, logo2Src, logo2Alt, title, text }: CardProps) => {
    return (
        <div className="border border-gray-200 p-4 rounded-lg w-full">
            <div className="flex gap-4 flex-col xs:flex-row">
                <div className="flex-1">
                    <img src={imageSrc} alt={imageAlt} className="rounded-lg" />
                </div>
                <div className="flex-1 mt-auto">
                    <div className="flex justify-start mb-4">
                        <img src={logo1Src} alt={logo1Alt} className="h-6 mr-4" />
                        <img src={logo2Src} alt={logo2Alt} className="h-6" />
                    </div>
                    <div className="prose">
                        <h2 className="mb-2 leading-5">{title}</h2>
                        <p className="leading-normal sm:hidden lg:block">{text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;