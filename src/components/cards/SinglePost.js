import React, { useState, useEffect } from 'react';
//import Nav from './Nav';
import axios from 'axios';
import AdminNav from '../../components/nav/AdminNav';
import renderHTML from 'react-render-html';
import Laptop from "../../images/laptop.png";

const SinglePost = props => {
    const [post, setPost] = useState('');

    useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_API}/post/${props.match.params.slug}`)
        .then(response => setPost(response.data))
        .catch(error => alert('Error loading single post'));

    }, []);

    return (
        <div className="container-row" style={{position:"relative", width:"700px", 
        left:"200px"}}>

        <div className="container-col">
           
            <br />
            <div>
             <img className="p-1" 
            src={post.images && post.images.length ? post.images[0].url : Laptop}
            style={{width:"800px", height: "300px", objectFit: "cover" }}
            
          />
          <div> {post.title} </div>
            <hr />    
             <div className="lead pt-3">{renderHTML(post && post.description)}</div>
                        <p>
                            Author <span className="badge">{post.user}</span> Published on{' '}
                            <span className="badge">{new Date(post.createdAt).toLocaleString()}</span>
                        </p>
            </div>
            </div>
            <div className="container-colt" style={{position:"absolute", height:"650px", 
            width:"250px", left:"800px", top:"25px", backgroundColor:"blue"}}>
            ADS
            </div>
        </div>
    );
};

export default SinglePost;
