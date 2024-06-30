import fetchJsonp from "fetch-jsonp";
import { useEffect, useState } from "react"
import { API_KEY_PLACEHOLDER, API_OPTIONS, GOOGLE_API_KEY, QUERY_PLACEHOLDER, YOUTUBE_SEARCH_SUGGESTIONS_API } from "../constants/AppConstants";
import { useDispatch, useSelector } from "react-redux";
import { cacheSearchSuggestion } from "../store/searchSlice";


const useSearchSuggestions = (searchQuery) => {

    const [ suggestion, setSuggestion ] = useState([]);

    const cachedSuggestion = useSelector((store) => store.search);
    const dispatch = useDispatch();

    useEffect(() => {

        const timer = setTimeout(() => {

            if (cachedSuggestion[searchQuery]) {
                setSuggestion(cachedSuggestion[searchQuery]);
            } else {
                getSearchSuggestion();
            }

        }, 200);

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
        setSuggestion(json[1]);
        dispatch(cacheSearchSuggestion({
            [searchQuery]: json[1]
        }));
    }

    return suggestion;
}

export default useSearchSuggestions;