import React from "react";
import "./style.css";


function DeleteBtn(props) {
  return (
    <a className="waves-effect waves-light btn" {...props} role="button" tabIndex="0">
      ✗ Delete
    </a>
  );
} 

export default DeleteBtn;
