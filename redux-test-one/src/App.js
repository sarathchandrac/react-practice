import React from 'react';
import './App.css';
import Posts from './components/Posts';
import PostForm from './components/Postform';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import store from './model/store';



function App() {
    return (
        <Provider store={store} >
            <div className="App">
                <PostForm />
                <hr />
                <Posts />
            </div>

        </Provider>
    );
}

export default App;
