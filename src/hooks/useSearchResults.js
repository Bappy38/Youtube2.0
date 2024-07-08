import { useEffect, useState } from "react"
import { API_KEY_PLACEHOLDER, GOOGLE_API_KEY, SEARCH_QUERY_PLACEHOLDER, YOUTUBE_SEARCH_RESULT } from "../constants/ApiConstants";


const useSearchResults = (searchQuery) => {

    const [ searchResults, setSearchResults ] = useState([]);

    useEffect(() => {
        fetchVideos();
    }, [searchQuery]);

    const fetchVideos = async () => {
        
        const data = await fetch(
            YOUTUBE_SEARCH_RESULT
            .replace(API_KEY_PLACEHOLDER, GOOGLE_API_KEY)
            .replace(SEARCH_QUERY_PLACEHOLDER, searchQuery)
        );
        const json = await data.json();
        setSearchResults(json.items);
    }

    return searchResults;
}

export default useSearchResults;