import React from "react";
import { useGlobalContext } from "./context";

const Buttons = () => {
  const { page, nbPages, handlePage } = useGlobalContext();

  return (
    <div className="btn-container">
      <button className="button" onClick={page === 0 ? null : page - 1}>
        Prev
      </button>
      <h3>
        <p>
          {page} of {nbPages}
        </p>
      </h3>
      <button
        className="button"
        onClick={page === nbPages ? null : { page: page + 1 }}>
        Next
      </button>
    </div>
  );
};

export default Buttons;
