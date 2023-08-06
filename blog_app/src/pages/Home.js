import React, { useEffect,useState } from 'react'
import {getDocs, collection, deleteDoc, doc} from 'firebase/firestore';
import {db, auth} from "../firebase-config";

function Home({isAuth}) {
  const [postList, setPostList] = useState([]);
  const postsCollectionRef =  collection(db, "posts")



  useEffect (() => {
    const getPost = async () => {
      const data = await getDocs (postsCollectionRef);
      setPostList(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };
    getPost();
  });

  const deletePost = async (id) => {
    const postDoc = doc(db, "posts",id )
    await deleteDoc(postDoc)
  }
  return (
    <div className='homePage'>{postList.map((post) => { return <div className="post"> 
      <div className='postHeader'> 
        <div className='title'> 
          <h1>{post.title}</h1>
        </div>
        <div className='deletePost'> 
        {isAuth && post.author.id === auth.currentUser.uid && <button onClick={() => {deletePost(post.id)}}>X</button>}
        </div>
      </div>
      <div className='postTextContainer'> {post.postText}</div>
      <h3>@{post.author.name}</h3>
    </div>
      })}
      </div>
  )
}

export default Home