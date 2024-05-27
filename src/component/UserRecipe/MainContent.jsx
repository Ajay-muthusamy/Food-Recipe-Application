import React from "react";
import addbanner from '../../assets/ad.jpg'
const MainContent = () => {
  return (
    <div className="p-5 text-white ">
      <div className="row g-5 text-white">
        <div className="col-md-8">
          <h3 className="pb-4 mb-4 fst-italic border-bottom">Recipe Blog:</h3>
          <article className="blog-post bg-dark-blue">
            <h2 className="display-5 fs-4 link-body-emphasis mb-1 text-white">
              Honey Garlic Chicken
            </h2>
            <p className="blog-post-meta">By Jane Doe | May 27, 2024</p>

            <p>
              Honey Garlic Chicken is a perfect blend of sweet and savory
              flavors that makes for a delightful meal. This dish is easy to
              prepare and can be served with rice, noodles, or vegetables,
              making it a versatile addition to your recipe collection.
            </p>
            <hr />
            <a href="#">12,345 view</a>
          </article>

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
              <h4 className="fst-italic">About</h4>
              <p className="mb-0">
                Customize this section to tell your visitors a little bit about
                your publication, writers, content, or something else entirely.
                Totally up to you.
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
                    <svg
                      className="bd-placeholder-img"
                      width="100%"
                      height="96"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <rect width="100%" height="100%" fill="#777" />
                    </svg>
                    <div className="col-lg-8 text-white">
                      <h6 className="mb-0 text-white">
                        Example blog post title
                      </h6>
                      <small className="text-white">January 15, 2024</small>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                    href="#"
                  >
                    <svg
                      className="bd-placeholder-img"
                      width="100%"
                      height="96"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <rect width="100%" height="100%" fill="#777" />
                    </svg>
                    <div className="col-lg-8">
                      <h6 className="mb-0 text-white">
                        This is another blog post title
                      </h6>
                      <small className="text-white text-white">
                        January 14, 2024
                      </small>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                    href="#"
                  >
                    <svg
                      className="bd-placeholder-img"
                      width="100%"
                      height="96"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    >
                      <rect width="100%" height="100%" fill="#777" />
                    </svg>
                    <div className="col-lg-8">
                      <h6 className="mb-0 text-white">
                        Longer blog post title: This one has multiple lines!
                      </h6>
                      <small className="text-body-secondary">
                        January 13, 2024
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
