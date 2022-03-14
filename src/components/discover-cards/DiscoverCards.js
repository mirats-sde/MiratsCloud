import { Link } from "react-router-dom"
import "./DiscoverCards.css"

const DiscoverCards = ({discoverBody,discoverLink}) => {
    return (
        <div className="discover-cards">
            <div className="discover-card-body">
                <p className="discover-body">{discoverBody}</p>
                <Link to="#" className="discover-link">{discoverLink}</Link>
            </div>
        </div>
    )
}

export default DiscoverCards