import React, { Component } from 'react'

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state= {
            title: '',
            body: ''
        };
        // this.onChange = this.onChange.bind(this);
    }
    onChange = (e) => {
        this.setState({ [e.target.name] : e.target.value });

    }
    onSubmit = (e) => {
        e.preventDefault();
        const post = {
            title   : this.state.title,
            body    : this.state.body
        }
        fetch('https://my-json-server.typicode.com/sarathchandrac/mockjson/posts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
            .then(data => data.json())
            .then(console.log);

    }
    

    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title: </label> <br/>
                        <input name="title" type="text" value={this.state.title} onChange={this.onChange}/>
                    </div>
                    <br/>
                    <div>
                        <label>Body: </label> <br/>
                        <textarea name="body" value={this.state.body} onChange={this.onChange}/>
                    </div>
                    <br/>
                    <div>
                        <button type="submit">Submit</button> 
                    </div>
                </form>
            </div>
        )
    }
}
export default PostForm;