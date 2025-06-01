

import blogImage from "../../public/images/blogImage.png";
import authorImage from "../../public/images/authorImage.png";

export default function BlogListing() {
    const blogData = [
        {
            imageUrl: blogImage,
            title: "Lorem, ipsum dolor.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos iste consectetur eligendi dolore, fugiat recusandae aut quidem nemo doloremque nobis aliquam explicabo praesentium architecto reiciendis obcaecati voluptatem a molestiae.",
            authorName: "John Doe",
            authorImageUrl: authorImage,
            publishedAt: "12/08/2021",
        },
        {
            imageUrl: blogImage,
            title: "Lorem, ipsum dolor.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos iste consectetur eligendi dolore, fugiat recusandae aut quidem nemo doloremque nobis aliquam explicabo praesentium architecto reiciendis obcaecati voluptatem a molestiae.",
            authorName: "John Doe",
            authorImageUrl: authorImage,
            publishedAt: "12/08/2021",
        },
        {
            imageUrl: blogImage,
            title: "Lorem, ipsum dolor.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos iste consectetur eligendi dolore, fugiat recusandae aut quidem nemo doloremque nobis aliquam explicabo praesentium architecto reiciendis obcaecati voluptatem a molestiae.",
            authorName: "John Doe",
            authorImageUrl: authorImage,
            publishedAt: "12/08/2021",
        },
        {
            imageUrl: blogImage,
            title: "Lorem, ipsum dolor.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos iste consectetur eligendi dolore, fugiat recusandae aut quidem nemo doloremque nobis aliquam explicabo praesentium architecto reiciendis obcaecati voluptatem a molestiae.",
            authorName: "John Doe",
            authorImageUrl: authorImage,
            publishedAt: "12/08/2021",
        },
        {
            imageUrl: blogImage,
            title: "Lorem, ipsum dolor.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos iste consectetur eligendi dolore, fugiat recusandae aut quidem nemo doloremque nobis aliquam explicabo praesentium architecto reiciendis obcaecati voluptatem a molestiae.",
            authorName: "John Doe",
            authorImageUrl: authorImage,
            publishedAt: "12/08/2021",
        },
        {
            imageUrl: blogImage,
            title: "Lorem, ipsum dolor.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos iste consectetur eligendi dolore, fugiat recusandae aut quidem nemo doloremque nobis aliquam explicabo praesentium architecto reiciendis obcaecati voluptatem a molestiae.",
            authorName: "John Doe",
            authorImageUrl: authorImage,
            publishedAt: "12/08/2021",
        },
        {
            imageUrl: blogImage,
            title: "Lorem, ipsum dolor.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos iste consectetur eligendi dolore, fugiat recusandae aut quidem nemo doloremque nobis aliquam explicabo praesentium architecto reiciendis obcaecati voluptatem a molestiae.",
            authorName: "John Doe",
            authorImageUrl: authorImage,
            publishedAt: "12/08/2021",
        },

    ];
    return (
        <>
            <style jsx>{`
            .blog-listing {
                width: 1247px;
                margin: 0 auto;
                padding: 20px;
            }
            .blog-top {
                text-align: center;
                margin-bottom: 50px;
            }
            .blog-top h1 {
                font-size: 2.5em;
                margin-bottom: 10px;
                color: #fff;
            }
            .blog-top p {
                font-size: 1.2em;
                color: #fff;
            }
            .blog-cards {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-wrap: wrap;
                gap: 25px;
            }
                .blog-cards a {
                text-decoration: none;
                color: inherit;
            }
            .blog-card {
                width: 250px;
                height: 336px;
                background-color: #1a1a1a;
                border-radius: 8px;
                box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                padding: 20px;
            }
            .blog-card .feature-img {
                width: 100%;
                border-radius: 8px;
            }
            .blog-card h5 {
                font-size: 1.5em;
                margin: 10px 0;
                color: #fff
            }
            .blog-card p {
                font-size: 1em;
                color: #fff;
                 display: -webkit-box;
  -webkit-line-clamp: 3;         /* 👈 Limits to 5 lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
            }

            .blog-author-detail {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                gap: 10px;
                margin-top: 10px;
            }
            .blog-author-detail p {
            flex: 1;
            }
            .blog-author-detail span {
                position: relative;
                left: 10px;

            }
            @media (max-width: 768px) {
            .blog-listing {
                width: 100%;
                padding: 10px;

                }
            }
        `}</style>
            <section className="blog-listing">
                <div className="blog-top">
                    <h1>Our Blogs</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
                </div>
                <div className="blog-cards">
                    {blogData.map((blog, index) => (
                        <a href={`/blogs/${index}`} key={index}>
                        <div className="blog-card">
                            <img className="feature-img" src={blog?.imageUrl?.src} alt="Blog 1" />
                            <h5>{blog?.title}</h5>
                            <p>{blog?.description}</p>
                            <div className="blog-author-detail">
                                <img className="author-img" src={blog?.authorImageUrl?.src} alt="author 1" />
                                <p><strong>{blog?.authorName}</strong><span>{blog?.publishedAt}</span></p>
                            </div>
                        </div>
                        </a>
                    ))}
                </div>
            </section>
        </>
    );
}