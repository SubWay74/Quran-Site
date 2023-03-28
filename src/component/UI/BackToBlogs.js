import React from 'react';
import { Link } from "react-router-dom";

export default function BackToBlogs() {
  return (
    <>
        <Link to="/blog">
            <button className='back-to-blogs'>
                <img src="/img/x-solid.svg" alt="" />
            </button>
        </Link>
    </>
  )
}
