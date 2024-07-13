import { LazyLoadImage } from "react-lazy-load-image-component"
import Blog3PreviewImg from "../../../assets/images/blog/blog3-preview.webp"
import Blog3Img from "../../../assets/images/blog/blog3.png"
import CommentForm from "./CommentForm"
import CommentList from "./CommentList"
import PostMeta from "./PostMeta"
import PostTags from "./PostTags"
function BlogDetails() {
  return (
    <>
      <div className="post-thumbnail">
        <LazyLoadImage
          src={Blog3Img}
          width={850}
          height={500}
          alt="Single blog image"
          effect="blur"
          placeholderSrc={Blog3PreviewImg}
        />
      </div>
      <div className="single-post-content-wrap">
        <PostMeta />
        <div className="entry-content">
          <h3> Learn how we grew our startup from 0 to 1M users in 6 months</h3>
          <p>
            As a startup founder, you’re always looking for ways to grow your
            business. But it can be hard to know where to start. — When we
            launched our startup, we had a big idea and a lot of passion. But we
            didn’t have a lot of users. We knew we needed to grow our user base
            quickly if we wanted to succeed. So we set out to find the best ways
            to grow our startup from 0 to 1M users in 6 months. Here’s how we
            did it.
          </p>

          <span>#1: Learn to Tweet your way into a boardroom</span>
          <p>
            Twitter is a powerful tool for networking and building relationships
            with potential clients, partners, and investors. By mastering the
            art of tweeting, you can attract attention, engage with your
            audience, and establish yourself as an expert in your field.
          </p>

          <span>#2: User Interaction</span>
          <p>
            User interaction is a critical skill for building a successful
            online business. By engaging with your audience, you can build
            trust, establish credibility, and create a loyal customer base. User
            interaction can take many forms, including responding to comments,
            answering questions, and providing valuable content that resonates
            with your audience.{" "}
          </p>

          <blockquote>
            "User interaction is a critical skill for building a successful
            online business."
          </blockquote>

          <span>#3: Copywriting and Content Creation</span>
          <p>
            Strong copywriting and content creation skills are essential for
            creating persuasive, engaging, and valuable content for websites,
            blogs, marketing materials, and social media.
          </p>

          <span>#4: Digital Product Creation</span>
          <p>
            Digital Product Creation is a critical skill for building a
            business. By creating digital products, you can generate passive
            income, reach a wider audience, and establish yourself as an expert
            in your field. Digital products can take many forms, including free
            songs, music albums, and digital downloads.{" "}
          </p>

          <span>#5: Sales and Persuasion</span>
          <p>
            Mastering the art of sales and persuasion can help you sell products
            or services, whether they are your own or those of other businesses.
            Understanding consumer.
          </p>
          <p>
            While these skills can help you build a one-person business and
            increase your income potential, it's changing market trends.
            Additionally, starting and growing a business often involves more
            than just one skill, so consider a holistic approach to building
            your business and wealth.
          </p>
          <PostTags />
          <CommentList />
          <CommentForm />
        </div>
      </div>
    </>
  )
}

export default BlogDetails
