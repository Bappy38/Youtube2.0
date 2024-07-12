import { Link } from "react-router-dom";
import VideoCard from "./VideoCard";
import VideoContainerShimmer from "./VideoContainerShimmer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { hideLoader, showLoader } from "../store/configSlice";
import { API_KEY_PLACEHOLDER, CATEGORY_ID_PLACEHOLDER, GOOGLE_API_KEY, PAGE_TOKEN_PLACEHOLDER, VIDEO_CATEGORY_ID_PARAMS, YOUTUBE_VIEO_API } from "../constants/ApiConstants";

const VideoContainer = () => {

    const isLoading = useSelector((store) => store.config.isLoading);
    const selectedCategoryId = useSelector((store) => store.config.selectedCategoryId);

    const dispatch = useDispatch();
    const loaderRef = useRef(null);

    const [ nextPageToken, setNextPageToken ] = useState('');
    const [ popularVideos, setPopularVideos ] = useState([]);

    const getVideos = async (isInitialFetch) => {

        dispatch(showLoader());

        try {
            const requestUrl = YOUTUBE_VIEO_API
                .replace(API_KEY_PLACEHOLDER, GOOGLE_API_KEY)
                .replace(PAGE_TOKEN_PLACEHOLDER, isInitialFetch? '' : nextPageToken)
                .replace(CATEGORY_ID_PLACEHOLDER, selectedCategoryId);

            const data = await fetch(requestUrl);
    
            const json = await data.json();

            isInitialFetch? setPopularVideos(json?.items ?? []) : setPopularVideos([...popularVideos, ...json.items]);
            setNextPageToken(json.nextPageToken);
        } catch (error) {
            console.error(error);
        } finally {
            dispatch(hideLoader());
        }
    }

    useEffect(() => {
        console.log('First page fetched');
        getVideos(true);
    }, [selectedCategoryId]);

    useEffect(() => {

        if (!loaderRef.current) {
            return;
        }

        const observer = new IntersectionObserver((entries) => {
            
            const target = entries[0];
            if (target.isIntersecting && nextPageToken) {
                console.log('Next page fetched');
                getVideos(false);
            }
        });

        if (loaderRef.current) {
            observer.observe(loaderRef.current);
        }

        return () => {

            if (loaderRef.current) {
                observer.unobserve(loaderRef.current);
            }
        };
    }, [getVideos]);

    return (
        <div className="flex flex-wrap ml-[7%]">
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