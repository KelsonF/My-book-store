import styles from "./styles.module.css"
import { Book } from "../../core/interfaces/book";
import { BookListItem } from "../BookListItem";

interface BookListProps {
  books?: Book[];
  removeBook: (book: Book)=>void
}

const BookList = ({ books, removeBook }: BookListProps) => {
  return (
    <>
      <h4>{books?.length} livros cadastrados no sistema</h4>
      <ul className={styles.book_list}>
        {books?.map((book) => (
          <BookListItem key={book.id} book={book} removeBook={removeBook}/>
        ))}
      </ul>
    </>
  );
};

export { BookList };
