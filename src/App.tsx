import './App.css'
import { BookForm } from './components/BookForm'

function App() {

  return (
    <>
      <header></header>
      <main>
        <BookForm />
        <div className="book-list-wrapper">

        </div>
      </main>
      <footer>
        <p>It's done, thanks for choose our store</p>
      </footer>
    </>
  )
}

export default App
