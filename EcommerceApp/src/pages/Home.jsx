import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
import Product from '../components/Product';

function Home() {
    const [loading, setLoading] = useState(false)
    const [posts, setPosts] = useState([])
    const API_URL = "https://fakestoreapi.com/products";
    async function fetchProductData() {
        setLoading(true)
        try {
            const res = await fetch(API_URL)
            let data = await res.json()
            setPosts(data)
            console.log(data);

        } catch (error) {
            console.log("eeeor toh yaha per hai", error);
            setPosts([])

        }
        setLoading(false)
    }

    useEffect(() => {
        fetchProductData()
    }, [])
    return (
        <div>

            {
                loading ? <Spinner /> :
                    posts.length > 0 ? (
                        <div className='grid md:grid-cols-2 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-80vh'> 
                            {posts.map((post) => (
                                
                                <Product  key={post.id} post={post} />
                            ))}
                        </div>
                    ) : (
                        <div className='flex justify-center items-center'>
                            <h1 className='bg-green-400 p-2 m-3 rounded-xl hover:bg-green-700'>
                                data  not found
                            </h1>
                        </div>
                    )
            }
        </div>
    )
}

export default Home