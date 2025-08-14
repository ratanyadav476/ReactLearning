import Blog from "./components/Blog"
import Pagination from "./components/Pagination"
import Header from "./components/Header"
import { useContext, useEffect } from "react"
import { AppContext } from "./context/AppContext"

function App() {
  const  {fetchBlogPosts,page}=useContext(AppContext)
useEffect(()=>{
fetchBlogPosts(page)
},[])

  return (
    
      <div className="flex flex-col  h-full p-10 justify-center items-center m-auto w-full" >
        <Header/>
        <Blog/>
        <Pagination/>
      </div>
 
  )
}

export default App
