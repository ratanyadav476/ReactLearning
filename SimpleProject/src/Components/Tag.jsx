

import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';

function Tag() {
    const [tag,setTag]=useState("car")
    const [gif, setGif] = useState("https://i.imgflip.com/46e43q.png");
    const [loading,setLoading]=useState(false)

    // Function to fetch a random meme
    const fetchRandomMeme = async () => {
        try {
            setLoading(true)
            let link=`https://api.imgflip.com/get_memes&tag=${tag}`
            const response = await fetch(link);
            const data = await response.json();

            if (data.success) {
                const memes = data.data.memes;
                const randomMeme = memes[Math.floor(Math.random() * memes.length)];
                setGif(randomMeme.url);
            }
            setLoading(false)
        } catch (error) {
            console.error("Error fetching meme:", error);
        }
    };

 

    // Call once when the component loads
    useEffect(() => {
        fetchRandomMeme();
    }, []);

    return (
        <div className='w-[600px] bg-pink-300 flex flex-col justify-center items-center border border-black rounded-sm'>
            <h1 className='bg-pink-400 p-3 m-2 border rounded-sm text-xl font-bold'>A RANDOM MEME</h1>
            {
                loading?(<Spinner/>):(<img src={gif} width="350" alt="random meme" className='rounded-sm shadow-md' />)
            }
            <input 
            className='w-10/12 text-lg bg-gray-500 border border-white mt-3 py-2 rounded-lg pb-[3px]  text-center '
            onChange={(event)=>setTag(event.target.value)}
            value={tag}
            />
            <button
                className='bg-blue-500 hover:bg-blue-600 text-white font-semibold p-2 m-4 rounded'
                onClick={fetchRandomMeme}
            >
                GENERATE NEW MEME
            </button>
        </div>
    );
}

export default Tag;
