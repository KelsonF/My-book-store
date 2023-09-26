import styles from "./style.module.css";
import { FormEvent, useRef } from "react";

interface BookFormProps {
  addFunction: (title: string, link: string, content: string) => void;
}

const BookForm = ({ addFunction }: BookFormProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const book_title = titleRef.current!.value;
    const book_link = linkRef.current!.value;
    const book_content = contentRef.current!.value;

    addFunction(book_title, book_link, book_content);
  };

  return (
    <div className={styles.form_wrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          className={styles.text_field}
          ref={titleRef}
        />
        <input
          type="text"
          placeholder="Amazon link here"
          className={styles.text_field}
          ref={linkRef}
        />
        <input
          type="text"
          placeholder="Book main content"
          className={styles.text_field}
          ref={contentRef}
        />
        <input
          type="submit"
          value="add new book"
          className={styles.submit_button}
        />
      </form>
    </div>
  );
};

export { BookForm };
