import BodyContainer from "../components/BodyContainer";
import Sidebar from "../components/Sidebar";

const Body = () => {

    return (
        <div className="flex">
            <Sidebar/>
            <BodyContainer/>
        </div>
    );
}

export default Body;