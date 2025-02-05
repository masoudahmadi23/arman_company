import Conect from "../module/ContactPage/Conect";
import styles from "./Contact.module.css";
function Contact() {
  return (
    <>
      <section className={styles.container}>
        <h1>تماس با آرمان کمپانی</h1>
        <div className={styles.border}></div>
        <p>با ما در ارتباط باشید ...</p>
      </section>
        <Conect />
    </>
  );
}

export default Contact;
