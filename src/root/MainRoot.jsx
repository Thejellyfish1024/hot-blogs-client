import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";


const MainRoot = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Toaster></Toaster>
        </div>
    );
};

export default MainRoot;