import React, { Component } from 'react';
import PostForm from "./post_form";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Welcome to NoteTaker</h3>
        <PostForm />
      </div>
    );
  }
}

export default App;
