import { useEffect, useState } from "react"
import { API_KEY_PLACEHOLDER, GOOGLE_API_KEY, YOUTUBE_VIDEO_CATEGORY_API } from "../constants/ApiConstants";
import { AllVideoCategory } from "../constants/AppConstants";


const useVideoCategories = () => {

    const [ videoCategories, setVideoCategories ] = useState([]);

    useEffect(() => {
        fetchVideoCategories();
    }, []);

    const fetchVideoCategories = async () => {

        const data = await fetch(
            YOUTUBE_VIDEO_CATEGORY_API
                .replace(API_KEY_PLACEHOLDER, GOOGLE_API_KEY)
        );

        const json = await data.json();
        setVideoCategories([...[AllVideoCategory], ...json.items]);
    }

    return videoCategories;
}

export default useVideoCategories;