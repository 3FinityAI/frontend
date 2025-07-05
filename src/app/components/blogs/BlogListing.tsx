import { useMemo } from "react";
import { truncateText } from "@/app/utils"

export default function BlogListing() {
  const blogData = useMemo(
    () => [
      {
        imageUrl: "/images/blogImage.png",
        title: "Lorem, ipsum dolor psum dolor sit amet consectetur adipisicing elit.",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos iste consectetur eligendi dolore, fugiat recusandae aut quidem nemo doloremque nobis aliquam explicabo praesentium architecto reiciendis obcaecati voluptatem a molestiae.",
        authorName: "John Doe",
        authorImageUrl: "/images/authorImage.png",
        publishedAt: "12/08/2021",
      },
      {
        imageUrl: "/images/blogImage.png",
        title: "Lorem, ipsum dolor. psum dolor sit amet consectetur adipisicing elit.",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos iste consectetur eligendi dolore, fugiat recusandae aut quidem nemo doloremque nobis aliquam explicabo praesentium architecto reiciendis obcaecati voluptatem a molestiae.",
        authorName: "John Doe",
        authorImageUrl: "/images/authorImage.png",
        publishedAt: "12/08/2021",
      },
      {
        imageUrl: "/images/blogImage.png",
        title: "Lorem, ipsum dolor. psum dolor sit amet consectetur adipisicing elit psum dolor sit amet consectetur.",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos iste consectetur eligendi dolore, fugiat recusandae aut quidem nemo doloremque nobis aliquam explicabo praesentium architecto reiciendis obcaecati voluptatem a molestiae.",
        authorName: "John Doe",
        authorImageUrl: "/images/authorImage.png",
        publishedAt: "12/08/2021",
      },
      {
        imageUrl: "/images/blogImage.png",
        title: "Lorem, ipsum dolor. psum dolor sit amet consectetur adipisicing elit.",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos iste consectetur eligendi dolore, fugiat recusandae aut quidem nemo doloremque nobis aliquam explicabo praesentium architecto reiciendis obcaecati voluptatem a molestiae.",
        authorName: "John Doe",
        authorImageUrl: "/images/authorImage.png",
        publishedAt: "12/08/2021",
      },
      {
        imageUrl: "/images/blogImage.png",
        title: "Lorem, ipsum dolor. psum dolor sit amet consectetur adipisicing elit.",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos iste consectetur eligendi dolore, fugiat recusandae aut quidem nemo doloremque nobis aliquam explicabo praesentium architecto reiciendis obcaecati voluptatem a molestiae.",
        authorName: "John Doe",
        authorImageUrl: "/images/authorImage.png",
        publishedAt: "12/08/2021",
      },
      {
        imageUrl: "/images/blogImage.png",
        title: "Lorem, ipsum dolor. psum dolor sit amet consectetur adipisicing elit.",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos iste consectetur eligendi dolore, fugiat recusandae aut quidem nemo doloremque nobis aliquam explicabo praesentium architecto reiciendis obcaecati voluptatem a molestiae.",
        authorName: "John Doe",
        authorImageUrl: "/images/authorImage.png",
        publishedAt: "12/08/2021",
      },
      {
        imageUrl: "/images/blogImage.png",
        title: "Lorem, ipsum dolor. psum dolor sit amet consectetur adipisicing elit jeriuwo ueriwok ihewuk ieuwold iuwoeld iewuod.",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos iste consectetur eligendi dolore, fugiat recusandae aut quidem nemo doloremque nobis aliquam explicabo praesentium architecto reiciendis obcaecati voluptatem a molestiae.",
        authorName: "John Doe",
        authorImageUrl: "/images/authorImage.png",
        publishedAt: "12/08/2021",
      },
    ],
    []
  );

  return (
    <section className="blog-listing">
      <div className="blog-top">
        <h1>Our Blogs</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
      <div className="blog-cards">
        {blogData.map((blog, index) => (
          <a href={`/blogs/${index}`} key={index}>
            <div className="blog-card">
              <img
                className="feature-img"
                src={blog?.imageUrl}
                alt="Blog"
              />
              <h5>{truncateText(blog?.title, 70)}</h5>
              <p>{truncateText(blog?.description, 200)} <span className="rd-more">Read More</span></p>
              <div className="blog-author-detail">
                <img
                  className="author-img"
                  src={blog?.authorImageUrl}
                  alt="Author"
                />
                <p>
                  <strong>{blog?.authorName}</strong>
                  <span>{blog?.publishedAt}</span>
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
      <style jsx>{`
        .blog-listing {
          width: 1247px;
          margin: 0 auto;
        }
        .blog-top {
          text-align: center;
          margin: 50px 0;
        }
        .blog-top h1 {
          font-size: 36px;
          margin-bottom: 10px;
          color: #fff;
        }
        .blog-top p {
          font-size: 15px;
          color: #fff;
        }
        .blog-cards {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-wrap: wrap;
          gap: 28px;
        }
        .blog-cards a {
          text-decoration: none;
          color: inherit;
        }
        .blog-card {
          width: 290px;
          height: 336px;
          background-color: rgb(255 255 255 / 10%);
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          padding: 8px;
          position: relative;
        }
        .blog-card .feature-img {
          width: 100%;
          height: 154px;
          object-fit: cover;
          border-radius: 8px;
        }
        .blog-card h5 {
          font-size: 14px;
          font-weight: bold;
          margin: 10px 0;
          color: #fff;
        }
        .blog-card p {
          font-size: 10px;
          font-weight: 400;
          line-height: 1.5;
          color: #fff;
        }
        .rd-more {
          color: #0080E8;
          margin-left: 5px;
        }

        .blog-author-detail {
          position: absolute;
          bottom: 10px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 10px;
          margin-top: 10px;
        }
        .blog-author-detail .author-img {
          width: 22px;
          height: 22px;
          border-radius: 100%;
        }
        .blog-author-detail p {
          flex: 1;
        }
        .blog-author-detail span {
          display: inline-block;
          margin-left: 15px;
          position: relative;
          left: 10px;
        }
        .blog-author-detail span::before {
          content: "";
          display: block;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: #fff;
          position: absolute;
          left: -15px;
          top: 5px;
        }
        @media (max-width: 768px) {
          .blog-listing {
            width: 100%;
          }
          .blog-cards {
            flex-direction: column;
          }
          .blog-card {
            width: 100%;
          }
          .blog-card .feature-img {
            width: 100%;
        }
        }
      `}</style>
    </section>
  );
}
