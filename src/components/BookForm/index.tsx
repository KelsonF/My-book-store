import styles from './style.module.css'

const BookForm = () => {
  return (
    <div className={styles.form_wrapper}>
      <form className={styles.form}>
        <input type="text" placeholder="Name" className={styles.text_field}/>
        <input type="text" placeholder="Amazon link here" className={styles.text_field}/>
        <input type="text" placeholder="Book main content" className={styles.text_field}/>
        <input type="submit" value="add new book" className={styles.submit_button}/>
      </form>
    </div>
  );
};

export { BookForm };
