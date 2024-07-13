import Blog1Img from "../../assets/images/blog/blog1.png"
import Blog2Img from "../../assets/images/blog/blog2.png"
import Blog3Img from "../../assets/images/blog/blog3.png"
import { Link } from "react-router-dom"
const recentPostData = [
  {
    id: crypto.randomUUID(),
    title: "Learn how we grew our startup from 0 to 1M users in 6 months",
    date: "June 18, 2024",
    img: Blog1Img,
  },
  {
    id: crypto.randomUUID(),
    title:
      "A look at how we make our music and songs with the help of AI tools",
    date: "June 18, 2024",
    img: Blog2Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Song design and the importance of music in our lives and the world",
    date: "June 18, 2024",
    img: Blog3Img,
  },
]
function RecentPosts() {
  return (
    <div className="widget aximo_recent_posts_Widget">
      <h3 className="wp-block-heading">Recent Posts:</h3>

      {recentPostData.map((post) => (
        <div className="post-item" key={post.id}>
          <div className="post-thumb">
            <Link to="/single-blog">
              <img src={post.img} alt={post.title} />
            </Link>
          </div>
          <div className="post-text">
            <div className="post-date">{post.date}</div>
            <Link className="post-title" to="/single-blog">
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RecentPosts
