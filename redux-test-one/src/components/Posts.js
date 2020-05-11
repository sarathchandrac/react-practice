import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from './../actions/postActions';

class Posts extends Component {
    constructor(props) {
        super(props)
        this.state= {
            posts: []
        };

    }

    componentDidMount() {
        this.props.fetchPosts();
    }
    // componentWillMount() {
    //     console.log("componentWillMoint --->");
    // }
  
    render() {
        console.log("state is ", this.state.posts);
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        
        ));

        return (
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        )
    }
}


Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
}

const mapStateToProps = state => {
    console.log("state passed is ---> ", state);
    return {
    posts: state.posts.items
    }
};
export default connect(mapStateToProps, { fetchPosts})(Posts);