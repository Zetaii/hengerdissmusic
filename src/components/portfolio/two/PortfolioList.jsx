import Portfolio1Img from "../../../assets/images/v1/project2.jpg"
import Portfolio2Img from "../../../assets/images/v1/project1.jpg"
import Portfolio3Img from "../../../assets/images/v1/project3.png"
import Portfolio4Img from "../../../assets/images/v1/hero-thumb.jpg"
import Portfolio5Img from "../../../assets/images/v1/video-bg.jpg"
import Portfolio6Img from "../../../assets/images/v1/project2.jpg"
import Portfolio7Img from "../../../assets/images/v1/project1.jpg"
import Portfolio8Img from "../../../assets/images/v1/project3.png"
import PortfolioCard from "./PortfolioCard"

const portfolioListData = [
  {
    id: crypto.randomUUID(),
    title: "Composement Design",
    description:
      "Developing the look and feel of physical products, aesthetics, and functionality.",
    img: Portfolio1Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Lyric Writing Design",
    description:
      "Creating lyrics for songs, jingles, and other musical compositions.",
    img: Portfolio2Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Visual Design",
    description:
      "Designing the visual elements, such as logo, graphic design, and video.",
    img: Portfolio3Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Audience Design",
    description:
      "Designing for modern audiences, including music, video, and branding.",
    img: Portfolio4Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Motion Graphic Design",
    description:
      "Designing motion graphics, videos, and animations for marketing and entertainment.",
    img: Portfolio5Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Logo and Branding",
    description: "Designing logo and branding materials for businesses.",
    img: Portfolio6Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Advertising Campaigns",
    description:
      "Developing creative concepts for print, digital, and video advertising campaigns, including ad design and copywriting",
    img: Portfolio7Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Illustration Design",
    description:
      "Creating custom illustrations for advertisements, trailers, and other marketing materials.",
    img: Portfolio8Img,
  },
]
function PortfolioList() {
  return (
    <div className="section aximo-project-page aximo-section-padding5">
      <div className="container">
        <div className="row">
          {portfolioListData.map((portfolio) => (
            <PortfolioCard key={portfolio.id} portfolio={portfolio} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default PortfolioList
