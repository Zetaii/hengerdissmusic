import Star2Img from "../../../assets/images/v1/star2.png"
import Project1Img from "../../../assets/images/v1/project1.jpg"
import Project2Img from "../../../assets/images/v1/project2.jpg"
import Project3Img from "../../../assets/images/v1/project3.png"
import Project4Img from "../../../assets/images/v1/project4.png"
import ProjectCard from "./ProjectCard"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Mousewheel } from "swiper/modules"

const projectsData = [
  {
    id: crypto.randomUUID(),
    title: "Bad Apple",
    description:
      "Developing the look and feel of positivity with this creative music video.",
    img: Project1Img,
  },
  {
    id: crypto.randomUUID(),
    title: "World is Mine",
    description:
      "Live performance of the song World is Mine by Hatsune Miku, our lead singer.",
    img: Project2Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Ievan Polkka",
    description:
      "A fun and energetic music video, with motion graphics and visual design.",
    img: Project3Img,
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
  {
    id: crypto.randomUUID(),
    title: "Rolling Girl",
    description: "A music video with a unique and creative concept. ",
    img: Project2Img,
  },
]

const swiperSettings = {
  spaceBetween: 24,
  direction: "horizontal",
  pagination: {
    clickable: true,
  },
  modules: [Pagination, Mousewheel],
  mousewheel: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    900: {
      slidesPerView: 2,
    },
    1600: {
      slidesPerView: 3.5,
    },
  },
}
function Projects() {
  return (
    <div className="section dark-bg aximo-section-padding">
      <div className="container">
        <div className="aximo-section-title center light">
          <h2>
            Have a wide range of
            <span className="aximo-title-animation">
              creative music
              <span className="aximo-title-icon">
                <img className="star-img" src={Star2Img} alt="Star2Img" />
              </span>
            </span>
          </h2>
        </div>
      </div>
      <div className="swiper aximo-project-slider">
        <Swiper {...swiperSettings}>
          {projectsData.map((project) => (
            <SwiperSlide key={project.id}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Projects
