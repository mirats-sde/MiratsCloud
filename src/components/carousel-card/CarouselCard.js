import "./CarouselCard.css"
const CarouselCard = ({carouselLogo,carouselDesc}) => {
    return (
    <div className="carousel-card">
        <div className="carousel-content">
            <div className="carousel-img">
                <img src={carouselLogo} alt="#"/>
            </div>
            <div className="carousel-desc">
                <p>{carouselDesc}</p>
            </div>
        </div>
    </div>
    )
}

export default CarouselCard