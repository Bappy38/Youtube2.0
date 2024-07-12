export const YOUTUBE_VIEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=24&regionCode=BD&key=[YOUR_API_KEY]&pageToken=[PAGE_TOKEN]&videoCategoryId=[CATEGORY_ID]";
export const YOUTUBE_VIDEO_CATEGORY_API = "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=BD&key=[YOUR_API_KEY]";
export const YOUTUBE_VIDEO_DETAIL_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=[VIDEO_ID]&key=[YOUR_API_KEY]";
export const YOUTUBE_COMMENTS_API = "https://www.googleapis.com/youtube/v3/commentThreads?key=[YOUR_API_KEY]&textFormat=plainText&part=snippet%2Creplies&videoId=[VIDEO_ID]&maxResults=50";
export const YOUTUBE_SEARCH_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=[QUERY]&key=[YOUR_API_KEY]";
export const YOUTUBE_CHANNEL_API = "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=[CHANNEL_ID]&key=[YOUR_API_KEY]";
export const YOUTUBE_SEARCH_SUGGESTIONS_API = "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=[QUERY]";
export const YOUTUBE_SEARCH_SUGGESTIONS_API_2 = "https://clients1.google.com/complete/search?client=youtube&gs_ri=youtube&ds=yt&q=[QUERY]"
export const YOUTUBE_SEARCH_RESULT = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=[SEARCH_QUERY]&key=[YOUR_API_KEY]&maxResults=50";

export const VIDEO_CATEGORY_ID_PARAMS = "videoCategoryId";

export const API_KEY_PLACEHOLDER = "[YOUR_API_KEY]";
export const QUERY_PLACEHOLDER = "[QUERY]";
export const VIDEO_ID_PLACEHOLDER = "[VIDEO_ID]"
export const CHANNEL_ID_PLACEHOLDER = "[CHANNEL_ID]";
export const SEARCH_QUERY_PLACEHOLDER = "[SEARCH_QUERY]";
export const PAGE_TOKEN_PLACEHOLDER = "[PAGE_TOKEN]";
export const CATEGORY_ID_PLACEHOLDER = "[CATEGORY_ID]";

export const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export const API_OPTIONS = 
{
    mode: 'no-cors',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
};