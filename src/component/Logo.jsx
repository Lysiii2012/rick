import logo from "../PngItem.png"
import { NavLink, useLocation } from "react-router-dom";

const Logo = () => {
    const location = useLocation();
    
    if (location.pathname === "/") {
        return (
            <NavLink className="Link_logo" to="/">
              <img className="logo_content" src={logo} alt="" />
            </NavLink>
        )
    }
    return null;
}

export default Logo;





