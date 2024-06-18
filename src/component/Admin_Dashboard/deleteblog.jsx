import React, { useEffect, useState } from "react";
import axios from 'axios';

const DeleteBlog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get('http://localhost:6969/food/display');
        setBlogs(res.data);
      } catch (error) {
        console.log('Error fetching blogs:', error);
      }
    };
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:6969/food/delete/${id}`);
      setBlogs(blogs.filter(blog => blog._id !== id));
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  return (
    <div className="p-5 text-white">
      <div className="row g-5 text-white">
        <div className="col-md-8">
          <h3 className="pb-4 mb-4 fst-italic border-bottom">Recipe Blog:</h3>
          {blogs.length > 0 ? (
            blogs.map(blog => (
              <article key={blog._id} className="blog-post bg-dark-blue">
                <h2 className="display-5 fs-4 link-body-emphasis mb-1 text-white">
                  {blog.Heading}
                </h2>
                <p className="blog-post-meta">
                  {blog.UserDate}
                </p>
                <p>Description: {blog.desc}</p>
                <button onClick={() => handleDelete(blog._id)} className="btn btn-danger">Delete</button>
                <hr />
                <a href="#">12,345 views</a>
              </article>
            ))
          ) : (
            <p>No blogs available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default DeleteBlog;
