import BreadCrumb from "../../components/common/Breadcrumb"
import Teams from "../../components/home-one/teams"
// Team member images
import Team1Img from "../../assets/images/team/team1.jpg"
import Team10Img from "../../assets/images/team/team10.png"

import Team2Img from "../../assets/images/team/team2.jpg"
import Team3Img from "../../assets/images/team/team3.jpg"
import Team4Img from "../../assets/images/team/team4.png"
import Team5Img from "../../assets/images/team/team5.jpg"
import Team6Img from "../../assets/images/team/team6.jpg"
import Team7Img from "../../assets/images/team/team7.png"
import Team8Img from "../../assets/images/team/team8.png"
import Team9Img from "../../assets/images/team/team9.jpg"

const teamsData = [
  {
    id: crypto.randomUUID(),
    name: "Hatsune Miku",
    designation: "Creative Director",
    img: Team1Img,
  },
  {
    id: crypto.randomUUID(),
    name: "Kagamine Rin",
    designation: "Senior Designer",
    img: Team2Img,
  },
  {
    id: crypto.randomUUID(),
    name: "Kagamine Len",
    designation: "Project Manager",
    img: Team3Img,
  },
  {
    id: crypto.randomUUID(),
    name: "Megurine Luka",
    designation: "Web Developer",
    img: Team4Img,
  },
  {
    id: crypto.randomUUID(),
    name: "Kaito Shion",
    designation: "Creative Director",
    img: Team5Img,
  },
  {
    id: crypto.randomUUID(),
    name: "Meiko Haigo",
    designation: "UI/UX Designer",
    img: Team6Img,
  },
  {
    id: crypto.randomUUID(),
    name: "Azusawa Kohane",
    designation: "Chief Executive Officer",
    img: Team7Img,
  },
  {
    id: crypto.randomUUID(),
    name: "Shiraishi An",
    designation: "HR Director",
    img: Team8Img,
  },
  {
    id: crypto.randomUUID(),
    name: "Shinonome Akito",
    designation: "UI Designer",
    img: Team9Img,
  },
  {
    id: crypto.randomUUID(),
    name: "Aoyagi Toya",
    designation: "Researcher",
    img: Team10Img,
  },
]
function Team() {
  return (
    <>
      <BreadCrumb title="Our Team" />
      <Teams teams={teamsData} />
    </>
  )
}

export default Team
;<div>Team</div>
