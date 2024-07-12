import { Link, useSearchParams } from "react-router-dom";
import useSearchResults from "../hooks/useSearchResults";
import SearchResult from "./SearchResult";
import CategoryList from "./CategoryList";

const SearchResults = () => {

    const [ params ] = useSearchParams();
    const search_query = params.get('search_query');

    const searchResults = useSearchResults(search_query);

    if (!searchResults)
        return null;

    return (
        <div className="pt-16">
            <CategoryList/>
            <div className="">
                {searchResults.map(video => (
                    <Link
                        key={video.id.videoId}
                        to={ `/watch?v=${video.id.videoId}` }
                    >
                        <SearchResult video={video}/>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default SearchResults;