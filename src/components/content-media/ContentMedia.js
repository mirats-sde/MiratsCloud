import { Link } from "react-router-dom"
import "./ContentMedia.css"

const ContentMedia = ({data}) => {
    return (
        <div className="content-media">
            {data.map((d, index) => {
                if (index % 2 === 0) {
                    return (
                        <section className="content-media-section">
                            <div className="content">
                                <p className="content-title">{d.contentTitle}</p>
                                <p className="content-desc">{d.contentDesc}</p>
                                <Link to="#" className="content-btn">{d.contentBtn}</Link>
                            </div>

                            <div className="content-media">
                                <img
									src={d.media}
									alt=''
									width={300}
									height={200}
								/>
                            </div>
                        </section>
                    )
                } else {
                    return (
                        <section className="content-media-section">
                             <div className="content-media">
                                <img
									src={d.media}
									alt=''
									width={300}
									height={200}
								/>
                            </div>
                            <div className="content">
                                <p className="content-title">{d.contentTitle}</p>
                                <p className="content-desc">{d.contentDesc}</p>
                                <Link to="#" className="content-btn">{d.contentBtn}</Link>
                            </div>
                        </section>
                    )
                }
            })}
        </div>
    )
}

export default ContentMedia