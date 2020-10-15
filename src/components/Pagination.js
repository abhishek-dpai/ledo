import React from "react";
import PropTypes from "prop-types";

function Pagination(props) {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  // array methods fill
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li
            key={page}
            className={page === currentPage ? "page-item active " : "page-item"}
          >
            <button
              className="page-link"
              onClick={() => onPageChange(page)}
              onKeyPress={() => onPageChange(page)}
              type="button"
              tabIndex={0}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.number.isRequired,
};
export default Pagination;
