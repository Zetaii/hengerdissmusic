import Categories from "../Categories"
import RecentPosts from "../RecentPosts"
import Search from "../Search"
import Tags from "../Tags"

import Blog1Img from "../../../assets/images/blog/blog1.png"
import Blog2Img from "../../../assets/images/blog/blog2.png"
import Blog3Img from "../../../assets/images/blog/blog3.png"
import Blog4Img from "../../../assets/images/blog/blog4.png"
import Blog5Img from "../../../assets/images/blog/blog5.jpg"
import Blog6Img from "../../../assets/images/blog/blog6.jpg"
import GridBlogCard from "./GridBlogCard"

const gridBlogData = [
  {
    id: crypto.randomUUID(),
    title: "Learn how we grew our startup from 0 to 1M users in 6 months",
    category: "Marketing",
    date: "June 18, 2024",
    img: Blog1Img,
  },
  {
    id: crypto.randomUUID(),
    title: "A look at how we make our music and songs with the...",
    category: "Design",
    date: "June 18, 2024",
    img: Blog2Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Song design and the importance of music in our lives...",
    category: "Design",
    date: "June 18, 2024",
    img: Blog3Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Business analytics is a practice essential for business growth",
    category: "Solutions",
    date: "June 12, 2024",
    img: Blog4Img,
  },
  {
    id: crypto.randomUUID(),
    title: "A person business with fun and success",
    category: "Composement",
    date: "June 12, 2024",
    img: Blog5Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Three guys have me for a seat in business",
    category: "Composement",
    date: "June 22, 2024",
    img: Blog6Img,
  },
]
function GridBlog() {
  return (
    <div className="section aximo-section-padding2">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              {gridBlogData.map((blog) => (
                <GridBlogCard key={blog.id} blog={blog} />
              ))}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="right-sidebar">
              <Search />
              <Categories />
              <RecentPosts />
              <Tags />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GridBlog
