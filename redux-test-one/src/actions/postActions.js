import { FETCH_POST } from './types';

export const fetchPosts = () => dispatch => { 
                console.log("postActions dispatcher ---->");
        fetch("https://my-json-server.typicode.com/sarathchandrac/mockjson/posts")
            .then(res => res.json())
            .then(posts => dispatch({
                type: FETCH_POST,
                payload: posts

            })).then(data => {
                console.log("data returned postActions dispatcher ---->", data);
            });
        }