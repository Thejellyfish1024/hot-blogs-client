/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";


const PrivateRoute = ({ children }) => {
    // console.log(children);
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();

    if (loading) {
        return (
            <div className="text-center min-h-screen">
                <span className="loading loading-spinner text-primary"></span>
            </div>
        );
    }
    if (user) {
        return children;
    }
    return (
        <div>
            {
                toast.error('Please login first')
            }
            <Navigate state={location?.pathname} to="/login"></Navigate>
        </div>
    );
};

export default PrivateRoute;