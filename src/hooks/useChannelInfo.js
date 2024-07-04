import { useEffect, useState } from "react"
import { API_KEY_PLACEHOLDER, CHANNEL_ID_PLACEHOLDER, GOOGLE_API_KEY, YOUTUBE_CHANNEL_API } from "../constants/AppConstants";

const useChannelInfo = (channelId) => {

    const [ subscriberCount, setSubscriberCount ] = useState({});

    useEffect(() => {

        if (channelId)
            fetchChannelInfo();
    }, [ channelId ]);

    const fetchChannelInfo = async () => {

        const data = await fetch(
            YOUTUBE_CHANNEL_API
            .replace(API_KEY_PLACEHOLDER, GOOGLE_API_KEY)
            .replace(CHANNEL_ID_PLACEHOLDER, channelId)
        );

        const json = await data.json();
        setSubscriberCount({
            channelTitle: json?.items[0]?.snippet?.title,
            logoUrl: json?.items[0]?.snippet?.thumbnails?.default?.url,
            subscriberCount: json?.items[0]?.statistics?.subscriberCount
        });
    }

    return subscriberCount;
}

export default useChannelInfo;