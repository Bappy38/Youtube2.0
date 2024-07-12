import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "./Header";
import ScrollToTop from "./ScrollToTop";

const Body = () => {

    return (
        <div className="">
            <Header/>
            <Sidebar/>
            <ScrollToTop/>
            <Outlet/>
        </div>
    );
}

export default Body;