import "./FindPartner.css"

function FindPartner({bannerHeading, bannerBody}) {
    return (
        <div className="partner-banner">
            <div className="banner-content">
                <h1>{bannerHeading}</h1>
                <p>{bannerBody}</p>
            </div>
        </div>
    )
}

export default FindPartner;