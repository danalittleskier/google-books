import React from "react";
import SaveBtn from "../../components/SaveBtn";
import DeleteBtn from "../../components/DeleteBtn";
import "./style.css";

function Book({ id, title, authors, publishedDate, description, thumbnail, deleteButton, bookClick }) {
    return (
        
            <div key={id} className="col s12 m4">
                <div className="card large">
                    <div className="card-image">
                        <img alt="Book" src={thumbnail} />
                        
                    </div>
                    <div className="card-content">
                    <span className="card-title activator grey-text text-darken-2">{title}<i class="material-icons right">more_vert</i></span>
                        <p>by {authors}</p>
                        <p>Published - {publishedDate}</p>                        
                    </div>
                    <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i>Synopsis</span>
                    <p>{description}</p>
                    </div>
                
                <div class="card-action">                   
                    {deleteButton ? <DeleteBtn id={id} onClick={bookClick} /> : <SaveBtn id={id} onClick={bookClick} /> }                   
                </div>
                
            </div>
        
    </div>
        
    )
}

export default Book;