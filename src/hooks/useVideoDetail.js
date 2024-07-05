import { useEffect, useState } from "react";
import { API_KEY_PLACEHOLDER, GOOGLE_API_KEY, VIDEO_ID_PLACEHOLDER, YOUTUBE_VIDEO_DETAIL_API } from "../constants/ApiConstants";

const useVideoDetail = (videoId) => {

    const [ videoDetail, setVideoDetail ] = useState(null);

    useEffect(() => {
        fetchVideoDetail();
    }, []);

    const fetchVideoDetail = async () => {

        const data = await fetch(
            YOUTUBE_VIDEO_DETAIL_API
                .replace(API_KEY_PLACEHOLDER, GOOGLE_API_KEY)
                .replace(VIDEO_ID_PLACEHOLDER, videoId)
        );

        const json = await data.json();
        setVideoDetail(json.items[0]);
    }

    return videoDetail;
}

export default useVideoDetail;