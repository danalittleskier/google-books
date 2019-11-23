import React from "react";
import SaveBtn from "../../components/SaveBtn";
import DeleteBtn from "../../components/DeleteBtn";
import "./style.css";

function Book({ id, title, authors, publishedDate, description, thumbnail, saveBookClick }) {
    return (
        <div className="row" key={id} >
            <div className="col s12 m6">
                <div className="card large">
                    <div className="card-image">
                        <img alt="Book" src={thumbnail} />
                        
                    </div>
                    <div className="card-content">
                    <span className="card-title grey-text text-darken-2">{title}</span>
                        <p>by {authors}</p>
                        <p>Published - {publishedDate}</p>
                        <p className="grey-text text-darken-1">{description}</p>
                    </div>
                
                <div class="card-action">
                    <SaveBtn id={id} onClick={saveBookClick} />
                </div>
            </div>
        </div>
    </div>
        
    )
}

export default Book;