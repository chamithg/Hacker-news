import React from "react";
import { useGlobalContext } from "./context";

const Buttons = () => {
  const { page, nbPages, handlePage, isLoading } = useGlobalContext();

  return (
    <div className="btn-container">
      <button
        disabled={isLoading}
        className="button"
        onClick={() => handlePage("dec")}>
        Prev
      </button>
      <h3>
        <p>
          {page + 1} of {nbPages}
        </p>
      </h3>
      <button
        disabled={isLoading}
        className="button"
        onClick={() => handlePage("inc")}>
        Next
      </button>
    </div>
  );
};

export default Buttons;
