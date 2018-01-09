import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";


import './style/index.css';
import NoteForm from "./components/note_form";
import NoteList from "./components/note_list"
import reducers from "./reducers";


const createStoreWithMiddleware = applyMiddleware()(createStore);

class Hello extends Component {
    render() {
        return (
            <div> Hello </div>
        )
    }
} 

class Bye extends Component {
    render() {
        return (
            <div> Bye </div>
        )
    }
} 

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
            <div>
                <Route path="/note-form" component={NoteForm} />
                <Route path="/note-list" component={NoteList} />
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));

