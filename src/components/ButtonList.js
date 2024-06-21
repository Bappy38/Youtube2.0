import { useEffect, useRef, useState } from "react";
import { buttonNames } from "../constants/AppConstants";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";


const ButtonList = () => {

    const buttonContainerRef = useRef(null);

    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    useEffect(() => {

        const handleScroll = () => {

            const { scrollLeft, scrollWidth, clientWidth } = buttonContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
        }

        const container = buttonContainerRef.current;
        container.addEventListener('scroll', handleScroll);

        // Initial check
        handleScroll();

        // Destroying event listener
        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollLeft = () => {

        buttonContainerRef.current.scrollBy({ left: -150, behavior: 'smooth' });
    };

    const scrollRight = () => {
        buttonContainerRef.current.scrollBy({ left: 150, behavior: 'smooth' });
    };

    return (
        <div className="py-5 flex items-center justify-center mx-auto w-8/12">
            {canScrollLeft && 
                (
                    <button 
                        className="absolute left-20 bg-white border border-gray-300 p-2 cursor-pointer rounded-full hover:bg-gray-300" onClick={scrollLeft}
                    >
                        <FontAwesomeIcon icon={faLessThan} />
                   </button>
                )
            }

            <div className="flex overflow-x-hidden scroll-smooth" ref={buttonContainerRef}>
                {buttonNames.map(buttonName => (
                    <Button key={buttonName} name={buttonName}/>
                ))}
            </div>

            {canScrollRight && 
                (
                    <button 
                        className="absolute right-20 bg-white border border-gray-300 p-2 cursor-pointer rounded-full hover:bg-gray-300"
                        onClick={scrollRight}
                    >
                        <FontAwesomeIcon icon={faGreaterThan} />
                   </button>
                )
            }
        </div>
    );
}

export default ButtonList;