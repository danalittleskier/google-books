import React from "react";
import "./style.css";


function SaveBtn(props) {
  return (
    <a className="waves-effect waves-light btn" {...props} role="button" tabIndex="0">
      Save
    </a>
  );
}

export default SaveBtn;
