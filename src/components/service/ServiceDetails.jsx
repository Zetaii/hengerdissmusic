import SingleImg from "../../assets/images/v1/hero-thumb.jpg"
import Star2Img from "../../assets/images/v1/star2.png"
import WorkingApproach from "./WorkingApproach"
function ServiceDetails() {
  return (
    <div className="section aximo-section-padding2 pb-0">
      <div className="container">
        <div className="aximo-service-details-wrap">
          <div className="aximo-service-details-thumb">
            <img src={SingleImg} alt="Single img" />
          </div>
          <div className="row">
            <div className="col-lg-8">
              <div className="aximo-default-content">
                <h2>
                  <span className="aximo-title-animation">
                    Composement for
                    <span className="aximo-title-icon">
                      <img className="star-img" src={Star2Img} alt="star" />
                    </span>
                  </span>
                  modern audiences
                </h2>
                <p>
                  Composing for modern audiences requires a deep understanding
                  of the market, the audience, and the product. It involves
                  creating content that is engaging, relevant, and valuable to
                  the target audience.
                </p>
                <p>
                  Audiences are our customers. Here are some key considerations
                  when composing for modern audiences:
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="aximo-user-interface">
                <h3>1/ Type of Song</h3>
                <ul>
                  <li>
                    The type of song you compose will depend on the target
                    audience and the purpose of the song.
                  </li>
                  <li>
                    For example, if you are composing a song for a commercial,
                    it should be catchy and memorable. If you are composing a
                    song for a movie, it should evoke the right emotions and set
                    the right tone.
                  </li>
                  <li>
                    Key aspects of composing include melody, harmony, rhythm,
                    and lyrics.
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="aximo-user-interface">
                <h3>2/ Listener Experience:</h3>
                <ul>
                  <li>
                    The listener experience is crucial when composing for modern
                    audiences. You need to create content that is engaging,
                    relevant, and valuable to the target audience.
                  </li>
                  <li>
                    Consider the audience's preferences, interests, and
                    expectations when composing your content.
                  </li>
                  <li>
                    The goal is to create content that resonates with the
                    audience and encourages them to take action or engage with
                    the product.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="aximo-faq-wrap">
            <WorkingApproach />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetails
