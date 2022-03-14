import {Link} from "react-router-dom";
import "./Testimonial.css"

function Testimonial({testImg, testPara, footerHeadline, testBtn}) {
    return (
            <div className="testimonial-data">
                <img alt="" src={testImg}></img>
                <p className="testPara">{testPara}</p>
                <p className="foot-headline">{footerHeadline}</p>
                <Link to=""> <button className="testBtn">{testBtn}</button></Link>
            </div>
    ) 
}

export default Testimonial