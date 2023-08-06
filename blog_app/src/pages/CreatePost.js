import React, { useEffect, useState } from 'react'
import {addDoc, collection} from 'firebase/firestore'; //function that will add a document in the table of firestore database
import {useNavigate} from 'react-router-dom';
import {db,auth} from "../firebase-config";

function CreatePost({ isAuth }) {
  const [title, setTitle] = useState();//keeping track of Title input
  const [postText, setPostText] = useState ("");//keeping track of the Post Text input

  let navigate = useNavigate();
  const postsCollectionRef =  collection(db, "posts")
  const createPost = async () => {
    await addDoc(postsCollectionRef, {title, 
      postText, 
      author: {name: auth.currentUser.displayName, id: auth.currentUser.uid} });
      navigate("/");

  };//function to submit the data to the firestore and save it to the database


  useEffect (() => {
    if (!isAuth) {
      navigate("/login");
    }
  }, [])
  return (
    <div className='createPostPage'>
       <div className='cpContainer'> 
        <h1>Create A Post</h1>
        <div className='inputGp'> 
        <label> Title:</label>
        <input placeholder='Title...' on onChange={(event) => {
          setTitle(event.target.value)}}>
            </input> 
        </div>
        <div className='inputGp'> 
        <label> Post:</label>
        <textarea placeholder='Post...'on onChange={(event) => {
          setPostText(event.target.value)}}>
            </textarea> 
        </div>
        <button onClick={createPost}>Submit Post</button> 
       </div>
    </div>
  )////onChange Function will be called whenever the user writes 
        //something in the text area to keep track of what's currently in the input by grabing 
        //the event variable and setting the setTitle into the event.target.value
}

export default CreatePost