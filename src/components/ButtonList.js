import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGreaterThan, faLessThan } from "@fortawesome/free-solid-svg-icons";
import useVideoCategories from "../hooks/useVideoCategories";
import { useSelector } from "react-redux";
import ButtonListShimmer from "./ButtonListShimmer";


const ButtonList = () => {

    const buttonContainerRef = useRef(null);
    const videoCategories = useVideoCategories();

    const isLoading = useSelector((store) => store.config.isLoading);

    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    useEffect(() => {

        if (!buttonContainerRef || !buttonContainerRef.current)
            return;

        const handleScroll = () => {

            const { scrollLeft, scrollWidth, clientWidth } = buttonContainerRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
        }

        const container = buttonContainerRef.current;
        container.addEventListener('scroll', handleScroll);

        handleScroll();

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

    if (isLoading)
        return <ButtonListShimmer/>

    if (!videoCategories || videoCategories.length === 0)
        return null;

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
                {videoCategories.map(category => (
                    <Button
                        key={category.id}
                        id={category.id}
                        name={category?.snippet?.title}
                    />
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