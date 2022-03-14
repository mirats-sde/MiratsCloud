import { Link } from "react-router-dom";
import "./SideNavigation.css"

function SideNavigation({ sidebarLink }) {
  return (
    <div className="side-navigation">
      <ul>
        <li>
          <Link to={"www.google.com"} className="side-navlink">{sidebarLink}</Link>
        </li>
      </ul>
    </div>
  );
}

export default SideNavigation;
