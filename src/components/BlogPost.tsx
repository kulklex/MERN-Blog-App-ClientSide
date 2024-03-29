import React from "react";
import { Link } from "react-router-dom";
import "../App.css"
import { Post } from "../models/postModel";

type Props = {
  post: Post
};

export default function BlogPost({post}: Props) {
  const PublicFolder = `${process.env.REACT_APP_SERVER_HOST_NAME}/images/`
  return (
    <div className="post mx-10 my-3 flex flex-col justify-between">
      <img
        src={PublicFolder + post?.photo} alt=""
        className="postImage w-96 object-cover h-64 rounded"
      />
      <div className="postInfo w-96 flex items-center flex-col">
        <div className="postCats">
            <span className="postCat font-serif font-semibold text-amber-400 text-xs  mt-4 mx-5 cursor-pointer">
              {post?.category}
            </span>
        </div>
        <Link to={`/posts/${post._id}`} className="link">
          <span className="postTitle font-sans font-bold text-lg">
            {post.title}
          </span>
        </Link>
        <hr />
        <span className="italic font-serif text-xs text-amber-400 mt-2">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc w-96 font-sans leading-6 text-black overflow-hidden text-ellipsis">
        {post.desc}{"..."}
       </p>
    </div>
  );
}
