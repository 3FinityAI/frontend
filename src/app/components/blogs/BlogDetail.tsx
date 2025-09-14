import React, { useState } from "react";
import styles from "./blogdetail.module.css";

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
    <div className={styles.blogDetailContainer}>
      <h1 className={styles.blogTtl}>{blogData?.title}</h1>

      <div className={styles.blogAuthorDetail}>
        <img
          className={styles.authorImg}
          src={blogData?.authorImageUrl}
          alt="author 1"
        />
        <p className={styles.authorAbt}>
          <strong>{blogData?.authorName}</strong>
          <span className={styles.publishedDate}>{blogData?.publishedAt}</span>
        </p>
      </div>

      <div className={styles.blogDetail}>
        <div className={styles.blogLeft}>
          <img
            className={styles.blogImg}
            src={blogData?.imageUrl}
            alt="blog 1"
          />
          <p>
            {isExpanded ? blogData.description : `${truncated}...`}
            <span className={styles.toggleRead} onClick={toggleExpanded}>
              {isExpanded ? " Read Less" : " Read More"}
            </span>
          </p>
        </div>
        <div className={styles.blogRight}>
          <img src="/images/scan_to_dwld.png" alt="Download QR" />
        </div>
      </div>
    </div>
  );
}
