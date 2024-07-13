import Story1Img from "../../../assets/images/about/story1.jpg"
import Story2Img from "../../../assets/images/about/story2.png"
import Story3Img from "../../../assets/images/about/story3.jpg"
import Story4Img from "../../../assets/images/about/story4.jpg"
function StoryPhotos() {
  return (
    <>
      <div className="col-lg-8">
        <div className="aximo-story-thumb">
          <img src={Story1Img} alt="Story1Img" />
        </div>
      </div>
      <div className="col-lg-4">
        <div className="aximo-story-thumb">
          <img
            className=""
            style={{ height: "465px" }}
            src={Story2Img}
            alt="StoryImg2"
          />
        </div>
      </div>
      <div className="col-lg-4">
        <div className="aximo-story-thumb">
          <img src={Story3Img} alt="StoryImg3" style={{ height: "470px" }} />
        </div>
      </div>
      <div className="col-lg-8">
        <div className="aximo-story-thumb">
          <img src={Story4Img} alt="Story4Img" />
        </div>
      </div>
    </>
  )
}

export default StoryPhotos
