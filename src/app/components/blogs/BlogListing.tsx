import { useMemo } from "react";
import { truncateText } from "@/app/utils";
import styles from "./bloglisting.module.css";

export default function BlogListing() {
  const blogData = useMemo(
    () => [
      {
        imageUrl: "/images/blogImage.png",
        title:
          "Lorem, ipsum dolor psum dolor sit amet consectetur adipisicing elit.",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos iste consectetur eligendi dolore, fugiat recusandae aut quidem nemo doloremque nobis aliquam explicabo praesentium architecto reiciendis obcaecati voluptatem a molestiae.",
        authorName: "John Doe",
        authorImageUrl: "/images/authorImage.png",
        publishedAt: "12/08/2021",
      },
      {
        imageUrl: "/images/blogImage.png",
        title:
          "Lorem, ipsum dolor. psum dolor sit amet consectetur adipisicing elit.",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos iste consectetur eligendi dolore, fugiat recusandae aut quidem nemo doloremque nobis aliquam explicabo praesentium architecto reiciendis obcaecati voluptatem a molestiae.",
        authorName: "John Doe",
        authorImageUrl: "/images/authorImage.png",
        publishedAt: "12/08/2021",
      },
      {
        imageUrl: "/images/blogImage.png",
        title:
          "Lorem, ipsum dolor. psum dolor sit amet consectetur adipisicing elit psum dolor sit amet consectetur.",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos iste consectetur eligendi dolore, fugiat recusandae aut quidem nemo doloremque nobis aliquam explicabo praesentium architecto reiciendis obcaecati voluptatem a molestiae.",
        authorName: "John Doe",
        authorImageUrl: "/images/authorImage.png",
        publishedAt: "12/08/2021",
      },
      {
        imageUrl: "/images/blogImage.png",
        title:
          "Lorem, ipsum dolor. psum dolor sit amet consectetur adipisicing elit.",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos iste consectetur eligendi dolore, fugiat recusandae aut quidem nemo doloremque nobis aliquam explicabo praesentium architecto reiciendis obcaecati voluptatem a molestiae.",
        authorName: "John Doe",
        authorImageUrl: "/images/authorImage.png",
        publishedAt: "12/08/2021",
      },
      {
        imageUrl: "/images/blogImage.png",
        title:
          "Lorem, ipsum dolor. psum dolor sit amet consectetur adipisicing elit.",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos iste consectetur eligendi dolore, fugiat recusandae aut quidem nemo doloremque nobis aliquam explicabo praesentium architecto reiciendis obcaecati voluptatem a molestiae.",
        authorName: "John Doe",
        authorImageUrl: "/images/authorImage.png",
        publishedAt: "12/08/2021",
      },
      {
        imageUrl: "/images/blogImage.png",
        title:
          "Lorem, ipsum dolor. psum dolor sit amet consectetur adipisicing elit.",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos iste consectetur eligendi dolore, fugiat recusandae aut quidem nemo doloremque nobis aliquam explicabo praesentium architecto reiciendis obcaecati voluptatem a molestiae.",
        authorName: "John Doe",
        authorImageUrl: "/images/authorImage.png",
        publishedAt: "12/08/2021",
      },
      {
        imageUrl: "/images/blogImage.png",
        title:
          "Lorem, ipsum dolor. psum dolor sit amet consectetur adipisicing elit jeriuwo ueriwok ihewuk ieuwold iuwoeld iewuod.",
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
    <section className={styles.blogListing}>
      <div className={styles.blogTop}>
        <h1>Our Blogs</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
      </div>
      <div className={styles.blogCards}>
        {blogData.map((blog, index) => (
          <a href={`/blogs/${index}`} key={index}>
            <div className={styles.blogCard}>
              <img
                className={styles.featureImg}
                src={blog?.imageUrl}
                alt="Blog"
              />
              <h5>{truncateText(blog?.title, 70)}</h5>
              <p>
                {truncateText(blog?.description, 200)}{" "}
                <span className={styles.readMore}>Read More</span>
              </p>
              <div className={styles.blogAuthorDetail}>
                <img
                  className={styles.authorImg}
                  src={blog?.authorImageUrl}
                  alt="Author"
                />
                <p>
                  <strong>{blog?.authorName}</strong>
                  <span className={styles.publishedDate}>
                    {blog?.publishedAt}
                  </span>
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
