import { useEffect, useState } from "react"
import { API_KEY_PLACEHOLDER, GOOGLE_API_KEY, VIDEO_ID_PLACEHOLDER, YOUTUBE_COMMENTS_API } from "../constants/AppConstants";


const useComments = (videoId) => {

    const [ comments, setComments ] = useState([]);

    useEffect(() => {
        fetchComments();
    }, [ videoId ]);

    const fetchComments = async () => {

        const data = await fetch(
            YOUTUBE_COMMENTS_API
            .replace(API_KEY_PLACEHOLDER, GOOGLE_API_KEY)
            .replace(VIDEO_ID_PLACEHOLDER, videoId)
        );

        const json = await data.json();
        setComments(json.items);
    }

    return comments;
}

export default useComments;