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
            <div className="text-center">
                <span className="loading loading-spinner text-primary"></span>
                <span className="loading loading-spinner text-secondary"></span>
                <span className="loading loading-spinner text-accent"></span>
                <span className="loading loading-spinner text-neutral"></span>
                <span className="loading loading-spinner text-info"></span>
                <span className="loading loading-spinner text-success"></span>
                <span className="loading loading-spinner text-warning"></span>
                <span className="loading loading-spinner text-error"></span>
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