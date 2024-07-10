import { useEffect, useState } from "react";
import { API_KEY_PLACEHOLDER, GOOGLE_API_KEY, VIDEO_ID_PLACEHOLDER, YOUTUBE_VIDEO_DETAIL_API } from "../constants/ApiConstants";
import { useDispatch } from "react-redux";
import { hideLoader, showLoader } from "../store/configSlice";

const useVideoDetail = (videoId) => {

    const [ videoDetail, setVideoDetail ] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        fetchVideoDetail();
    }, []);

    const fetchVideoDetail = async () => {

        try {
            dispatch(showLoader());
            const data = await fetch(
                YOUTUBE_VIDEO_DETAIL_API
                    .replace(API_KEY_PLACEHOLDER, GOOGLE_API_KEY)
                    .replace(VIDEO_ID_PLACEHOLDER, videoId)
            );
    
            const json = await data.json();
            setVideoDetail(json.items[0]);
        } catch (error) {
            console.error(error);
        } finally {
            dispatch(hideLoader());
        }
    }

    return videoDetail;
}

export default useVideoDetail;