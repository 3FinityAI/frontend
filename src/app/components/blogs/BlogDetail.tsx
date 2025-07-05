import React, { useState } from "react";

export default function BlogDetail() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

  const blogData = {
    imageUrl: "/images/blogImage.png",
    title:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique perferendis, at inventore dicta temporibus, quo assumenda, praesentium odit fugit aperiam consequuntur veritatis quasi ut cum.",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, maxime. Deserunt atque expedita ipsum quidem. Optio exercitationem magnam nesciunt praesentium dolor dolores labore quae distinctio cum molestias? Illo, officia asperiores?
    Magnam architecto ipsam cum odio repudiandae ex omnis, doloribus ipsum autem eum quisquam harum aut. Laudantium, eius. Odio voluptate, aut expedita voluptatum dolor alias aliquam explicabo recusandae voluptatibus esse corporis.
    Molestias doloremque facilis veniam similique, possimus quae quis nam commodi! Dignissimos natus molestiae error neque dolores enim saepe numquam voluptatem suscipit amet, distinctio consectetur praesentium mollitia debitis illum magnam nesciunt?
    Tempora animi ab praesentium soluta voluptates, pariatur saepe quia dignissimos consequuntur voluptatem quidem incidunt adipisci, ullam rerum esse labore quae ratione, alias optio perspiciatis illum asperiores nemo ex? Expedita, ratione!
    Recusandae numquam unde minima? Quaerat quod iure voluptatum amet repellat, corrupti odit earum? Id quisquam nisi maiores. Ipsum amet deserunt eaque commodi? Similique odio quae nostrum quo nulla culpa provident?
    Numquam consequatur facere odio officia magni veniam consectetur atque maiores pariatur, exercitationem quasi adipisci unde assumenda, quam magnam inventore illum cumque, mollitia labore nulla ipsam earum error commodi! Corporis, minus!
    Necessitatibus officia officiis sequi vel explicabo quis minus adipisci, iusto numquam maiores voluptatem nam reprehenderit a animi omnis id vitae beatae sit tenetur voluptatibus impedit suscipit dolor! Dolor, dolore dolorem.`,
    authorName: "John Doe",
    authorImageUrl: "/images/authorImage.png",
    publishedAt: "12/08/2021",
  };

  const truncated = blogData.description.slice(0, 550);

  return (
    <div className="blog-detail-container">
      <h1 className="blog-ttl">{blogData?.title}</h1>
      <div className="blog-author-detail">
        <img
          className="author-img"
          src={blogData?.authorImageUrl}
          alt="author 1"
        />
        <p className="author-abt">
          <strong>{blogData?.authorName}</strong>
          <span className="published-date">{blogData?.publishedAt}</span>
        </p>
      </div>
      <div className="blog-detail">
        <div className="blog-left">
          <img className="blog-img" src={blogData?.imageUrl} alt="blog 1" />
          <p>
            {isExpanded ? blogData.description : `${truncated}...`}
            <span className="toggle-read" onClick={toggleExpanded}>
              {isExpanded ? " Read Less" : " Read More"}
            </span>
          </p>
        </div>
        <div className="blog-right">
          <img src={"/images/scan_to_dwld.png"} alt="" />
        </div>
      </div>
      <style jsx>{`
        .blog-detail-container {
          width: 1280px;
          margin: 0 auto;

          color: white;
        }
        .blog-ttl {
          font-size: 48px;
          font-weight: bold;
          margin: 48px 0 24px 0;
          line-height: 1;
        }
        .blog-author-detail {
          display: flex;
          align-items: center;
          margin-bottom: 48px;
        }
        .author-img {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          margin-right: 10px;
        }
        .blog-author-detail .published-date {
          position: relative;
          margin-left: 22px;
        }

        .blog-author-detail .published-date::before {
          content: "";
          display: block;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: #fff;
          position: absolute;
          left: -12px;
          top: 10px;
        }
        .blog-detail {
          display: flex;
          justify-content: space-between;
        }
        .blog-left {
          width: 787px;
        }
        .blog-left p {
          text-align: justify;
        }
        .blog-right {
        }
        .blog-img {
          width: 100%;
          height: 388px;
          margin-bottom: 48px;
        }
        .toggle-read {
          color: #0080e8;
          cursor: pointer;
          font-weight: 500;
        }
        .toggle-read:hover {
          text-decoration: underline;
        }
        @media (max-width: 768px) {
          .blog-detail-container {
            width: 100%;
            padding: 8px;
          }
          .blog-ttl {
            font-size: 24px;
          }
          .blog-detail {
            flex-direction: column;
          }
          .blog-left {
            width: 100%;
          }
          .blog-right {
            margin-top: 20px;
          }
          .blog-right img {
            width: 100%;
            height: auto;
          }
          .blog-img {
            width: 100%;
            height: auto;
          }
        }
      `}</style>
    </div>
  );
}
