import { useEffect, useState } from "react";
import { API_KEY_PLACEHOLDER, GOOGLE_API_KEY, YOUTUBE_VIEO_API } from "../constants/ApiConstants";

const usePopularVideos = () => {

    const [ popularVideos, setPopularVideos ] = useState([]);

    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {

        const data = await fetch(
            YOUTUBE_VIEO_API
            .replace(API_KEY_PLACEHOLDER, GOOGLE_API_KEY)
        );

        const json = await data.json();
        setPopularVideos(json.items);
    }

    return popularVideos;
}

export default usePopularVideos;