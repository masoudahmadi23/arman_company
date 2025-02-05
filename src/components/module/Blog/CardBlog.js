import { convertToPersianDate } from "@/utils/function";
import Image from "next/image";
import Link from "next/link";
import styles from "./CardBlog.module.css";

function CardBlog({ blog }) {
  const imageUrl = blog?.yoast_head_json?.og_image?.[0]?.url;

  return (
    <div className={styles.card}>
      <div className={styles.image}>
        <Link href={`/blog/${blog.title.rendered}`}>
          {imageUrl && (
            <Image
              src={imageUrl}
              width={600}
              height={450}
              alt={blog.title.rendered}
            />
          )}
        </Link>
      </div>
      <div className={styles.cardcontent}>
        <span className={styles.carddate}>
          {convertToPersianDate(blog.yoast_head_json.article_published_time)}
        </span>
        <Link href={`/blog/${blog.title.rendered}`}>
          <h3 className={styles.cardtitle}>{blog.title.rendered}</h3>
        </Link>
        <p
          className={styles.cardexcerpt}
          dangerouslySetInnerHTML={{ __html: blog.excerpt.rendered }}
        />
        <Link className={styles.button} href={`/blog/${blog.title.rendered}`}>
          بیشتر بخوانید
        </Link>
      </div>
    </div>
  );
}

export default CardBlog;
