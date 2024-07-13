import Project2Img from "../../../assets/images/v1/project2.jpg"
import Project1Img from "../../../assets/images/v1/project1.jpg"
import Project4Img from "../../../assets/images/v1/project4.png"
import PortfolioCard from "./PortfolioCard"
import Star2Img from "../../../assets/images/v1/star2.png"
const portfolioListData = [
  {
    id: crypto.randomUUID(),
    title: "World is Mine",
    description:
      "Live performance of the song World is Mine by Hatsune Miku, our lead singer.",
    img: Project2Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Senbonzakura",
    description:
      "A music video with a traditional Japanese theme, featuring our team.",
    img: Project4Img,
  },
  {
    id: crypto.randomUUID(),
    title: "ODDS&ENDS",
    description: "A music video with a futuristic theme. ",
    img: Project1Img,
  },
]
function PortfolioList() {
  return (
    <div className="aximo-project-one-column">
      <div className="container">
        <div className="aximo-section-title center">
          <h2>
            Have a wide range of
            <span className="aximo-title-animation">
              creative projects
              <span className="aximo-title-icon">
                <img className="star-img" src={Star2Img} alt="star" />
              </span>
            </span>
          </h2>
        </div>
        {portfolioListData.map((portfolio) => (
          <PortfolioCard key={portfolio.id} portfolio={portfolio} />
        ))}
      </div>
    </div>
  )
}

export default PortfolioList
