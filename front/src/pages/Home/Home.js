import Post from '../../components/Posts/Post'
import './Home.css'

import mlogo from '../../components/assets/male_avatar.svg'
import flogo from '../../components/assets/fem_avatar.svg'

import Footer from '../../components/Footer/Footer'
import WritePost from '../../components/WritePost/WritePost'
import Menu from '../../components/Menu/index'
// import { useLocation } from 'react-router-dom'
import axios from "axios";
import { useState, useEffect } from 'react'


function Home(props) {

  const [getPost, setPost] = useState([])

  const posts = [
    {
      name: 'João Silva',
      image: mlogo,
      date: '11:50 07/02/2020',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet elit eget lacus feugiat dignissim in ut odio. Maecenas vitae pulvinar nibh, a interdum libero. Sed convallis non justo vitae pharetra. Mauris erat mauris, feugiat a justo vitae, aliquam auctor lectus. Aliquam lectus neque, elementum sed augue quis, imperdiet bibendum nisl. Nunc tristique condimentum felis, at rutrum nisi. Mauris porta vulputate dui. Curabitur vel scelerisque turpis. Aliquam vitae tortor non lacus tempus vestibulum ut vel neque. Nunc non lectus dolor. Integer vel risus faucibus, commodo sapien eu, accumsan urna. Mauris rutrum sapien sit amet dolor semper malesuada et vitae.',
    },
    {
      name: 'Maria Silva',
      image: flogo,
      date: '11:50 05/05/2020',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies, neque nec interdum scelerisque, sapien urna ullamcorper dui, in hendrerit massa diam vitae mi. Fusce vitae libero tellus. Suspendisse at.',
    },
    {
      name: 'Enzo Benício',
      image: mlogo,
      date: '11:50 05/05/2020',
      text: 'Lorem ipsum.',
    },
    {
      name: 'Maria Antonieta',
      image: flogo,
      date: '11:50 05/05/2020',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus.',
    },

  ]



  const listPosts = () => {
    axios.post('http://localhost:3001/post',
      { user },
      { headers: { "Authorization": `Bearer ${user.token}` } }
    )
      .then(res => {
        setPost(res.data.posts)
      }).catch(err => console.log(err))
  }

    
  
  const [user, setUser] = useState(props.location.state);
  const Feed = () => {
    const [user, setUser] = useState(props.location.state);
    return (
      <div className="feed">
        <h1>Hello, {user.userName} </h1>
        
        <WritePost setUser={setUser} user={user} />


        {user.posts.map((e, index) => <Post key={index} user={user} setUser={setUser} content={e} name={user.userName} token={user.token} />)}
        {/* {console.log(user.token)}
        {console.log(getPost)} */}

        {/* <button onClick={() => listPosts()}>Aqui</button> */}
        {/* {()=>listPosts} */}
        {/* {getPost.map((e, index) => <Post key={index} content={e} name={user.userName} token={user.token} />)} */}
      </div>
    )
  }

  return (
    !user ? <div className="notLogged">You must log in.</div> :
      <div className="Home">

        <Menu />
        <Feed />
        <Footer />

      </div >
  );
}

export default Home;
