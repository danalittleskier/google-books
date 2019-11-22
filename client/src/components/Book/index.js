import React from "react";
import SaveBtn from "../../components/SaveBtn";
import DeleteBtn from "../../components/DeleteBtn";
import "./style.css";

function Book({id, title, authors, publishedDate, thumbnail, saveBook}) {
    return (

        <li key={id} className="list-group-item">
            <p>{title} by {authors}</p>
            <p>Published - {publishedDate}</p>
            <img alt="Book" src={thumbnail} className="img-fluid" />

            <SaveBtn id={id} onClick={saveBook} />



        </li>
    )
}

export default Book;