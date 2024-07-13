import Single2Img from "../../assets/images/v1/project3.png"
import Star2Img from "../../assets/images/v1/star2.png"

const workingApprochData = [
  {
    id: crypto.randomUUID(),
    title: "Research and Competitor Analysis",
    description:
      "Start by understanding the target audience and their needs and analyze similar products identify best practices of differentiation.",
    icon: "icon-search",
  },
  {
    id: crypto.randomUUID(),
    title: "User Experience Design",
    description:
      "Design a song that is user-friendly, intuitive, and engaging, and that meets the needs of the target audience.",
    icon: "icon-design-tools",
  },
  {
    id: crypto.randomUUID(),
    title: "Launch and Post-Launch",
    description:
      "Prepare for the product's launch, and gather user feedback after the product is live and make iterative improvements user data.",
    icon: "icon-start-up",
  },
]
function WorkingApproach() {
  return (
    <div className="row">
      <div className="col-lg-5 offset-lg-1 order-lg-1">
        <div className="aximo-service-details-thumb2 ">
          <img src={Single2Img} alt="service" />
        </div>
      </div>
      <div className="col-lg-6">
        <div className="aximo-default-content">
          <h2>
            <span className="aximo-title-animation">
              Our Approach
              <span className="aximo-title-icon">
                <img className="star-img" src={Star2Img} alt="star" />
              </span>
            </span>
          </h2>
          <p>
            The working approach for Song/Music design is a process that
            involves several steps, from research and analysis to implementation
            and post-launch. Here is an overview of our approach:
          </p>
        </div>
        <div className="aximo-our-approach">
          {workingApprochData.map((item) => (
            <div className="aximo-iconbox-wrap5" key={item.id}>
              <div className="aximo-iconbox-icon5">
                <i className={`${item.icon}`}></i>
              </div>
              <div className="aximo-iconbox-data5">
                <h3>{item.title}:</h3>
                <div className="aximo-user-interface">
                  <ul>
                    <li>{item.description}</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WorkingApproach
