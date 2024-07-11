import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
import VideoContainerShimmer from "./VideoContainerShimmer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { hideLoader, showLoader } from "../store/configSlice";
import { API_KEY_PLACEHOLDER, GOOGLE_API_KEY, PAGE_TOKEN_PLACEHOLDER, YOUTUBE_VIEO_API } from "../constants/ApiConstants";

const VideoContainer = () => {

    const isLoading = useSelector((store) => store.config.isLoading);

    const dispatch = useDispatch();
    const loaderRef = useRef(null);

    const [ nextPageToken, setNextPageToken ] = useState('');
    const [ popularVideos, setPopularVideos ] = useState([]);

    useEffect(() => {
        getVideos();
    }, []);

    useEffect(() => {

        if (!loaderRef.current) {
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            
            const target = entries[0];
            if (target.isIntersecting && nextPageToken) {
                getVideos();
            }
        });

        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        return () => {

            if (loaderRef.current) {
                observer.unobserve(loaderRef.current);
            }
        }
    }, [ nextPageToken ]);

    const getVideos = async () => {

        dispatch(showLoader());

        try {
            const data = await fetch(
                YOUTUBE_VIEO_API
                .replace(API_KEY_PLACEHOLDER, GOOGLE_API_KEY)
                .replace(PAGE_TOKEN_PLACEHOLDER, nextPageToken)
            );
    
            const json = await data.json();
            setPopularVideos([...popularVideos, ...json.items]);
            setNextPageToken(json.nextPageToken);
        } catch (error) {
            console.error(error);
        } finally {
            dispatch(hideLoader());
        }
    }

    return (
        <div className="flex flex-wrap ml-[15%]">
            {popularVideos.map(video => (
                <Link
                    key={video.id}
                    to={ `watch?v=${video.id}` }
                >
                    <VideoCard video={video}/>
                </Link>
            ))}
            <div ref={loaderRef}>{isLoading  && <VideoContainerShimmer/>}</div>
        </div>
    );
}

export default VideoContainer;