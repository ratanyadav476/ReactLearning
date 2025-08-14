import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';

const Blog=()=>{
    const {posts,loading}=useContext(AppContext);
    return (
     <div className=' p-10 m-10  w-[700px]'>
        {
            loading? (<Spinner />) :(
                posts.length===0?
                (<h1>No Post Found</h1>):
                (posts.map((post)=>(
                    <div key={post.id}>
                        <h2 className='text-3xl font-bold items-center'>{post.title}</h2>
                        <p >By <span className='text-xl text-blue-400 font-bold'>{post.author}</span> on  <span className='text-xl text-blue-400 font-bold'>{post.category}</span></p>
                        <p>Posted on  <span className='text-red-500 '>{post.date}</span></p>
                        <p>{post.content}</p>
                        <div>
                        {
                            post.tags.map((tag,index)=>(
                                <span className='text-blue-800 underline m-1' key={index}>{`# ${tag}`} </span>
                            ))
                        }
                        </div>


                        
                    </div>
                )))
            )
        }
     </div>
    )
}

export default Blog