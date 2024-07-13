import Star2Img from "../../../assets/images/v1/star2.png"
import StoryContent from "./StoryContent"
import StoryPhotos from "./StoryPhotos"
function Story() {
  return (
    <div className="section aximo-section-padding6">
      <div className="container">
        <div className="aximo-section-title center title-description">
          <h2>
            <span className="aximo-title-animation">
              We think our story is
              <span className="aximo-title-icon">
                <img className="star-img" src={Star2Img} alt="star" />
              </span>
            </span>
            worth sharing with you
          </h2>
          <p>
            Established in March 2000, we began as a small but ambitious team.
            We understood the importance of music and creativity in the world,
            and we wanted to share our passion with you. We believe that music
            can inspire, motivate, and bring people together.
          </p>
        </div>

        <div className="row">
          <StoryPhotos />
        </div>

        <div className="aximo-story-content">
          <StoryContent />
        </div>
      </div>
    </div>
  )
}

export default Story
