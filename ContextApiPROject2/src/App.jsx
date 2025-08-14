import { useContext, useEffect } from 'react'
import './App.css'
import Blog from './Components/Blog'
import Pagination from './Components/Pagination'
import { AppContext } from './context/AppContext'
import Header from './Components/Header'

function App() {
  const { FetchingData, page } = useContext(AppContext)

  useEffect(() => {
    FetchingData(page)
  }, [])
  return (
    <>
      <Header />
      <Blog />
      <Pagination />
    </>
  )
}

export default App
