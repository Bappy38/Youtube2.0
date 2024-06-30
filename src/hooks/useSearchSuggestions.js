import fetchJsonp from "fetch-jsonp";
import { useEffect, useState } from "react"
import { API_KEY_PLACEHOLDER, API_OPTIONS, GOOGLE_API_KEY, QUERY_PLACEHOLDER, YOUTUBE_SEARCH_SUGGESTIONS_API } from "../constants/AppConstants";


const useSearchSuggestions = (searchQuery) => {

    const [ searchSuggestion, setSearchSuggestion ] = useState([]);

    useEffect(() => {
        
        const timer = setTimeout(() => getSearchSuggestion(), 200);

        return () => {
            clearTimeout(timer);
        }
    }, [searchQuery]);

    const getSearchSuggestion = async () => {

        const data = await fetchJsonp(
            YOUTUBE_SEARCH_SUGGESTIONS_API
                .replace(API_KEY_PLACEHOLDER, GOOGLE_API_KEY)
                .replace(QUERY_PLACEHOLDER, searchQuery), 
                API_OPTIONS
            );
        const json = await data.json();
        setSearchSuggestion(json[1]);
    }

    return searchSuggestion;
}

export default useSearchSuggestions;