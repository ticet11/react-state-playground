import React, { Component } from "react";
import axios from "axios";

export default class FetchData extends Component {
    constructor() {
        super();

        this.state = {
            posts: [],
        };
    }



    fetchPosts = () => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) =>
                this.setState({ posts: response.data })
            )
            .catch((error) =>
                console.error("fetch posts error", error)
            );
    };

    componentDidMount = () => this.fetchPosts();

    render() {
    return <div>{
            this.state.posts.map(post => {
                return (
                <div>{post.title}</div>
                )
            }
            )
        }</div>;
    }
}
