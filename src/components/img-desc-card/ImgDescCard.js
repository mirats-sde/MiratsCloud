import { Link } from "react-router-dom";
import "./ImgDescCard.css"

function ImgDescCard({img, title, desc, link}) {
    return (
        <div className="imgDesc-showcase">
            <img src={img} alt="" className=""/>
            <h3>{title}</h3>
            <p>{desc}</p>
          <Link to={"www.google.com"} className="link">{link}</Link>
        </div>
    )
}

export default ImgDescCard;


