import { useEffect, useState } from "react";
import { API_KEY_PLACEHOLDER, CATEGORY_ID_PLACEHOLDER, GOOGLE_API_KEY, PAGE_TOKEN_PLACEHOLDER, YOUTUBE_VIEO_API } from "../constants/ApiConstants";

const useRelatedVideos = (categoryId) => {

    const [ relatedVideos, setRelatedVideos ] = useState([]);

    useEffect(() => {
        getVideos();
    }, [categoryId]);

    const getVideos = async () => {

        const data = await fetch(
            YOUTUBE_VIEO_API
            .replace(API_KEY_PLACEHOLDER, GOOGLE_API_KEY)
            .replace(PAGE_TOKEN_PLACEHOLDER, '')
            .replace(CATEGORY_ID_PLACEHOLDER, categoryId)
        );

        const json = await data.json();
        setRelatedVideos(json?.items);
    }

    return relatedVideos;
}

export default useRelatedVideos;