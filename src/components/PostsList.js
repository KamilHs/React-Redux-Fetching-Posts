import React from "react";
import { connect } from "react-redux";
import { fetchPostsSuccess, fetchPostsBegin, fetchPostsError } from "../actions";

import '../style/main.css';


class PostsList extends React.Component {

    componentDidMount() {
        this.props.handleLoading()
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(result => this.props.handleSuccess(result))
            .catch(error => this.props.handleError()
            )
    }

    render() {
        switch (this.props.status) {
            case "loading":
                return (
                    <div>Loading...</div>
                )
            case "success":
                return (
                    <div className="posts-list">
                        {this.props.posts.map((post, index) => (
                            <div key={index} className="post">
                                <h2>{post.title}</h2>
                                <p>{post.body}</p>
                            </div>)
                        )}
                    </div>
                )
                case "error":
                    return(
                        <div className="error">ERROR</div>
                    )
                default:
                    return <div></div>
        }
    }
}


const mapStateToProps = (state) => {

    return {
        posts: state.FetchingPosts.posts,
        status: state.FetchingPosts.status
    }
}

const ConnectToStore = connect(
    mapStateToProps,
    (dispatch) => ({
        handleSuccess: (data) => dispatch(fetchPostsSuccess(data)),
        handleError: (data) => dispatch(fetchPostsError(data)),
        handleLoading: (data) => dispatch(fetchPostsBegin(data))

    }),
)(PostsList)

export default ConnectToStore;
