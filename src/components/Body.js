import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Body = () => {

    return (
        <div className="">
            <Sidebar/>
            <Outlet/>
        </div>
    );
}

export default Body;