import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "./Header";

const Body = () => {

    return (
        <div className="">
            <Header/>
            <Sidebar/>
            <Outlet/>
        </div>
    );
}

export default Body;