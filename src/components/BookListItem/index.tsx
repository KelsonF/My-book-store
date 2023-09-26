import styles from "./style.module.css"
import { Book } from "../../core/interfaces/book"

interface BookListItemProps {
   book: Book
   removeBook: (book: Book)=>void
}

const BookListItem = ({book, removeBook} : BookListItemProps) => {

   const onRemoveBook = () => {
      const question = confirm("Are you sure you want to delete this book ???")

      if(question !== true){
         return
      }

      removeBook(book);
      alert("You have deleted a book")
   }

   return (
      <div className={styles.book_card}>
         <p>{book.title}</p>
         <p>{book.amazon_link}</p>
         <p>{book.main_content}</p>
         <div>
            <button onClick={onRemoveBook} >DELETAR</button>
         </div>
      </div>
   )
}

export { BookListItem }