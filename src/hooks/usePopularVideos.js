import { useEffect, useState } from "react";
import { API_KEY_PLACEHOLDER, GOOGLE_API_KEY, YOUTUBE_VIEO_API } from "../constants/ApiConstants";
import { useDispatch } from "react-redux";
import { hideLoader, showLoader } from "../store/configSlice";

const usePopularVideos = () => {

    const [ popularVideos, setPopularVideos ] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {

        dispatch(showLoader());

        try {
            const data = await fetch(
                YOUTUBE_VIEO_API
                .replace(API_KEY_PLACEHOLDER, GOOGLE_API_KEY)
            );
    
            const json = await data.json();
            setPopularVideos(json.items);
        } catch (error) {
            console.error(error);
        } finally {
            dispatch(hideLoader());
        }
    }

    return popularVideos;
}

export default usePopularVideos;