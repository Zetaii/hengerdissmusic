import Story from "../components/about/story"
import BreadCrumb from "../components/common/Breadcrumb"
import About from "../components/home-one/about"
import AutoSlider from "../components/home-one/auto-slider"
import Teams from "../components/home-one/teams"
// Teams images
import Team1Img from "../assets/images/team/team1.jpg"
import Team2Img from "../assets/images/team/team2.jpg"
import Team3Img from "../assets/images/team/team3.jpg"
import Team4Img from "../assets/images/team/team4.png"

const teamsData = [
  {
    id: crypto.randomUUID(),
    name: "Hatsune Miku",
    designation: "Lead Singer",
    img: Team1Img,
  },
  {
    id: crypto.randomUUID(),
    name: "Kagamine Rin",
    designation: "Singer",
    img: Team2Img,
  },
  {
    id: crypto.randomUUID(),
    name: "Kagamine Len",
    designation: "Singer/Composer",
    img: Team3Img,
  },
  {
    id: crypto.randomUUID(),
    name: "Megurine Luka",
    designation: "Singer/Bass Guitarist",
    img: Team4Img,
  },
]

function AboutUs() {
  return (
    <>
      <BreadCrumb title="About Us" />
      <About />
      <Story />
      <AutoSlider />
      <Teams teams={teamsData} />
    </>
  )
}

export default AboutUs
