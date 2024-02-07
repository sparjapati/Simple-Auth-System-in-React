import { PropsWithChildren, useEffect } from "react"
import { useAuth } from "./AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { ROOT_PATH } from "../routers";

export const REDIRECT_PARAM_KEY = "rdUrl";

type ProtectedRouteProps = PropsWithChildren;

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (user === null || user === undefined) {
            const completeLocation = `${location.pathname}${location.search}`
            if (completeLocation !== ROOT_PATH) {
                navigate(`/signIn?${REDIRECT_PARAM_KEY}=${completeLocation}`, { replace: true });
            }
            else {
                navigate('/signIn', { replace: true });
            }
        }
    }, [user, navigate]);

    return children;
}

export default ProtectedRoute;