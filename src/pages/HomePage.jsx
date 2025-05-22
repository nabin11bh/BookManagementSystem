import { useEffect, useState } from "react"
import Card from "../components/Card"
import Navbar from "../components/Navbar"
import axios from "axios"

function HomePage(){
  const [books,setBooks] = useState([])
  const fetchBooks = async()=>{
     const response = await axios.get("http://localhost:3000/api/books/")
     setBooks(response.data)
  }
    useEffect(()=>{
      fetchBooks()
    },[])
    return(
       <>
      <Navbar />
      <div className="flex flex-wrap">
        {
          books.map(function(book){
            return(
              <Card book={book} key={book.id} />
            )
          })
        }
       
      </div>
       </>
    )
}

export default HomePage