import { useDispatch } from "react-redux";
import ButtonList from "../components/ButtonList";
import VideoContainer from "../components/VideoContainer";
import { useEffect } from "react";
import { closeSidebar } from "../store/configSlice";

const BodyContainer = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        
        dispatch(closeSidebar());
    }, []);

    return (
        <div className="pt-16">
            <ButtonList/>
            <VideoContainer/>
        </div>
    );
}

export default BodyContainer;