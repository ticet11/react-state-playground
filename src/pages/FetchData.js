import React, { useState, useEffect } from "react";
import axios from "axios";

export default function FetchData() {
    const [posts, setPosts] = useState([]);

    const fetchPosts = () => {
        axios
            .get("https://jsonplaceholder.typicode.com/users/1/posts")
            .then((response) => {
                setPosts(response.data);
                console.log(response.data);
            })
            .catch((error) =>
                console.error("fetch posts error", error)
            );
    };

    useEffect(() => fetchPosts(), []);

    return (
        <div>
            {posts.map((post) => {
                return (
                    <div key={post.id}>
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                    </div>
                );
            })}
        </div>
    );
}
