import React, { useState } from "react";
import Axios from "axios";
import { Outlet, Link } from "react-router-dom";

const blogupdate = () => {
    const[Heading,SetHeading] = useState("");
    const[userdate,setuserdate]=useState("");
    const[blogdesc,setblogdesc] = useState("");

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
            const res = await Axios.post('http://localhost:6969/food/blog',{
                Heading,
                userdate,
                blogdesc
            })
            SetHeading("");
            setuserdate("");
            setblogdesc("");
        } catch (error) {
            
        }
    }
  return (
    <div className=" bg-dark-blue text-white m-5">
        <h1 className="fs-3 mb-5">Blog Post Update</h1>
      <form onSubmit={handleSubmit}  className="d-flex flex-column ">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Heading
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1" 
            placeholder="Enter Heading of Blog post"
            aria-describedby="emailHelp"
            value={Heading}
            onChange={(e)=>SetHeading(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            UserName & Date
          </label>
          <input
            type="text"
            class="form-control"
            placeholder="name and date"
            id="exampleInputPassword1"
            value={userdate}
            onChange={(e)=>{
                setuserdate(e.target.value)
            }}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Discription
          </label>
          <textarea
            className="form-control"
            id="blog"
            name="blogDesc"
            rows="3"
            placeholder="Blog Post Discripition"
            value={blogdesc}
            onChange={(e)=>{
                setblogdesc(e.target.value)
            }}
          />
        </div>
        <button type="submit" class="btn btn-primary " style={{width:"20%"}}>
            upload
        </button>
        <br />
        <Link to="/" className="btn btn-primary" style={{ width: "20%" }}>preview</Link>
      </form>
      <Outlet />
    </div>
  );
};

export default blogupdate;
