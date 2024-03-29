import React from 'react'
import "../App.css"
import BlogPost from '../components/BlogPost'
import { Post } from '../models/postModel'

interface Props{
  posts: Post[]
}

export default function Posts({posts}: Props) {

  return (
    <div className='posts flex flex-wrap m-2'>
      {posts.map(post => (
        <BlogPost key={post?._id} post={post} />
      ))}
    </div>
  )
}