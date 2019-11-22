import React from "react";
import SaveBtn from "../../components/SaveBtn";
import DeleteBtn from "../../components/DeleteBtn";
import "./style.css";

function Book({ id, title, authors, publishedDate, thumbnail, saveBook }) {
    return (
        <div className="row" key={id} >
            <div className="col s12 m6">
                <div className="card">
                    <div className="card-image">
                        <img alt="Book" src={thumbnail} className="img-fluid" />
                        <span className="card-title">{title}</span>
                    </div>
                    <div className="card-content">
                        <p>by {authors}</p>
                        <p>Published - {publishedDate}</p>

                    </div>
                
                <div class="card-action">
                    <SaveBtn id={id} onClick={saveBook} />
                </div>
            </div>
        </div>
    </div>
        
    )
}

export default Book;