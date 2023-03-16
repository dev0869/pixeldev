import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Loader } from './componenets'
import { Home, CreatePost } from './Pages'
import './index.css'
const App = () => {
  const [loading, setLoading] = useState(false);
  const [allPost, setAllPost] = useState([]);


  const fetchPosts = async () => {
    setLoading(true);

    try {
      const response = await fetch('https://shiny-plum-pelican.cyclic.app/api/posts', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const result = await response.json();
        setAllPost(result.data.reverse());
      }
    } catch (err) {
      alert(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>


      {
        loading ?(<div style={{backgroundColor:'black',display:'flex',height:'100vh',justifyContent:'center',}}><div className='mainlaoder' style={{width:'90px',  margin:'20% auto' }}><Loader/></div></div>)  : (<Routes>

          <Route path='/' element={<Home data={allPost} />} ></Route>
          <Route path='/createPost' element={<CreatePost />} ></Route>
        </Routes>)

      }

    </>
  )
}

export default App