import React from "react";

import { useGlobalContext } from "./context";

const Stories = () => {
  const { isLoading, hits, handleDelete } = useGlobalContext();

  if (isLoading) {
    return <div className="loading"></div>;
  } else {
    return (
      <div className="stories">
        {hits.map((story) => {
          const { objectID, title, num_comments, url, points, author } = story;
          return (
            <article key={objectID} className="story">
              <h4 className="title">{title}</h4>
              <p className="info">
                {points} by <span>{author} | </span> {num_comments} comments
              </p>
              <div>
                <a
                  href={url}
                  className="read-link "
                  target="_blank"
                  rel="noopener noreferrer">
                  Read More..
                </a>
                {/* additional funcitonalities are to open the link in the new page */}
                <button
                  className="remove-btn"
                  onClick={() => handleDelete(objectID)}>
                  Remove
                </button>
              </div>
            </article>
          );
        })}
      </div>
    );
  }
};

export default Stories;
