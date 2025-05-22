import { useNavigate, useParams} from "react-router-dom"
import Navbar from "../components/Navbar"
import axios from "axios"
import { useEffect, useState } from "react"

function SinglePage(){
    const navigate = useNavigate()
  const {id} =  useParams()    //use to get parameter of route
  const [book,setBooks] = useState()
  const fetchBooks = async()=>{
   const response =  await axios.get("http:/localhost:3000/api/books/" + id)
   setBooks(response.data.datas)
   useEffect(()=>{
    fetchBooks()
   },[])
  }

  const deleteBook = async()=>{
   const response = await axios.delete("http:/localhost:3000/api/books/" + id)
   console.log(response)
    if(response.status===200){
        navigate("/create-page")
    }else{
        alert("Something went wrong")
   }

  }
    return(
        <>
        <Navbar>{}title</Navbar>
        <h1>{book.bookName}</h1>
        <h1>{book.Price}</h1>
        <h1>{book.Author}</h1>
        <button onClick={deleteBook}>Delete</button>
        </>
    )
}
export default SinglePage