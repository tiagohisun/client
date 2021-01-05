import React, { useState, useEffect } from 'react';
//import Nav from './Nav';
import axios from 'axios';
import AdminNav from '../../components/nav/AdminNav';
import renderHTML from 'react-render-html';
const SinglePost = props => {
    const [post, setPost] = useState('');

    useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_API}/post/${props.match.params.slug}`)
        .then(response => setPost(response.data))
        .catch(error => alert('Error loading single post'));

    }, []);

    return (
        <div className="container-fluid">
        <div className="row">
           
            <br />
            <div>
            <h1>{post.title}</h1>
            <hr />    
             <div className="lead pt-3">{renderHTML(post && post.description)}</div>
                        <p>
                            Author <span className="badge">{post.user}</span> Published on{' '}
                            <span className="badge">{new Date(post.createdAt).toLocaleString()}</span>
                        </p>
            </div>
            
            </div>
        </div>
    );
};

export default SinglePost;
