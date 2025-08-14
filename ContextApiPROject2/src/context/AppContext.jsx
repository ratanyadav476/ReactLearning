import { createContext, useState } from "react";
import { BaseUrl } from "../Components/BaseUri";

export const AppContext = createContext();

function AppContextProvider({ children }) {

    async function FetchingData(page = 1) {
        setLoading(true)
        let url = `${BaseUrl}?page=${page}`
        try {
            const result = await fetch(url)
            const data = await result.json()
            console.log(data.posts);
            setPosts(data.posts)
            setPage(data.page)
            setTotalPages(data.totalPages)

        } catch (error) {
            console.log("error during data fetch ", error);
            setPage(1)
            setPosts([])
            setTotalPages(null)


        }
        setLoading(false) 
    }

    function HandlepageChange(page) {
        setPage(page)
        FetchingData(page)
    }

    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [posts, setPosts] = useState([])
    const [totalPages, setTotalPages] = useState(null)


    const Value = {
        loading,
        setLoading,
        page,
        setPage,
        posts, setPosts,
        totalPages, setTotalPages,
        FetchingData,
        HandlepageChange
    }
    return <AppContext.Provider value={Value}>
        {children}
    </AppContext.Provider>
}
export default AppContextProvider;