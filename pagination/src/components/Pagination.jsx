import React from "react";
import ProductCard from "./ProductCard.jsx";

const Pagination = ({
  goToNextPage,
  goToPreviousPage,
  handlePageChange,
  noOfPages,
  currentPage,
  products,
  start,
  end,
}) => {
  return (
    <>
      <h2>Total Products: {products.length}</h2>
      <div className="product-container">
        {products.slice(start, end).map((prod) => {
          return (
            <ProductCard
              key={prod.id}
              title={prod.title}
              image={prod.thumbnail}
            />
          );
        })}
      </div>
      <div className="pagination-container">
        <button
          disabled={currentPage === 0}
          className="arrows"
          onClick={() => goToPreviousPage()}
        >
          ⬅️
        </button>
        {[...Array(noOfPages).keys()].map((n) => {
          return (
            <span
              key={n}
              className={"page-number " + (n === currentPage ? "active" : "")}
              onClick={() => handlePageChange(n)}
            >
              {n + 1}
            </span>
          );
        })}
        <button
          disabled={currentPage === noOfPages - 1}
          className="arrows"
          onClick={() => goToNextPage()}
        >
          ➡️
        </button>
      </div>
    </>
  );
};

export default Pagination;
