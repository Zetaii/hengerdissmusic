import Single1Img from "../../../assets/images/v1/project3.png"

import Single2Img from "../../../assets/images/v1/project2.jpg"
import Star2Img from "../../../assets/images/v1/star2.png"
const projectResolveSteps = [
  {
    id: crypto.randomUUID(),
    title: "Concept Development",
    text: "The product began when we understood what our client wanted. We researched the market, identified the target audience, and developed a concept that met their needs.",
  },
  {
    id: crypto.randomUUID(),
    title: "Creation and Production",
    text: "Once the design was finalized, the project transitioned to the creation phase. The team worked on producing the music and lyrics, and the final product was ready for launch.",
  },
  {
    id: crypto.randomUUID(),
    title: "Success and Impact",
    text: "The song was a success, and it had a significant impact on the target audience. It was catchy, memorable, and evoked the right emotions, leading to increased brand awareness and sales.",
  },
]
function PortfolioDetails() {
  return (
    <div className="aximo-project-single-section">
      <div className="container">
        <div className="aximo-project-single-thumb">
          <img src={Single1Img} alt="Single" />
        </div>
        <div className="aximo-project-info-wrap">
          <div className="aximo-project-info">
            <h3>Client:</h3>
            <p>Big Company,US</p>
          </div>
          <div className="aximo-project-info">
            <h3>Date:</h3>
            <p>June</p>
          </div>
          <div className="aximo-project-info">
            <h3>Duration:</h3>
            <p>Two Months</p>
          </div>
          <div className="aximo-project-info">
            <h3>Cost:</h3>
            <p>50k USD</p>
          </div>
        </div>
        <div className="aximo-project-single-wrap">
          <div className="row">
            <div className="col-lg-4 order-lg-2">
              <div className="aximo-project-single-thumb2 ">
                <img src={Single2Img} alt="Single 2" />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="aximo-default-content m-right-gap">
                <h2>
                  How we initiate and
                  <span className="aximo-title-animation">
                    resolve the project
                    <span className="aximo-title-icon">
                      <img className="star-img" src={Star2Img} alt="star" />
                    </span>
                  </span>
                </h2>
                <p>
                  The project began when a leading technology identified a
                  market need for an innovative and energy-efficient smart home
                  thermostat.
                </p>
                <div className="aximo-resolve-project-wrap">
                  {projectResolveSteps.map((item, index) => (
                    <div key={item.id} className="aximo-resolve-project-item">
                      <h3>
                        {index + 1}. {item.title}:
                      </h3>
                      <p>{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioDetails
