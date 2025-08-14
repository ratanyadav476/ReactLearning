import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

export const AppContext = createContext();

function AppContextProvider({ children }) {

    async function fetchBlogPosts(page = 1) {
        setLoading(true)

        //maybe is this error point
        let url = `${baseUrl}?page=${page}`;
        try {
            const result = await fetch(url);
            const data = await result.json()
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        } catch (error) {
            console.log("error in fetching data",error);
            setPage(1);
            setPosts([])
            setTotalPages(null)


        }
        setLoading(false)


    }

    function handlePageChange(page) {
        setPage(page)
        fetchBlogPosts(page)
    }

    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(null)




    const Value = {
        page,
        setPage,
        totalPages,
        setTotalPages,
        loading,
        setLoading,
        posts,
        setPosts,
        fetchBlogPosts,
        handlePageChange
    }
    return <AppContext.Provider value={Value}>
        {children}
    </AppContext.Provider>
}

export default AppContextProvider;

