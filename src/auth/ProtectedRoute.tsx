import { PropsWithChildren, useEffect } from "react"
import { useAuth } from "./AuthProvider";
import { useNavigate } from "react-router-dom";

type ProtectedRouteProps = PropsWithChildren;

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        console.log("checking user in ProtectedRoute: " + JSON.stringify(user))
        if (user === null || user === undefined) {
            navigate('/signIn', { replace: true });
        }
    }, [user, navigate]);

    return children;
}

export default ProtectedRoute;