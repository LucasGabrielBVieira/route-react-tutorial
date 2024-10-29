/* eslint-disable @typescript-eslint/no-explicit-any */
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";


function QueryLink({ to, ...props }: any) {

    const location = useLocation();
    return <NavLink to={to + location.search} {...props} />

}

export default QueryLink