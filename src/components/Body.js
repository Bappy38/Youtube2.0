import { useSelector } from "react-redux";
import BodyContainer from "../components/BodyContainer";
import Sidebar from "../components/Sidebar";

const Body = () => {

    const isSidebarOpen = useSelector((store) => store.config.isSidebarOpen);

    return (
        <div className="flex">
            {
                isSidebarOpen?
                (
                    <>
                        <Sidebar/>
                        <BodyContainer/>
                    </>
                )
                :
                (
                    <BodyContainer/>
                )
            }
        </div>
    );
}

export default Body;