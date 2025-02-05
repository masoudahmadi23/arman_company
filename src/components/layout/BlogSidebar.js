import SearchBox from "../element/SearchBox";
import styles from "./BlogSidebar.module.css";

function BlogSidebar({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        {children} 
      </div>
      <div className={styles.sidebar}>
          <SearchBox /> 
      </div>
    </div>
  );
}

export default BlogSidebar;
