import React from 'react'
import '../home/home.css'

const home = () => {
  return (
    <div>
      <div className="main-container">
        <h1 className='text-white text-center pt-5'>What's is Foody</h1>
        <h4 className='text-white text-center'>"Easy Eats: Your Food Guide"</h4>
        <div className='smallfoodcontainer d-flex justify-content-center gap-3 p-4'>
            <img src="https://cdn.wallpapersafari.com/42/55/MDzowJ.jpg" alt=""  style={{width:"10%"}}/>
            <img src="https://images6.alphacoders.com/439/thumb-1920-439410.jpg" alt="" style={{width:"10%"}}/>
            <img src="https://cdn.wallpapersafari.com/42/55/MDzowJ.jpg" alt="" style={{width:"10%"}}/>
            <img src="https://cdn.wallpapersafari.com/42/55/MDzowJ.jpg" alt="" style={{width:"10%"}}/>  
        </div>
        <h2 className='text-white text-center'>High Ratings</h2>
        <div className="homebanner d-flex justify-content-center">
        <img src="https://www.pngplay.com/wp-content/uploads/6/Golden-5-Star-Rating-PNG.png" alt="" style={{width:"10%"}} />
        </div>
      </div>
    </div>
  )
}

export default home
