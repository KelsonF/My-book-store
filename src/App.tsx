import './App.css'
import { ulid } from "ulidx"
import { useState } from 'react'
import { BookForm } from './components/BookForm'
import { BookList } from './components/BookList'
import { Book } from './core/interfaces/book'

function App() {

  const [books, setBooks] = useState<Book[]>([])

  const handleAddBook = (title: string, link: string, content: string) => {
    const new_book: Book = {
      id: ulid(),
      title: title,
      amazon_link: link,
      main_content: content
    }

    setBooks([new_book, ...books])
  }

  const handleDeleteBook = (book: Book) => {
    const bookFilter = books.filter(b => b.id !== book.id)
    setBooks(bookFilter)
  }

  return (
    <>
      <header>
        <h1>Welcome to our store</h1>
      </header>
      <main>
        <BookForm addFunction={handleAddBook}/>
        <BookList books={books} removeBook={handleDeleteBook}/>
      </main>
      <footer>
        <p>It's done, thanks for choose our store</p>
      </footer>
    </>
  )
}

export default App
