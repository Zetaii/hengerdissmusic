import About from "../../components/home-one/about"
import AutoSlider from "../../components/home-one/auto-slider"
import Hero from "../../components/home-one/hero"
import Projects from "../../components/home-one/projects"
import Services from "../../components/home-one/services"
import Teams from "../../components/home-one/teams"
import Testimonial from "../../components/home-one/testimonial"
import WhyChooseUs from "../../components/home-one/why-choose-us"

// Teams images
import Team1Img from "../../assets/images/team/team1.jpg"
import Team2Img from "../../assets/images/team/team2.jpg"
import Team3Img from "../../assets/images/team/team3.jpg"
import Team4Img from "../../assets/images/team/team4.png"

const servicesData = [
  {
    id: crypto.randomUUID(),
    title: "Composing",
    description:
      "Focusing on customizing music just for you. We can create music for your project, whether it's a song, a jingle, or a soundtrack.",
    icon: "icon-design-tools",
  },
  {
    id: crypto.randomUUID(),
    title: "Lyric Writing",
    description:
      "Creating lyrics such as songs, poems, or other types of creative writing. We can write lyrics for your music or project.",
    icon: "icon-branding",
  },
  {
    id: crypto.randomUUID(),
    title: "Visual Design",
    description:
      "Designing and developing visual concepts for your song, album, or project. We can create album covers, posters, and more.",
    icon: "icon-web",
  },
  {
    id: crypto.randomUUID(),
    title: "Motion Graphics",
    description:
      "Creating animate graphics, videos for various purposes, including marketing and entertainment. To help spread your music or song.",
    icon: "icon-design-thinking",
  },
]

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
    designation: "Singer/Dancer",
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
    designation: "Leader/Bass Guitarist",
    img: Team4Img,
  },
]

function HomeOne() {
  return (
    <>
      <Hero />
      <Services services={servicesData} />
      <About />
      <Projects />
      <WhyChooseUs />
      <Testimonial />
      <AutoSlider />
      <Teams teams={teamsData} />
    </>
  )
}

export default HomeOne
