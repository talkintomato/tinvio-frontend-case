import React, { useState, useEffect } from "react";
import db from "../firebase";
// import FlipMove from "react-flip-move";
import PostPreview from "./PostPreview.js";

export default function PostFeed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div>
      {/* <FlipMove> */}
      {posts.map((post) => (
        <PostPreview title={post.title} body={post.body} />
      ))}
      <PostPreview title="Title 1" body="aihsbvdsa aisbdvlsa asdbv" />
      <PostPreview title="Title 1" body="aihsbvdsa aisbdvlsa asdbv" />
      <PostPreview title="Title 1" body="aihsbvdsa aisbdvlsa asdbv" />
      <PostPreview title="Title 1" body="aihsbvdsa aisbdvlsa asdbv" />

      {/* </FlipMove> */}
    </div>
  );
}
