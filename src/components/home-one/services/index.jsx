import Star2Img from "../../../assets/images/v1/star2.png"
import ServiceCard from "./ServiceCard"

function Services({ services }) {
  return (
    <div className="section aximo-section-padding4">
      <div className="container">
        <div className="aximo-section-title center">
          <h2>
            We can help you
            <span className="aximo-title-animation">
              create your idea!
              <span className="aximo-title-icon">
                <img className="star-img" src={Star2Img} alt="Star2Img" />
              </span>
            </span>
          </h2>
        </div>
        <div className="aximo-service-wrap">
          <div className="row">
            {services.map((item) => (
              <ServiceCard key={item.id} service={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
