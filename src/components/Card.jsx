import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <Link to={`/character/${props.id}`}>
      <div className="col">
        <div className="card shadow-sm">
          <img width="100%" height="225" src={props.imagen}></img>
          <div className="card-body">
            <h4>{props.name}</h4>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  View
                </button>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  Edit
                </button>
              </div>
              <small className="text-body-secondary">9 mins</small>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
