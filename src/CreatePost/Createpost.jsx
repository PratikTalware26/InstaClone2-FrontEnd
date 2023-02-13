import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Createpost.css"
// import axios from "axios"

const Createpost = () => {
  const navigate= useNavigate()
  const [data, setData]= useState({
    author:"",
    location:"",
    description:""
  })

  const [image, setImage]= useState('')

  const handleImage= (e)=>{
    setImage(e.target.files[0])
    // console.log(image)
  }


  const handleChange= (e)=>{
    const name= e.target.name
    const value= e.target.value
    setData({...data, [name]:value})
  }

  const handleSubmit= async (e)=>{
    e.preventDefault()
    const formData= new FormData()

    formData.append('author', data.author)
    formData.append('location', data.location)
    formData.append('description', data.description)
    formData.append('image', image)



      await fetch('https://instaclone2-4bp1.onrender.com/api/posts', {
      method:'POST',
      body: formData
    })

    navigate('/posts')
  }


  return (
    <div className="create-post-cont">
      <form method="POST">
        <div className="input-file"> 
          <input type="file" onChange={handleImage}/>
        </div>
        <div className="author-locat">
          <input type="text" placeholder="Author" name="author" value={data.author} onChange={handleChange}/>
          <input type="text" placeholder="Location" name="location" value={data.location} onChange={handleChange}/>
        </div>
        <div className="desc-cont">
          <input type="text" placeholder="Description" name="description" value={data.description} onChange={handleChange}/>
        </div>
        <div className="submit-btn-cont">
          <button type="submit" onClick={handleSubmit}>Post</button>
        </div>
      </form>
    </div>
  );
};

export default Createpost;
