import React, { useEffect, useState } from "react";
import addbanner from '../../assets/ad.jpg'
import axios from 'axios';

const MainContent = () => {
  const[blog, setBlog] = useState([]);
  useEffect(()=>{
    const fetchblog = async()=>{
      try{
        const res = await axios.get('http://localhost:6969/food/display');
        setBlog(res.data);
      }
      catch(error)
      {
        console.log('error fetching blogs:',error);
      }
    };
    fetchblog();
  },[]);

  return (
    <div className="p-5 text-white ">
      <div className="row g-5 text-white">
        <div className="col-md-8">
        <h3 className="pb-4 mb-4 fst-italic border-bottom">Recipe Blog:</h3>
          {blog.length > 0 ? (
            blog.map(blogItem => (
              <article key={blogItem._id} className="blog-post bg-dark-blue">
                <h2 className="display-5 fs-4 link-body-emphasis mb-1 text-white">
                  {blogItem.Heading}
                </h2>
                <p className="blog-post-meta">
                  {blogItem.UserDate}
                </p>
                <p>Description: {blogItem.desc}</p>
                <hr />
                <a href="#">12,345 views</a>
              </article>
            ))
          ) : (
            <p>No blogs available</p>
          )}

          {/* features */}

          <article className="blog-post text-white">
            <h2 className="display-5 link-body-emphasis mb-1  text-white">
              Our Food Motto
            </h2>
            <hr />
            <p>
              We always prefer home cooked food whether it is making a simple
              Pizza or a loaf of bread or Chocolate Cake. We believe in cooking
              with fresh ingredients that are easily available. 
              <br /><br />
              We avoid using
              heavily processed food or junk food. As a result we have sound
              health in our family. Eat healthy and stay healthy is our motto.
            </p>
            <p>
            Initially our brand name was “Veg Recipes of India” which we later changed in June 2020 to “Dassana’s Veg Recipes“. This brand change was made to broaden our vision of sharing vegetarian recipes from all over the world and not just specific to Indian cuisine..
            </p>
            <div className="container mt-5">
                <img src={addbanner} alt=""  style={{width:"100%"}}/>
            </div>
          </article>
        </div>

        <div className="col-md-4 text-dark">
          <div className="position-sticky" style={{ top: "2rem" }}>
            <div className="p-4 mb-3 bg-body-tertiary rounded">
              <h4 className="fst-italic">About Foody</h4>
              <p className="mb-0">
              "Share your culinary expertise on Foody, the ultimate recipe hub. Discover new flavors, inspire others, and join a vibrant community of food lovers. Get cooking today! 🍳✨ #FoodyApp #RecipeSharing"
              </p>
            </div>

            <div className="text-white">
              <h4 className="fst-italic ">Recent posts</h4>
              <ul className="list-unstyled text-white">
                <li>
                  <a
                    className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                    href="#"
                  >
                    <img src="http://1.bp.blogspot.com/-zmjIv48Kp38/VYFqIQglYsI/AAAAAAAC_pE/tQ-URMGLVcI/s1600/1.JPG" alt=""  style={{width:"30%"}}/>
                    <div className="col-lg-8 text-white">
                      <h6 className="mb-0 text-white">
                        Madurai Kari Dosai
                      </h6>
                      <small className="text-white">May 27, 2024</small>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                    href="#"
                  >
                    <img src="https://i.ytimg.com/vi/fNN-hCX2QZw/maxresdefault.jpg" alt=""  style={{width:"30%"}}/>
                    <div className="col-lg-8">
                      <h6 className="mb-0 text-white">
                        EruttuKadai Alva
                      </h6>
                      <small className="text-white text-white">
                        May 14, 2024
                      </small>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                    href="#"
                  >
                   <img src="https://i.ytimg.com/vi/h29pu4MX360/maxresdefault.jpg " alt=""  style={{width:"30%"}}/>
                    <div className="col-lg-8">
                      <h6 className="mb-0 text-white">
                        Dindugal Thalapakkatti
                      </h6>
                      <small className=" text-white">
                        May 18, 2024
                      </small>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
