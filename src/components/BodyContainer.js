import { useDispatch } from "react-redux";
import VideoContainer from "../components/VideoContainer";
import { useEffect } from "react";
import { closeSidebar } from "../store/configSlice";
import CategoryList from "./CategoryList";

const BodyContainer = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        
        dispatch(closeSidebar());
    }, []);

    return (
        <div className="pt-16">
            <CategoryList/>
            <VideoContainer/>
        </div>
    );
}

export default BodyContainer;