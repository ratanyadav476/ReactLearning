import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner'

function Blog() {

  const { posts, page,loading } = useContext(AppContext)
  return (
    <div>
      {
      loading?( <Spinner/>):( posts.length===0 ?(<div>
        <p>Data not Find</p>
      </div>):(posts.map((post)=>(
        <div key={post.id}>
          <div><h1 className='text-3xl text-green-400'>{post.title}</h1></div>
          <h3>the auther is <span>{post.author}</span> and reslesed date <span>{post.date}</span></h3>
          <h2>{post.category}</h2>
          <p>{post.content}</p>
        <div>
          <img src="post.img" alt="" />
        </div>
        <div>
          {
            post.tags.map((tag,index)=>{
              return <span key={index}>#{tag}</span>
            })
          }
        </div>
        </div>
      ))))  

    }
    </div>
  )
}

export default Blog