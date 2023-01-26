import { Outlet, useLocation } from "react-router-dom";
import { FullSceenCard } from "../../components/FullScreenCard";
import { Link } from "../../components/Link";

export function AuthLayout() {
    const location = useLocation();
    const isLoginPage = location.pathname === "/login";

    return (
        <FullSceenCard>
            <FullSceenCard.Body>
                <Outlet />
            </FullSceenCard.Body>
            <FullSceenCard.BelowCard>
                <Link to={isLoginPage ? "/signup" : "/login"}>
                    {isLoginPage
                        ? "Create Account"
                        : "Already have an account? Login"}
                </Link>
            </FullSceenCard.BelowCard>
        </FullSceenCard>
    );
}
