import React, { Component } from "react";
import Comment from "./Comment";
class Comments extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <Comment />
      </div>
    );
  }
}
export default Comments;
