import Call2Img from "../../assets/images/icon/call2.svg"
import EmailImg from "../../assets/images/icon/email.svg"
import MapImg from "../../assets/images/icon/map.svg"
import Star2Img from "../../assets/images/v1/star2.png"
function ContactInfo() {
  return (
    <div className="aximo-contact-info-section">
      <div className="container">
        <div className="aximo-contact-info-title">
          <h2>
            <span className="aximo-title-animation">
              Contact Information
              <span className="aximo-title-icon">
                <img className="star-img" src={Star2Img} alt="Star" />
              </span>
            </span>
          </h2>
        </div>
        <div className="row">
          <div className="col-xl-4 col-md-6">
            <a href="">
              <div className="aximo-contact-info-box">
                <div className="aximo-contact-info-icon">
                  <img src={Call2Img} alt="Call Img" />
                </div>
                <div className="aximo-contact-info-data">
                  <span>Call us</span>
                  <p>+1-123-456-7890</p>
                  <p>+1-123-456-7890</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-xl-4 col-md-6">
            <a href="">
              <div className="aximo-contact-info-box">
                <div className="aximo-contact-info-icon">
                  <img src={EmailImg} alt="Email" />
                </div>
                <div className="aximo-contact-info-data">
                  <span>Email us</span>
                  <p>hengerdiss@gmail.com</p>
                  <p>hengerdiss@gmail.com</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-xl-4 col-md-6">
            <div className="aximo-contact-info-box">
              <div className="aximo-contact-info-icon">
                <img src={MapImg} alt="Map" />
              </div>
              <div className="aximo-contact-info-data">
                <span>Office address</span>
                <p>123 Someplace, Somecity, MN</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
