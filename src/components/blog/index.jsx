import Categories from "./Categories"
import RecentPosts from "./RecentPosts"
import Search from "./Search"
import Tags from "./Tags"

import Blog1Img from "../../assets/images/blog/blog1.png"
import Blog2Img from "../../assets/images/blog/blog2.png"
import Blog3Img from "../../assets/images/blog/blog3.png"
import BlogCard from "./BlogCard"
import Navigation from "./Navigation"

const blogData = [
  {
    id: crypto.randomUUID(),
    title: "Learn how we grew our startup from 0 to 1M users in 6 months",
    content:
      "As a startup founder, you’re always looking for ways to grow your business. But it can be hard to know where to start. — When we launched our startup, we had a big idea and a lot of passion. But we didn’t have a lot of users. We knew we needed to grow our user base quickly if we wanted to succeed. So we set out to find the best ways to grow our startup from 0 to 1M users in 6 months. Here’s how we did it.",
    category: "Marketing",
    date: "June 18, 2024",
    img: Blog1Img,
  },
  {
    id: crypto.randomUUID(),
    title:
      "A look at how we make our music and songs with the help of AI tools",
    content:
      "We are a music production company that uses AI tools to help us create our music. We use AI tools to help us with everything from composing to mixing and mastering. — In this blog post, we’ll take a look at how we make our music and songs with the help of AI tools.",
    category: "Design",
    date: "June 18, 2024",
    img: Blog2Img,
  },
  {
    id: crypto.randomUUID(),
    title: "Song design and the importance of music in our lives and the world",
    content:
      "Music is an important part of our lives and the world. It has the power to bring people together, to inspire us, and to make us feel emotions we never knew we had. — In this blog post, we’ll take a look at the importance of music in our lives and the world, and how we can use music to make a difference.",
    category: "Design",
    date: "June 18, 2024",
    img: Blog3Img,
  },
]
function Blog() {
  return (
    <div className="section aximo-section-padding2">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {blogData.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
            <Navigation />
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

export default Blog
