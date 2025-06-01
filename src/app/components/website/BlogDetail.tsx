import blogImage from "../../public/images/blogImage.png";
import authorImage from "../../public/images/authorImage.png";
import scan_to_dwld from "../../public/images/scan_to_dwld.png";


export default function BlogDetail() {
    const blogData = {
        imageUrl: blogImage,
        title: "Lorem, ipsum dolor.",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos iste consectetur eligendi dolore, fugiat recusandae aut quidem nemo doloremque nobis aliquam explicabo praesentium architecto reiciendis obcaecati voluptatem a molestiae.",
        authorName: "John Doe",
        authorImageUrl: authorImage,
        publishedAt: "12/08/2021",
    }

    return (
        <>
        <style jsx>{`
            .blog-detail-container {
            width: 1286px;
            margin: 0 auto;
                padding: 20px;
                background-color: #010612;
                color: white;
            }
            .blog-author-detail {
                display: flex;
                align-items: center;
                margin-bottom: 20px;
            }
            .author-img {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                margin-right: 10px;
            }
            .blog-detail {
                display: flex;
                justify-content: space-between;
            }
            .blog-left {
                flex: 1;
                padding-right: 20px;
            }
            .blog-right {
            }
            .blog-img {
                width: 100%;
                height: auto;
            }
            @media (max-width: 768px) {
                .blog-detail-container {
                    width: 100%;
                    padding: 8px;
                    }
                .blog-detail {
                    flex-direction: column;}
                .blog-left {
                    padding-right: 0;}
                .blog-right {
                    margin-top: 20px;}
                .blog-right img {
                    width: 100%;
                    height: auto;
                    }
                .blog-img {
                    width: 100%;}
                
            }
        `}</style>
        <div className="blog-detail-container">
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos architecto esse ratione, magnam minima qui!</h1>
            <div className="blog-author-detail">
                <img className="author-img" src={blogData?.authorImageUrl?.src} alt="author 1" />
                <p><strong>{blogData?.authorName}</strong><span>{blogData?.publishedAt}</span></p>
            </div>
            <div className="blog-detail">
                <div className="blog-left">
                    <img className="blog-img" src={blogData?.imageUrl?.src} alt="blog 1" />
                    {/* <h2>{blogData?.title}</h2>
                    <p>{blogData?.description}</p> */}
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos iste consectetur eligendi dolore, fugiat recusandae aut quidem nemo doloremque nobis aliquam explicabo praesentium architecto reiciendis obcaecati voluptatem a molestiae.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos iste consectetur eligendi dolore, fugiat recusandae aut quidem nemo doloremque nobis aliquam explicabo praesentium architecto reiciendis obcaecati voluptatem a molestiae.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos iste consectetur eligendi dolore, fugiat recusandae aut quidem nemo doloremque nobis aliquam explicabo praesentium architecto reiciendis obcaecati voluptatem a molestiae.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quos iste consectetur eligendi dolore, fugiat recusandae aut quidem nemo doloremque nobis aliquam explicabo praesentium architecto reiciendis obcaecati voluptatem a molestiae.</p>
                </div>
                <div className="blog-right">
                    <img src={scan_to_dwld?.src} alt="" />
                </div>
            </div>
        </div>
        </>
    );
}